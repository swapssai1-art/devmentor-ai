from fastapi import APIRouter
from pydantic import BaseModel
from services.ai_client import ask_ai
from services.prompts import PROMPTS

router = APIRouter()

class GenerateRequest(BaseModel):
    mode: str
    input: dict

@router.post("/api/generate")
def generate(req: GenerateRequest):
    system_prompt = PROMPTS.get(req.mode, "You are a helpful assistant.")
    user_prompt = str(req.input)
    result = ask_ai(system_prompt, user_prompt)
    return {"result": result}