FROM node:12.22-alpine

WORKDIR /home/cotami-admin
COPY package.json yarn.lock ./

ENV PATH /home/cotami-admin/node_modules/.bin:$PATH

RUN yarn install

COPY . ./