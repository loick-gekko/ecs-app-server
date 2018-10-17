FROM node:8

WORKDIR /src

COPY . /src 




EXPOSE 3000

CMD [ "npm","start" ]