FROM node:dubnium-alpine AS project-zeus-builder
# RUN apk update \
#   && apk add \
#       libpng \
#       python \
#   && apk add \
#       tzdata \
#       make \
#       g++ \
#       gcc \
#       libpng-dev \
#       libtool \
#       autoconf \
#       automake \
#       nasm \
#       --virtual .build-deps \
#   && cp /usr/share/zoneinfo/Europe/Vienna /etc/localtime
ADD package.json /project-zeus/
ADD package-lock.json /project-zeus/
WORKDIR /project-zeus/
RUN npm run setup

FROM project-zeus-builder AS project-zeus
WORKDIR /project-zeus/
ENV NODE_ENV="production"
ADD . /project-zeus/
RUN npm run build
EXPOSE 3001/tcp
CMD [ "npm", "start" ]
