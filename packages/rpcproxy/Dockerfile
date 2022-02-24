FROM node:latest
LABEL maintainer="Derick Hammer <contact@lumeweb.com>"

WORKDIR /app

RUN git clone https://github.com/LumeWeb/portal-rpcproxy /app
RUN npm install && yarn install

CMD ["npm","start"]
