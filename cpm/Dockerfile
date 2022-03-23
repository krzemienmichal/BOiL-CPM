
   
#stage 0
FROM node:12.16.3 as helper

WORKDIR /cpm/

COPY package*.json ./

RUN npm install
COPY ./ ./

RUN npm run build

#stage 1
FROM nginx:latest

COPY --from=helper /cpm/build /usr/share/nginx/html

COPY --from=helper /cpm/nginx.conf /etc/nginx/nginx.conf