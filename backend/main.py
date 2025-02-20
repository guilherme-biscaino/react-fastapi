from fastapi import FastAPI
from controllers import user, transactions, account
from service import security

app = FastAPI()
app.include_router(user.router)
app.include_router(transactions.router)
app.include_router(account.router)
app.include_router(security.router)
