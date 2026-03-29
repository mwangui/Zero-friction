# ──────────────────────────────────────────────
# Stage 1 – Build Angular frontend
# ──────────────────────────────────────────────
FROM node:20-alpine AS frontend-build

WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci
COPY frontend/ ./
RUN npx ng build --configuration=production

# ──────────────────────────────────────────────
# Stage 2 – Production image (nginx + FastAPI)
# ──────────────────────────────────────────────
FROM python:3.12-slim

# Install nginx & supervisor
RUN apt-get update && \
    apt-get install -y --no-install-recommends nginx supervisor && \
    rm -rf /var/lib/apt/lists/*

# ── Python backend ───────────────────────────
WORKDIR /app
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/ ./backend/

# ── Frontend static files ────────────────────
COPY --from=frontend-build /app/frontend/dist/frontend/browser /usr/share/nginx/html

# ── Nginx config ─────────────────────────────
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Remove default nginx site that might conflict
RUN rm -f /etc/nginx/sites-enabled/default

# ── Supervisor config ────────────────────────
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Hugging Face Spaces uses port 7860
EXPOSE 7860

CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
