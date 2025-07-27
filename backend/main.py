from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import openai
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RoutineRequest(BaseModel):
    concern: str

@app.post("/generate-routine")
async def generate_routine(data: RoutineRequest):
    prompt = f"""
You are a dermatologist AI. A user described their skin concern: "{data.concern}".
Generate a personalized skincare routine in two parts: Morning and Night.
Each part should list 2–3 steps with product type (not brand), and explain what kind of ingredients to look for.

Format it as JSON like:
{{
  "morning": [
    {{ "step": "Cleanser", "description": "Use a gentle foaming cleanser with salicylic acid" }},
    ...
  ],
  "night": [
    {{ "step": "Cleanser", "description": "Use the same cleanser" }},
    ...
  ]
}}
Only return the JSON object, no commentary.
"""

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful skincare AI assistant."},
                {"role": "user", "content": prompt},
            ],
            temperature=0.7,
        )

        reply = response['choices'][0]['message']['content']
        return eval(reply)  # Note: For production, use `json.loads()` with validation
    except Exception as e:
        return {"error": str(e)}
