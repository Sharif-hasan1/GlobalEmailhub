FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY backend ./backend
COPY frontend ./frontend

# ✅ Copy env files BEFORE building
COPY frontend/.env ./frontend/.env
COPY backend/.env ./backend/.env

RUN npm run build

EXPOSE 3004

CMD ["npm", "start"]