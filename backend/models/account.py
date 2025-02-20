from assets.model import BaseModel
from pydantic import Field
from decimal import Decimal
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Integer, DECIMAL, ForeignKey


class accountModel(BaseModel):
    __tablename__ = "accounts"

    pk_id: Mapped[int] = mapped_column(Integer, primary_key=True)
    balance: Mapped[Decimal] = mapped_column(DECIMAL, default=0)
    user_id: Mapped[int] = mapped_column(ForeignKey('users.pk_id'))
    user: Mapped["userModel"] = relationship(back_populates="account")
    password: Mapped[str] = mapped_column(String, nullable=False)
