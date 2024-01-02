FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./

RUN npm install --frozen-lockfile
COPY . .

RUN npm run build

# install without devDependencies for next stage
RUN rm -r node_modules/
RUN npm install --frozen-lockfile --production

FROM node:20-alpine

RUN addgroup -S netoflixo-api-user && \
    adduser -S netoflixo-api-user -G netoflixo-api-user

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

USER netoflixo-api-user

EXPOSE 3001
CMD ["npm", "run", "start:dev"]
