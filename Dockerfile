FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx:stable-alpine
EXPOSE 4242
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx/default.conf /etc/nginx/conf.d/default.conf
