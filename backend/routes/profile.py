from fastapi import APIRouter

from services.dashboard import df
from services.inference import predict_score

router = APIRouter(
    prefix="/profile",
    tags=["Profile"],
)


@router.get("/")
def profile():

    latest = df.iloc[-1].to_dict()

    features = {
        k: v
        for k, v in latest.items()
        if isinstance(v, (int, float))
    }

    score = predict_score(features)

    total_trips = len(df)

    total_distance = round(
        df["trip_distance"].sum(),
        1,
    )

    safe_drives = len(
        df[
            (df["harsh_braking_count"] == 0)
            &
            (df["lane_deviation_count"] == 0)
        ]
    )

    if score >= 90:
        achievement = "Elite Driver"

    elif score >= 80:
        achievement = "Excellent Driver"

    elif score >= 70:
        achievement = "Confident Driver"

    else:
        achievement = "Developing Driver"

    return {

        "name": "Fiona Soe",

        "email": "fiona@example.com",

        "driver_profile": latest.get(
            "driver_profile",
            "Confident Driver",
        ),

        "driver_score": round(score, 1),

        "total_trips": total_trips,

        "total_distance": total_distance,

        "safe_drives": safe_drives,

        "member_since": "2025",

        "achievement": achievement,

    }