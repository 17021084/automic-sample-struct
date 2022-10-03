FROM nginx:latest
LABEL MAINTAINER="Tai Nguyen<tainv@its-global.vn>"

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx-debug", "-g", "daemon off;"]