from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase
from sqlalchemy import UUID
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from uuid import uuid4


class BaseModel(DeclarativeBase):
    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), default=uuid4, nullable=False, unique=True)