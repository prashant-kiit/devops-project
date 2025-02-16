FROM node AS base

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

FROM base AS dev

ENTRYPOINT [ "npm", "run", "start:dev" ]