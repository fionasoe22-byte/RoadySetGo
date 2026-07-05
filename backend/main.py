from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.prediction import router as prediction_router
from routes.dashboard import router as dashboard_router
from routes.coach import router as coach_router
from routes.drive_summary import router as drive_summary_router
from routes.insights import router as insights_router
from routes.profile import router as profile_router

# =====================================================
# Create FastAPI App
# =====================================================

app = FastAPI(
    title="RoadySetGo API",
    version="1.0.0",
    description="Backend API for RoadySetGo AI Driving Assistant",
)

# =====================================================
# Enable CORS
# =====================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =====================================================
# Register Routers
# =====================================================

app.include_router(prediction_router)
app.include_router(dashboard_router)
app.include_router(coach_router)
app.include_router(drive_summary_router)
app.include_router(insights_router)
app.include_router(profile_router)

# =====================================================
# Root Endpoint
# =====================================================

@app.get("/")
def root():
    return {
        "message": "🚗 RoadySetGo Backend Running",
        "version": "1.0.0",
        "docs": "/docs",
    }

# =====================================================
# Health Check
# =====================================================

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "RoadySetGo Backend",
    }