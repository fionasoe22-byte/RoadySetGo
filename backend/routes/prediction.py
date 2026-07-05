from fastapi import APIRouter
from pydantic import BaseModel

from services.inference import predict_score

router = APIRouter(
    prefix="/prediction",
    tags=["Prediction"]
)


from typing import Dict

class PredictionRequest(BaseModel):
    features: Dict[str, float]


@router.post("/")
def predict(request: PredictionRequest):

    score = predict_score(request.features)

    return {
        "driver_score": round(score, 2)
    }