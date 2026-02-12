# Build stage
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY Assets ./Assets
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/Assets ./dist/Assets
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]