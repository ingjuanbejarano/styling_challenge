# Etapa de construcción
FROM node:20-alpine AS builder
WORKDIR /app

# Instala pnpm@10.9.0 explícitamente
RUN corepack enable && corepack prepare pnpm@10.9.0 --activate

# Copia los archivos de bloqueo (sin wildcard *)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copia el código y construye la app
COPY . .
RUN pnpm run build

# Etapa 2: Servir con NGINX
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
