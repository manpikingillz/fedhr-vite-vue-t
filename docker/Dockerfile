FROM node:18.13.0-alpine

RUN mkdir /app
WORKDIR /app
COPY ./ /app/
RUN ["pwd"]
# RUN cd /app && npm install && npm run build
RUN yarn install && yarn build

FROM nginx

#!bin/bash
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*


# Copy from the stahg 1
COPY dist/ /usr/share/nginx/html

EXPOSE 4200 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]