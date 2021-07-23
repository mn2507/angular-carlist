### STAGE 1: Build ###
FROM node:12.7-alpine AS build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/angular-carlist /usr/share/nginx/html
