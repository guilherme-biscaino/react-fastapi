from fastapi import APIRouter, Body, Depends, HTTPException, status
from assets.dependencies import DatabaseDependency
from models.account import accountModel
from schemas.account import AccountOut, AccountIn, AccountCreateIn, AccountCreateOut
from assets.db_helpers import get_account_by_id, validate_user_owns_account
from sqlalchemy import select, or_
from models.transactions import transactionModel
from schemas.transactions import TransactionHistoryOut
from service.security import get_current_user
import bcrypt

router = APIRouter(prefix="/account", tags=["account"])


@router.post(
        "/create",
        response_model=AccountCreateOut
        )
async def account_create(
    session: DatabaseDependency,
    user=Depends(get_current_user),
    account: AccountCreateIn = Body(...)
) -> AccountCreateOut:

    account_out = AccountOut(balance=0.0, password=bcrypt.hashpw((account.password).encode(), bcrypt.gensalt()))
    account_model = accountModel(**account_out.model_dump(), user_id=user.id)
    accounts = (await session.execute(select(accountModel).filter_by(user_id=user.id))).scalars().all()

    if len(accounts) < 3:
        session.add(account_model)
        await session.commit()
        account_id = (await session.execute(select(accountModel.id).filter_by(user_id=user.id).order_by(accountModel.id.desc()))).scalars().first()
        account_create_out = AccountCreateOut(id=account_id, balance=account_out.balance, password=account.password)
        return account_create_out
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Account creation limit exceeded")


@router.delete("/delete")
async def account_delete(
    session: DatabaseDependency,
    user=Depends(get_current_user),
    account: AccountIn = Body(...)
):

    delete_choice = await get_account_by_id(session, accountModel, account.account)
    if await validate_user_owns_account(delete_choice, user.id, account.password):
        await session.delete(delete_choice)
        await session.commit()
        raise HTTPException(status_code=status.HTTP_200_OK)


@router.get("/history",
            response_model=list[TransactionHistoryOut])
async def all_history(
    session: DatabaseDependency,
    user=Depends(get_current_user),
):
    smt = select(transactionModel).join(
        accountModel,
        (transactionModel.from_account == accountModel.id) | (transactionModel.to_account == accountModel.id)
        ).filter(accountModel.user_id == user.id)

    transacoes: list[TransactionHistoryOut] = (await session.execute(smt)).scalars().all()

    return transacoes


@router.get("/history/{account}",
            response_model=list[TransactionHistoryOut])
async def account_history(
    account: str,
    session: DatabaseDependency,
    user=Depends(get_current_user)
):
    smt = select(transactionModel).join(
        accountModel, accountModel.id == account
    ).filter(
        or_(

            (transactionModel.to_account == account) & (accountModel.user_id == user.id),

            (transactionModel.from_account == account) & (accountModel.user_id == user.id)
        )
    )

    transacoes: list[TransactionHistoryOut] = (await session.execute(smt)).scalars().all()

    return transacoes
