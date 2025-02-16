FROM node AS base

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run push

FROM base AS dev

ENTRYPOINT [ "npm", "run", "start:dev" ]