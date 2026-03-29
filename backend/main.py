"""FastAPI backend for PulseFabric Monitor dashboard.

Serves the same 4 REST endpoints that the Angular frontend expects,
loading data from db.json at startup so the data source is unchanged.
"""

import json
from pathlib import Path
from typing import Literal

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# ---------------------------------------------------------------------------
# Pydantic models (mirrors frontend api.models.ts)
# ---------------------------------------------------------------------------


class KpiDto(BaseModel):
    id: str
    title: str
    value: str
    unit: str | None = None
    trend: Literal["up", "down", "stable"]
    trendLabel: str
    icon: str


class TrafficDto(BaseModel):
    time: str
    inbound: float
    outbound: float
    latency: float


class IncidentDto(BaseModel):
    region: str
    critical: int
    warning: int
    info: int


class AlertDto(BaseModel):
    id: int
    timestamp: str
    severity: Literal["critical", "warning", "info"]
    message: str
    source: str


# ---------------------------------------------------------------------------
# Load data from db.json at startup
# ---------------------------------------------------------------------------

_DB_PATH = Path(__file__).parent / "db.json"

with _DB_PATH.open(encoding="utf-8") as _f:
    _DB: dict = json.load(_f)

# ---------------------------------------------------------------------------
# App
# ---------------------------------------------------------------------------

app = FastAPI(
    title="PulseFabric Monitor API",
    description="Backend for the PulseFabric network operations monitoring dashboard.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET"],
    allow_headers=["*"],
)


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------


@app.get("/kpis", response_model=list[KpiDto])
def get_kpis() -> list[dict]:
    """Return all KPI cards."""
    return _DB["kpis"]


@app.get("/traffic", response_model=list[TrafficDto])
def get_traffic() -> list[dict]:
    """Return 24-hour traffic and latency data."""
    return _DB["traffic"]


@app.get("/incidents", response_model=list[IncidentDto])
def get_incidents() -> list[dict]:
    """Return incident severity counts by region."""
    return _DB["incidents"]


@app.get("/alerts", response_model=list[AlertDto])
def get_alerts() -> list[dict]:
    """Return recent alert feed."""
    return _DB["alerts"]
