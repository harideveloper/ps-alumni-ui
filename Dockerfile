
FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# => Run container
FROM nginx:1.15.2-alpine

# Static build
COPY --from=builder /app/build /usr/share/nginx/html/

# Default port exposure
EXPOSE 80

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./runtime.sh .
COPY .env .

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x runtime.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/runtime.sh && nginx -g \"daemon off;\""]