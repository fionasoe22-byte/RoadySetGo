import os
import json

from dotenv import load_dotenv
import google.generativeai as genai

from services.dashboard import df, BENCHMARKS

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


# ==========================================================
# Helper Functions
# ==========================================================

def classify_high(value, benchmark):
    if value >= benchmark["q3"]:
        return "Excellent"
    elif value >= benchmark["q1"]:
        return "Good"
    return "Needs Improvement"


def classify_low(value, benchmark):
    if value <= benchmark["q1"]:
        return "Excellent"
    elif value <= benchmark["q3"]:
        return "Good"
    return "Needs Improvement"


# ==========================================================
# Initial AI Coaching Report
# ==========================================================

def generate_coaching(score: float, features: dict):

    fuel = features["fuel_consumption"]
    steering = features["steering_smoothness"]
    consistency = features["behavioral_consistency_index"]
    acceleration = features["avg_acceleration"]
    speed_variance = features["speed_variance"]

    # ---------------------------------------
    # Dataset Rankings
    # ---------------------------------------

    fuel_rank = round(
        (df["fuel_consumption"] > fuel).mean() * 100
    )

    steering_rank = round(
        (df["steering_smoothness"] < steering).mean() * 100
    )

    consistency_rank = round(
        (
            df["behavioral_consistency_index"] < consistency
        ).mean()
        * 100
    )

    # ---------------------------------------
    # AI Summary
    # ---------------------------------------

    insights = {

        "Driver Score":
            round(score, 1),

        "Driver Profile":
            features.get("driver_profile", "Unknown"),

        "Driving Level":
            (
                "Excellent"
                if score >= 90 else
                "Confident"
                if score >= 75 else
                "Developing"
            ),

        "Fuel Efficiency":
            classify_low(
                fuel,
                BENCHMARKS["fuel"],
            ),

        "Steering":
            classify_high(
                steering,
                BENCHMARKS["steering"],
            ),

        "Driving Consistency":
            classify_high(
                consistency,
                BENCHMARKS["consistency"],
            ),

        "Acceleration":
            classify_low(
                acceleration,
                BENCHMARKS["acceleration"],
            ),

        "Speed Stability":
            classify_low(
                speed_variance,
                BENCHMARKS["speed_variance"],
            ),

        "Lane Keeping":
            (
                "Excellent"
                if features["lane_deviation_count"] == 0
                else "Needs Improvement"
            ),

        "Braking":
            (
                "Excellent"
                if features["harsh_braking_count"] == 0
                else "Needs Improvement"
            ),

        "Cornering":
            (
                "Excellent"
                if features["sharp_turn_count"] == 0
                else "Needs Improvement"
            ),

        "Safety":
            (
                "Excellent"
                if (
                    features["anomaly_count"] == 0
                    and features["geofencing_violation"] == 0
                )
                else "Needs Improvement"
            ),

        "Fuel Efficiency Rank":
            f"Better than {fuel_rank}% of drivers",

        "Steering Rank":
            f"Better than {steering_rank}% of drivers",

        "Consistency Rank":
            f"Better than {consistency_rank}% of drivers",

    }

    prompt = f"""
You are RoadySetGo AI.

You are the driver's personal AI driving mentor.

The driver has just completed a trip.

Driver Summary:

{insights}

Complete Driving Features:

{features}

Instructions:

Speak naturally.

Sound like a premium in-car AI assistant.

Be encouraging.

Be concise.

Focus on coaching.

Never mention:

- datasets
- CSV
- machine learning
- raw metrics
- unusual values

Do not speculate.

Never use markdown.

Never use bullet symbols.

Return ONLY valid JSON.

Format:

{{
    "intro":"...",
    "summary":"...",
    "strengths":[
        "...",
        "...",
        "..."
    ],
    "improvements":[
        "...",
        "...",
        "..."
    ],
    "next_goal":"...",
    "motivation":"..."
}}
"""

    response = model.generate_content(prompt)

    text = response.text.strip()

    if text.startswith("```"):
        text = (
            text.replace("```json", "")
            .replace("```", "")
            .strip()
        )

    try:
        return json.loads(text)

    except Exception:

        return {

            "intro":
                "Welcome back! Your RoadySetGo mentor is here to review your latest drive.",

            "summary":
                text,

            "strengths": [],

            "improvements": [],

            "next_goal":
                "Continue practising smooth and safe driving.",

            "motivation":
                "You're making excellent progress. Ask me anything about your latest trip."

        }


# ==========================================================
# AI Chat
# ==========================================================

def generate_chat_response(
    question: str,
    score: float,
    features: dict,
):

    insights = {

        "Driver Score":
            round(score, 1),

        "Driver Profile":
            features.get("driver_profile", "Unknown"),

        "Behavioral Consistency":
            round(
                features["behavioral_consistency_index"] * 100,
                1,
            ),

        "Fuel Consumption":
            round(
                features["fuel_consumption"],
                2,
            ),

        "Harsh Braking":
            features["harsh_braking_count"],

        "Lane Deviations":
            features["lane_deviation_count"],

        "Sharp Turns":
            features["sharp_turn_count"],

    }

    prompt = f"""
You are RoadySetGo AI.

You are continuing a conversation with the driver.

Driver Summary:

{insights}

User Question:

"{question}"

Instructions:

Answer ONLY the user's question.

Do not repeat the full driving report.

Be conversational.

Sound like a premium AI driving mentor.

Keep the response under 100 words.

Give practical driving advice.

If the user asks how to improve their score,
explain the biggest factors affecting it.

Never mention datasets.

Never mention raw metrics.

Never use markdown.

Never use bullet points.
"""

    response = model.generate_content(prompt)

    return response.text.strip()