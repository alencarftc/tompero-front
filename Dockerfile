### STAGE 1: Build ### 
FROM node:14.0.0-alpine as builder
LABEL maintainer="Felipe Alencar <felipe.alencar@itbam.org.br>"

COPY yarn.lock ./
RUN yarn && yarn install

# Create temp app dir to generate build
RUN mkdir -p /opt/app/ && mv ./node_modules /opt/app
WORKDIR /opt/app/
COPY . .

# Generate node_modules
RUN npm config set unsafe-perm true && \
    yarn run build && \
    yarn cache clean

### STAGE 2: Setup ###
FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /opt/app/dist/tompero/ /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;"]
