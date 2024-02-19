FROM node:20-alpine as builder
WORKDIR /dribble_clone/app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine as runner
WORKDIR /dribble_clone/app
COPY --from=builder /dribble_clone/app/package.json .
COPY --from=builder /dribble_clone/app/package-lock.json .
COPY --from=builder /dribble_clone/app/next.config.mjs ./
COPY --from=builder /dribble_clone/app/public ./public
COPY --from=builder /dribble_clone/app/.next/static ./.next/static
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
