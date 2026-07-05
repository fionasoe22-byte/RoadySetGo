from services.gemini import generate_coaching

print(
    generate_coaching(
        60.25,
        {
            "avg_speed": 65,
            "lane_deviation_count": 2,
            "harsh_braking_count": 1,
        },
    )
)