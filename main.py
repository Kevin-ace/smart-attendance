from fastapi import FastAPI
from app.auth import auth_router
from app.database import create_database

app = FastAPI()

# Register the authentication router
app.include_router(auth_router)

create_database()

@app.get("/")
def root():
    return {"message": "Smart Attendance System API"}
