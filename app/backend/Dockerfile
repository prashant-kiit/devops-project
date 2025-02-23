FROM node AS base

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

FROM base AS start

RUN npm run lint

RUN npm run generate    

RUN npm run migrate

RUN npm run build

ENTRYPOINT [ "npm", "run", "start:prod" ]

FROM base AS dev

RUN npm run push

ENTRYPOINT [ "npm", "run", "start:dev" ]