FROM node:8

WORKDIR /src

COPY ./node-app /src 




EXPOSE 3000

CMD [ "npm","start" ]