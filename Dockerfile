FROM nginx:alpine

# Copy site files
COPY . /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default nginx config
RUN rm -f /etc/nginx/conf.d/default.conf.bak

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
