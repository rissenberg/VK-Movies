# Тестовое задание Frontend-разработчика

## Описание приложения

Приложение для просмотра подборок по фильмам, поиска и просмотра информации о фильмах. 

Реализованы главная страница с подборками, страница фильма и поиск по названию

API, которое было использовано, - TMDB API (https://developer.themoviedb.org)

** Без VPN API не работает! **
                                                                                                                                                                                                                                                                                                                                                                                        
## Как запустить приложение
Для запуска необходимо скачать все зависимости и запустить сервер следующими командами:

```npm install```

```npm run start```

После чего сайт будет доступен по ссылке http://localhost:3000

## Стек технологий
- React + TypeScript
- Архитектура Feature-Sliced Design
- TanStack Query
- CSS Modules

## Структура проекта
Проект реализует принципы FSD имеет следующую структуру:
```
.
├── public/
│   └── index.html
└── src/
    ├── app/
    │   └── Здесь лежит компонент приложения
    ├── entities/
    │   └── Здесь лежат компоненты бизнес сущностей
    ├── pages/
    │   └── Здесь лежат компоненты страниц
    ├── widgets/
    │   └── Здесь лежат компоненты отдельных виджетов
    ├── features/
    │   └── Здесь лежат компоненты бизнес логики
    ├── shared/
    │   └── Здесь лежат компоненты, используемые по всему проекту
    │
    └── index.tsx - точка старта приложения
```

Структура компонента имеет в себе:
```
.
└── Component/
    ├── api/
    │   └── request.ts - вынесенная логика для запросов на сервер
    ├── lib/
    │   └── function.ts - некоторая вынесенная бизнес логика
    ├── model/
    │   └── types - типы и интерфейсы ts
    ├── ui/
    │   ├── Component.tsx - интерфейс компонента, хуки, обработчики
    │   └── style.module.scss - стили css modules
    │
    └── index.ts - публичный API компонента
```
