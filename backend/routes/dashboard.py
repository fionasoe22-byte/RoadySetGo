from fastapi import APIRouter

from services.dashboard import get_dashboard_data

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


@router.get("/")
def dashboard():
    return get_dashboard_data()