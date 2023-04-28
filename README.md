## webpack-dev-server
Разбор подключения *Webpack, шаблонизаторов(pug), минификаторов(линтеры)*, подключение *json-server* и настройка *webpack-dev-server* с использованием *pre-commit*
# установка dev-server
- Клонировать репозиторий
- Восстановить модули: `npm install`
- Запустить json-server: `json-server --watch db.json`
- Запуск линтеров eslint и stylelint: `npm run lint`
- Запуск СЕРВЕРА DevServer с конфигом prod: `npm run start:prod`
- Запуск СЕРВЕРА DevServer с конфигом dev: `npm run start:dev`
