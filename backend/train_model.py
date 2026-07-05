from pathlib import Path

import joblib
import pandas as pd

from sklearn.ensemble import GradientBoostingRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, r2_score

BASE_DIR = Path(__file__).resolve().parent

DATA_PATH = BASE_DIR / "data" / "roadysetgo_features11.csv"
MODEL_DIR = BASE_DIR / "models"

MODEL_DIR.mkdir(exist_ok=True)

df = pd.read_csv(DATA_PATH)

feature_columns = [
    c
    for c in df.columns
    if c not in [
        "driver_id",
        "trip_id",
        "driving_score",
        "driver_profile",
        "driver_profile_encoded",
    ]
]

X = df[feature_columns]
y = df["driving_score"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
)

model = GradientBoostingRegressor(
    random_state=42
)

model.fit(X_train, y_train)

pred = model.predict(X_test)

print()
print("MAE:", mean_absolute_error(y_test, pred))
print("R2 :", r2_score(y_test, pred))
print()

joblib.dump(model, MODEL_DIR / "roadysetgo_model.pkl")

joblib.dump(feature_columns, MODEL_DIR / "feature_columns.pkl")

print("✅ Model saved successfully!")