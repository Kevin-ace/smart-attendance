from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas import UserCreate, UserLogin
from app.crud import create_user, authenticate_user
from app.security import create_access_token

auth_router = APIRouter()

@auth_router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    db_user = create_user(db, user)
    return {"message": "User registered successfully", "user": db_user}

@auth_router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = authenticate_user(db, user.email, user.password)
    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    token = create_access_token(db_user.email)
    return {"access_token": token, "token_type": "bearer"}
