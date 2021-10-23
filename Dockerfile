FROM node:14.18.0-alpine3.14 as build
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY ./ ./
RUN yarn run build
RUN cp -r ./statics/* ./dist/
RUN chmod -R o+rx ./dist/

FROM nginx:1.21-alpine as app
COPY --from=build /app/dist /usr/share/nginx/html