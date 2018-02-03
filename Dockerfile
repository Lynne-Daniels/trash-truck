FROM node:9.5.0-alpine

COPY src/trash-truck /src/trash-truck
WORKDIR /src/trash-truck

RUN npm install && \
    npm run build && \
    yarn global add serve

EXPOSE 5000

CMD ["serve", "-s", "build"]
