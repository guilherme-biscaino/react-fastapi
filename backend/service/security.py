import os
import jwt
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi import APIRouter, Depends, HTTPException, status
from assets.db_helpers import get_user, get_user_by_id
from passlib.hash import bcrypt
from schemas.user import UserOut
from assets.dependencies import DatabaseDependency

from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

JWT_SECRET = os.getenv("JWT_SECRET")


router = APIRouter(tags=['user'])

oauth2_schema = OAuth2PasswordBearer(tokenUrl='token')


@router.post('/login')
async def generate_token(session: DatabaseDependency, form_data: OAuth2PasswordRequestForm = Depends()):
    user = await authenticate_user(form_data.username, form_data.password, session)

    if not user:
        return {'message': "error"}

    user_out = UserOut(id=user.pk_id, name=user.name)

    token = jwt.encode(user_out.model_dump(), key=JWT_SECRET)

    return {'access_token': token, 'token_type': 'bearer'}


async def get_current_user(
        session: DatabaseDependency,
        token: str = Depends(oauth2_schema)):
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=['HS256'])
        user = await get_user_by_id(session, payload['id'])
        if user.pk_id == payload['id'] and user.name == payload['name']:
            validated_user = UserOut(id=user.pk_id, name=user.name)
            return validated_user
    except:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)



async def authenticate_user(username: str, password: str, session):
    user = await get_user(session, username)
    if not user:
        return False
    if not bcrypt.verify(password, user.password):
        return False
    return user
