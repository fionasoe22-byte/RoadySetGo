from fastapi import APIRouter
from pydantic import BaseModel

from services.dashboard import df
from services.inference import predict_score
from services.gemini import (
    generate_coaching,
    generate_chat_response,
)

router = APIRouter(
    prefix="/coach",
    tags=["AI Coach"],
)


# =====================================================
# Request Model
# =====================================================

class ChatRequest(BaseModel):
    question: str


# =====================================================
# AI Coach Dashboard
# =====================================================

@router.get("/")
def coach():

    latest = df.iloc[-1].to_dict()

    # Numeric features for the ML model
    features = {
        k: v
        for k, v in latest.items()
        if isinstance(v, (int, float))
    }

    score = predict_score(features)

    feedback = generate_coaching(
        score,
        latest,
    )

    recommendation = (
        "Focus on smoother acceleration and maintaining a more consistent "
        "driving style. This will improve fuel efficiency and help raise "
        "your overall driving score."
    )

    return {

        "driver_score": round(score, 2),

        "driver_profile": latest.get(
            "driver_profile",
            "Unknown",
        ),

        "behavioral_consistency": round(
            latest.get(
                "behavioral_consistency_index",
                0,
            )
            * 100,
            1,
        ),

        "recommendation": recommendation,

        "feedback": feedback,

        "ai_confidence": 93,

        "estimated_next_score": min(
            100,
            round(score + 5),
        ),

        "focus_area": "Fuel Efficiency",

    }


# =====================================================
# AI Chat
# =====================================================

@router.post("/chat")
def chat(request: ChatRequest):
    try:
        latest = df.iloc[-1].to_dict()

        features = {
            k: v
            for k, v in latest.items()
            if isinstance(v, (int, float))
        }

        score = predict_score(features)

        answer = generate_chat_response(
            question=request.question,
            score=score,
            features=latest,
        )

        return {
            "answer": answer
        }

    except Exception as e:
        import traceback

        traceback.print_exc()

        return {
            "error": str(e)
        }