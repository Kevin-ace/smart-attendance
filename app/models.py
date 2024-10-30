from sqlalchemy import Column, String, Integer
from sqlalchemy.ext.declarative import declarative_base
from app.database import create_database

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(String, nullable=False)  # 'student' or 'professor'

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://smsadmin:admin@localhost/attendance_db"

engine = create_engine(DATABASE_URL)
Base.metadata.create_all(engine)
