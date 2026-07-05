from fastapi import APIRouter

from services.dashboard import df
from services.inference import predict_score

router = APIRouter(
    prefix="/drive-summary",
    tags=["Drive Summary"],
)


@router.get("/")
def drive_summary():

    latest = df.iloc[-1].to_dict()

    features = {
        k: v
        for k, v in latest.items()
        if isinstance(v, (int, float))
    }

    score = predict_score(features)

    # ---------------------------------------
    # Strengths
    # ---------------------------------------

    strengths = []

    if latest["harsh_braking_count"] == 0:
        strengths.append(
            "Excellent braking control throughout the trip."
        )

    if latest["lane_deviation_count"] == 0:
        strengths.append(
            "Maintained excellent lane discipline."
        )

    if latest["sharp_turn_count"] == 0:
        strengths.append(
            "Smooth steering and cornering."
        )

    if latest["steering_smoothness"] > 0.9:
        strengths.append(
            "Steering inputs were smooth and consistent."
        )

    if not strengths:
        strengths.append(
            "Maintained safe driving habits."
        )

    # ---------------------------------------
    # Improvements
    # ---------------------------------------

    improvements = []

    if latest["fuel_consumption"] > 7:
        improvements.append(
            "Reduce fuel consumption with smoother acceleration."
        )

    if latest["avg_acceleration"] > 1:
        improvements.append(
            "Accelerate more gradually."
        )

    if latest["behavioral_consistency_index"] < 0.6:
        improvements.append(
            "Maintain a more consistent driving style."
        )

    if latest["speed_variance"] > 10:
        improvements.append(
            "Keep a steadier driving speed."
        )

    if not improvements:
        improvements.append(
            "Keep practising smooth and safe driving."
        )

    return {

        "driver_score": round(score, 1),

        "driver_profile": latest["driver_profile"],

        "trip_distance": round(
            latest["trip_distance"],
            1,
        ),

        "trip_duration": round(
            latest["trip_duration"],
            1,
        ),

        "average_speed": round(
            latest["avg_speed"],
            1,
        ),

        "max_speed": round(
            latest["max_speed"],
            1,
        ),

        "fuel_consumption": round(
            latest["fuel_consumption"],
            1,
        ),

        # -----------------------------
        # NEW FIELDS
        # -----------------------------

        "safety_rating": max(
            60,
            min(
                100,
                round(
                    score
                    + (
                        5
                        if latest["harsh_braking_count"] == 0
                        else 0
                    )
                    + (
                        5
                        if latest["lane_deviation_count"] == 0
                        else 0
                    )
                    + (
                        5
                        if latest["sharp_turn_count"] == 0
                        else 0
                    )
                ),
            ),
        ),

        "best_skill": (
            "Steering Control"
            if latest["steering_smoothness"] >= 0.9
            else "Lane Keeping"
            if latest["lane_deviation_count"] == 0
            else "Smooth Braking"
            if latest["harsh_braking_count"] == 0
            else "Safe Driving"
        ),

        "ai_rating": (
            "Excellent"
            if score >= 90
            else "Very Good"
            if score >= 80
            else "Good"
            if score >= 70
            else "Developing"
        ),

        "strengths": strengths,

        "improvements": improvements,

    }