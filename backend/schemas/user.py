from pydantic import BaseModel, Field
from typing import Annotated
from datetime import date


class UserRegister(BaseModel):
    name: Annotated[str, Field(description="user name", examples=['pedro alcantara machado'], max_length=50)]
    cpf: Annotated[str, Field(description="user cpf", examples=['12345678942'], min_length=11, max_length=11)]
    birthdate: Annotated[date, Field(description="user birthdate", examples=['2025-02-13'])]
    password: Annotated[str, Field(description="user password", examples=['0123456789'], min_length=6, max_length=10)]


class UserIn(BaseModel):
    cpf: Annotated[str, Field(description="user cpf", examples=['12345678942'], min_length=11, max_length=11)]
    password: Annotated[str, Field(description="user password", examples=['456842138'])]


class UserOut(BaseModel):
    id: Annotated[int, Field(description="user id")]
    name: Annotated[str, Field(description="user name", examples=['pedro alcantara machado'])]
