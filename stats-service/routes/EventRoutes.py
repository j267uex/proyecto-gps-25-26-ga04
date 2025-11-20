from fastapi import APIRouter
from controller.EventController import router as event_router

# Tarea GA04-22-H10.1-Endpoint-events-validación-y-persistencia-cola legada

router = APIRouter()
router.include_router(event_router)