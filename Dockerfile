FROM node:14 as build
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY ./ ./
RUN yarn run build

FROM nginx:1.21-alpine as app
COPY --from=build /app/dist /usr/share/nginx/html