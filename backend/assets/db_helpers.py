from fastapi import HTTPException, status
from sqlalchemy import select
from models.account import accountModel
from models.user import userModel
import bcrypt


async def get_user_by_id(db_session, user):
    return (await db_session.execute(select(userModel).filter_by(pk_id=user))).scalars().first()


async def get_user(db_session, user):
    return (await db_session.execute(select(userModel).filter_by(cpf=user))).scalars().first()


async def get_account_by_id(db_session, db_model, account_id):

    return (
        await db_session.execute(select(db_model).filter_by(id=account_id))
        ).scalars().first()


async def validate_operations(session, transaction_type, amount, account_start, transaction_model, user, account_target=None):
    account = await get_account_by_id(session, accountModel, account_start)

    if await validate_user_owns_account(account, user["id"], user["password"]):
        match transaction_type:

            case "withdraw":
                if amount <= account.balance:
                    account.balance -= amount
                    session.add(transaction_model)
                    await session.commit()

            case "deposit":
                if amount > 0:
                    account.balance += amount
                    session.add(transaction_model)
                    await session.commit()

            case "transfer":
                account_target = await get_account_by_id(session, accountModel, account_target)
                if account_target and amount > 0 and account.balance >= amount:
                    account.balance -= amount
                    account_target.balance += amount
                    session.add(transaction_model)
                    await session.commit()

            case _:
                raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Transaction type missmatch")


async def validate_user_owns_account(query_result, session_user_id, account_password):

    if query_result.user_id != session_user_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Account id error")

    if not bcrypt.checkpw((account_password).encode(), (query_result.password).encode()):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Account id or passsword wrong")
    return True
