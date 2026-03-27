# Multi-stage build for Next.js static export
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production stage - simple Node.js server for static files
FROM node:22-alpine

WORKDIR /app

# Install serve package globally
RUN npm install -g serve

# Copy built static files
COPY --from=builder /app/dist ./dist

# Expose port 3000 for Coolify
EXPOSE 3000

# Serve static files on port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
