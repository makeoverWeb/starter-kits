FROM nginx
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD build /usr/src/app/employees/1.0
COPY nginx.conf /etc/nginx/nginx.conf