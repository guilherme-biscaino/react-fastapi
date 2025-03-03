from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from controllers import user, transactions, account
from service import security

app = FastAPI()

app.include_router(user.router)
app.include_router(transactions.router)
app.include_router(account.router)
app.include_router(security.router)


origins = [
    "hhtps://localhost",
    "https://localhost:8000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)