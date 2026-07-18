from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.generate import router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # tighten this after deployment
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def health():
    return {"status": "ok"}