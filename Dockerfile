# Etapa 1: Build con pnpm
FROM node:20-alpine AS builder
WORKDIR /app

# Habilita corepack (para pnpm) y copia archivos de dependencias
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Copia el código y construye la app
COPY . .
RUN pnpm run build

# Etapa 2: Servir con NGINX
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
