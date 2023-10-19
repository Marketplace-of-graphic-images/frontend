FROM node:16-alpine AS builder

# создание директории приложения
WORKDIR /app
# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY package*.json ./ 
RUN npm i 
COPY . .
RUN npm run build
FROM nginx:1.23.1-alpine as production
WORKDIR /app
COPY --from=builder /app/package*.json ./
#RUN  npm i ---omit=dev 
RUN rm -rf /usr/share/nginx/html/* \
&& rm -rf /etc/nginx/conf.d/*
COPY --from=builder /app/build /usr/share/nginx/html/
COPY --from=builder /app/nginx/conf.d/* /etc/nginx/conf.d/


# Если вы создаете сборку для продакшн
# RUN npm ci --omit=dev

# копируем исходный код
EXPOSE 3000
CMD [ "nginx", "-g", "daemon off;" ]
