# Стартовый шаблон для модулей Unoto

1. Шаблон включает в себя подключенный redux и react-router
2. Для начала работы не забудьте изменить настройки в: DockerFile, package.json

---

## Чтобы запустить проект для локальной разработки

1. запускаем `npm i`
2. далее запускаем `npm start` (http://localhost:3000/)

## Перед тем как сделать deploy

`docker login rlab.lad24.ru`

## Чтобы собрать проект для dev и сделать deploy

`npm run build-and-push`
[gitlab](https://glab.lad24.ru/unoto-platform/modules/ваш_модуль) переходим в Registry и находим свой контейнер

## Чтобы собрать проект для prod и сделать deploy

`npm run build-and-push-prod`
[gitlab](https://glab.lad24.ru/unoto-platform/modules/ваш_модуль) переходим в Registry и находим свой контейнер

## Если необходимо изменить адресс dev или prod(через переменную окружения)

1. Находим файл .env, в нем можно изменить адресс для dev
2. Адресс прода можно изменить в package.json в `scripts` - `buildProd` - `REACT_APP_API_URL=адресс прода`
