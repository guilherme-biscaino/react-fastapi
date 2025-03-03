from fastapi import APIRouter, Body, Depends
from schemas.transactions import Transaction, TransactionIn, TransactionOut, TransactionBasicOut
from assets.dependencies import DatabaseDependency
from models.transactions import transactionModel
from assets.db_helpers import validate_operations
from service.security import get_current_user

router = APIRouter(tags=["transactions"])


@router.post("/deposit",
             response_model=TransactionBasicOut)
async def deposit(
    session: DatabaseDependency,
    user=Depends(get_current_user),
    transaction: TransactionIn = Body(...)
) -> TransactionBasicOut:

    transaction_out = TransactionBasicOut(account_start=transaction.account_start, amount=transaction.amount, type="deposit")

    transaction_model = transactionModel(
        amount=transaction.amount,
        transaction_type="deposit",
        to_account=transaction.account_start,
        from_account=transaction.account_start)

    await validate_operations(
        session, "deposit",
        transaction.amount, transaction.account_start,
        transaction_model, {"id": user.id, "password": transaction.password})
    return transaction_out


@router.post("/withdraw",
             response_model=TransactionBasicOut)
async def withdraw(
    session: DatabaseDependency,
    user=Depends(get_current_user),
    transaction: TransactionIn = Body(...)
) -> TransactionBasicOut:

    transaction_out = TransactionBasicOut(account_start=transaction.account_start, amount=transaction.amount, type="withdraw")

    transaction_model = transactionModel(
        amount=transaction.amount,
        transaction_type="withdraw",
        to_account=transaction.account_start,
        from_account=transaction.account_start)

    await validate_operations(
        session, "withdraw",
        transaction.amount, transaction.account_start,
        transaction_model, {"id": user.id, "password": transaction.password})
    return transaction_out


@router.post("/transfer")
async def transfer(
    session: DatabaseDependency,
    user=Depends(get_current_user),
    transaction: Transaction = Body(...)
):

    transaction_out = TransactionOut(account_start=transaction.account_start, amount=transaction.amount, type="transfer", account_end=transaction.account_end)

    transaction_model = transactionModel(
        amount=transaction.amount,
        transaction_type="transfer",
        to_account=transaction.account_start,
        from_account=transaction.account_end)

    await validate_operations(
        session, "transfer",
        transaction.amount, transaction.account_start,
        transaction_model, {"id": user.id, "password": transaction.password},
        transaction.account_end)
    return transaction_out
