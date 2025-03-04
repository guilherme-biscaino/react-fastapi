from pydantic import BaseModel, Field, UUID4
from typing import Annotated
from decimal import Decimal


class Account(BaseModel):
    id: Annotated[UUID4, Field(description="account id")]
    password: Annotated[str, Field(description="account password")]


class AccountOut(BaseModel):
    balance: Annotated[Decimal, Field(description="user birthdate")]
    password: Annotated[str, Field(description="user password")]


class AccountIn(BaseModel):
    account: Annotated[UUID4, Field(description="account id")]
    password: Annotated[str, Field(description="account password", min_length=4, max_length=4)]


class AccountCreateIn(BaseModel):
    password: Annotated[str, Field(description="account password", min_length=4, max_length=4)]


class AccountCreateOut(BaseModel):
    id: Annotated[UUID4, Field(description="accound id")]
    balance: Annotated[Decimal, Field(description="account balance")]
    password: Annotated[str, Field(description="account password")]


class AccountGetAllOut(BaseModel):
    id: Annotated[UUID4, Field(description="account id")]
    balance: Annotated[Decimal, Field(description="user birthdate")]
