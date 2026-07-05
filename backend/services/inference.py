from pathlib import Path

import joblib
import pandas as pd

BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_DIR = BASE_DIR / "models"

model = joblib.load(MODEL_DIR / "roadysetgo_model.pkl")
feature_columns = joblib.load(MODEL_DIR / "feature_columns.pkl")


def predict_score(features: dict):

    X = pd.DataFrame([features])

    X = X[feature_columns]

    prediction = model.predict(X)[0]

    return float(prediction)