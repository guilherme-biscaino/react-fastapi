from pydantic import BaseModel, Field, UUID4
from typing import Annotated
from decimal import Decimal


class Transaction(BaseModel):
    account_start: Annotated[UUID4, Field(description="account user wants to take money from")]
    account_end: Annotated[UUID4, Field(description="account user wants to send money to")]
    amount: Annotated[Decimal, Field(description="amount of money user wants to send")]
    password: Annotated[str, Field(description="account password")]


class TransactionIn(BaseModel):
    account_start: Annotated[UUID4, Field(description="account user wants to take money from")]
    amount: Annotated[Decimal, Field(description="amount of money user wants to send")]
    password: Annotated[str, Field(description="account password")]


class TransactionOut(BaseModel):
    account_start: Annotated[UUID4, Field(description="account user wants to send money to")]
    amount: Annotated[Decimal, Field(description="amount of money user wants to send")]
    type: Annotated[str, Field(description="type of transaction")]


class TransactionHistoryOut(BaseModel):
    from_account: Annotated[UUID4, Field(description="account user wants to take money from")]
    value: Annotated[Decimal, Field(description="amount of money user wants to send")]
    transaction_type: Annotated[str, Field(description="type of transaction")]
    to_account: Annotated[UUID4, Field(description="account user wants to send money to")]
    id: Annotated[UUID4, Field(description="transaction id")]
