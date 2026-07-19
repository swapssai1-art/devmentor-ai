from services.ai_client import ask_ai

try:
    result = ask_ai("You are a helpful assistant.", "Say hello in one sentence.")
    print("SUCCESS:")
    print(result)
except Exception as e:
    print("ERROR:")
    print(type(e).__name__, "-", e)