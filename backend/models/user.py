from pydantic import Field
from datetime import date
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Integer, Date

from assets.model import BaseModel


class userModel(BaseModel):
    __tablename__ = "users"

    pk_id: Mapped[int] = mapped_column(Integer, primary_key=True)
    account: Mapped["accountModel"] = relationship(back_populates="user", cascade="all, delete")
    name: Mapped[str] = mapped_column(String, nullable=False)
    cpf: Mapped[str] = mapped_column(String, nullable=False, unique=True)
    birthdate: Mapped[date] = mapped_column(Date, nullable=False)
    password: Mapped[str] = mapped_column(String, nullable=False)
