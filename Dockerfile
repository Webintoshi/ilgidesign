# Multi-stage build for Next.js static site
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Coolify expects port 3000
EXPOSE 3000

# Change nginx to listen on 3000
RUN sed -i 's/listen 80/listen 3000/' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
