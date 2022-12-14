# Проект на React: "Космическая бургерная"

 - [О проекте](#О-проекте)
 - [Технологии](#Технологии)
 - [Ссылка на gh-page](#Ссылка-на-gh-page)
 - [Запуск приложения](#Запуск-приложения)
 - [Автор](#Автор)

## О проекте
"Космическая бургерная" - это проектная работа на [курсе React-разработчик](https://praktikum.yandex.ru/react/) от Яндекс Практикум.
Нп

## Технологии

- Использована библиотека UI-компонентов [Яндекс.Практикум.Реакт](https://github.com/yandex-praktikum/react-developer-burger-ui-components)
- Использованы технологии: `React 17`, `Redux`, `TypeScript`
- Лента заказов отражается при помощи Web Sockets
- Все данные, авторизация и лента заказов получаются по `rest api` с сервиса Яндекс Практикум (https://norma.nomoreparties.space/api)


## Ссылка на gh-page
[https://web-yoga.github.io/react-burger/](https://web-yoga.github.io/react-burger/)

## Запуск приложения
Скачать или склонировать репозиторий
```sh
# установка зависимостей
$ npm install

# запуск сервера на localhost:3000
$ npm run start

# сборка в продакшн
$ npm run build

# тестирование функционала приложения (Cypress)
$ npm run cypress:open

# unit-тестирование приложения (Jest)
$ npm run test

#  деплой приложения на gh-page
$ npm run deploy
```

## Автор
*Цветков Александр 
(hyehaeng@gmail.com)*