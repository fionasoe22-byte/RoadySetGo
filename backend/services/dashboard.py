from pathlib import Path
import pandas as pd

# ---------------------------------------
# Load Dataset
# ---------------------------------------

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

csv_files = list(DATA_DIR.glob("*.csv"))

if not csv_files:
    raise FileNotFoundError(
        f"No CSV file found in {DATA_DIR}"
    )

DATA_PATH = csv_files[0]

print(f"📊 Loading dashboard data from: {DATA_PATH.name}")

df = pd.read_csv(DATA_PATH)

# ---------------------------------------
# Dataset Benchmarks
# ---------------------------------------

BENCHMARKS = {

    "fuel": {
        "q1": df["fuel_consumption"].quantile(0.25),
        "q3": df["fuel_consumption"].quantile(0.75),
    },

    "steering": {
        "q1": df["steering_smoothness"].quantile(0.25),
        "q3": df["steering_smoothness"].quantile(0.75),
    },

    "consistency": {
        "q1": df["behavioral_consistency_index"].quantile(0.25),
        "q3": df["behavioral_consistency_index"].quantile(0.75),
    },

    "acceleration": {
        "q1": df["avg_acceleration"].quantile(0.25),
        "q3": df["avg_acceleration"].quantile(0.75),
    },

    "speed_variance": {
        "q1": df["speed_variance"].quantile(0.25),
        "q3": df["speed_variance"].quantile(0.75),
    }

}

# ---------------------------------------
# Dashboard Service
# ---------------------------------------

def get_dashboard_data():

    latest = df.iloc[-1]

    average_score = round(df["driving_score"].mean(), 1)
    total_trips = len(df)
    total_distance = round(df["trip_distance"].sum(), 1)

    safety_rating = round(average_score, 1)

    xp = int(average_score * 10)
    level = min(10, (xp // 200) + 1)

    # TODO: Replace with real streak calculation
    streak = 12

    # ---------------------------------------
    # Radar Metrics
    # ---------------------------------------

    safety = max(
        0,
        min(
            100,
            100
            - latest["harsh_braking_count"] * 5
            - latest["anomaly_count"] * 3
            - latest["geofencing_violation"] * 5,
        ),
    )

    control = max(
        0,
        min(
            100,
            100
            - latest["avg_lane_deviation"] * 80
            - latest["sharp_turn_count"] * 2
            + latest["steering_smoothness"] * 10,
        ),
    )

    awareness = max(
        0,
        min(
            100,
            latest["behavioral_consistency_index"] * 100
            - latest["lane_deviation_count"] * 2
            - latest["route_anomaly_count"] * 3,
        ),
    )

    efficiency = max(
        0,
        min(
            100,
            100
            - latest["fuel_consumption"] * 5
            - latest["avg_rpm"] / 100,
        ),
    )

    comfort = max(
        0,
        min(
            100,
            100
            - latest["speed_variance"] * 2
            - latest["avg_brake_usage"] * 20
            + latest["avg_acceleration"] * 10,
        ),
    )

    # ---------------------------------------
    # Recommendation
    # ---------------------------------------

    if latest["driving_score"] >= 85:
        recommendation = (
            "Excellent driving performance. Continue maintaining smooth steering, "
            "consistent speed, and safe braking habits."
        )

    elif latest["driving_score"] >= 70:
        recommendation = (
            "Good overall performance. Focus on reducing lane deviations and "
            "maintaining smoother braking to reach the next level."
        )

    elif latest["driving_score"] >= 50:
        recommendation = (
            "You're making progress. Work on improving lane discipline, "
            "reducing harsh braking, and driving more consistently."
        )

    else:
        recommendation = (
            "Additional practice is recommended. Drive at safer speeds, "
            "avoid sudden braking, and improve lane control."
        )

    # ---------------------------------------
    # Return Dashboard Data
    # ---------------------------------------

    return {
        "driver_score": round(float(latest["driving_score"]), 2),
        "average_score": average_score,
        "safety_rating": safety_rating,
        "total_trips": total_trips,
        "distance": total_distance,
        "xp": xp,
        "level": level,
        "streak": streak,

        "driver_profile": latest["driver_profile"],

        "behavioral_consistency": round(
            float(latest["behavioral_consistency_index"]) * 100,
            1,
        ),

        "recommendation": recommendation,

        "radar": [
            {
                "skill": "Safety",
                "value": round(safety),
            },
            {
                "skill": "Control",
                "value": round(control),
            },
            {
                "skill": "Awareness",
                "value": round(awareness),
            },
            {
                "skill": "Efficiency",
                "value": round(efficiency),
            },
            {
                "skill": "Comfort",
                "value": round(comfort),
            },
        ],
    }