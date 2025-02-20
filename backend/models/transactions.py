from assets.model import BaseModel
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import Integer, String, UUID, DECIMAL, ForeignKey
from decimal import Decimal


class transactionModel(BaseModel):
    __tablename__ = "transactions"

    pk_id: Mapped[int] = mapped_column(Integer, primary_key=True)
    amount: Mapped[Decimal] = mapped_column(DECIMAL)
    transaction_type: Mapped[str] = mapped_column(String, nullable=False)

    to_account = mapped_column(UUID, ForeignKey('accounts.id'))
    from_account = mapped_column(UUID, ForeignKey('accounts.id'))

    to_account_id = relationship("accountModel", foreign_keys="transactionModel.to_account")
    from_account_id = relationship("accountModel", foreign_keys="transactionModel.from_account")
