from fastapi import APIRouter, Body, status, HTTPException
from models.user import userModel
from schemas.user import UserIn, UserRegister
from schemas.account import AccountOut
from schemas.user import UserRegister
from assets.dependencies import DatabaseDependency
from passlib.hash import bcrypt
import datetime
# ctrl + righ-click on bcrypt module of passlib
# got to line 620
# change:
# version = _bcrypt.__about__.__version__
# to:
# version = getattr(_bcrypt, '__version__', '<unknown>')

router = APIRouter(tags=["user"])


@router.post("/register",
             status_code=status.HTTP_201_CREATED)
async def user_register(
    session: DatabaseDependency,
    user: UserRegister = Body(...)
):

    today = datetime.date.today() # get todays date object
    user_age = ((today - user.birthdate).days/365.25).__format__(".0f") # calculates user age

    if int(user_age) >= 18: # check if user age is 18 or above
        password_hash = bcrypt.hash((user.password).encode()) # hash users password
        user_model = userModel(**user.model_dump(exclude={"password"}), password=password_hash)
        try: # tries to add user to add user to userModel
            session.add(user_model)
            await session.commit()
        except:
            # return error if user already exists
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="user already exists")

        raise HTTPException(status_code=status.HTTP_201_CREATED)

    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User must be at least 18 years old")
