
npm i styled-components prop-types react-hook-form yup react-router redux redux-thunk react-redux
npm install json-server@0.17.4
json-server --watch src/db.json --port 3005
npx json-server@0.17.4 --watch src/db.json --port 3005
npm i @hookform/resolvers

Области хранения данных
-база данных на JSON Server
-BFF
-редакс стор

Таблицы БД:
-Пользователи - users: id / login / password / registed_at / role_id
-Роли - roles: id / name
-Задачи - posts: id / title / content / published_at / deadline / user
-Сессия - hash / user[]
-Комменты к задачи - comments: id / author_id / post_id / content / img_url / publishedAt

Схема состояние на BFF:
- сессия текущего пользователя: login / password / role

Схема для редакс сторе ( на клиенте ):

- user: id / login / roleId
- todos: массив todo: id / title / imgUrl / publishedAt / commentsCount
- todo: id / title / imgUrl/ content / publishedAt / comments: массив comment: id / author/ content / publishedAt / img_url
- users: [] user: id / login / registerAt / role


Страницы:
1.Вход
2.Авторизация
3.Регистрация
4.Главная
5.Страница задач
6.Новая задачи
7.Админ панель
8.Страница ошибки

1.Сделать базу данных
2.Подготовить стартовый экран(хедер, контет, футер)
3.Реализовать верстку для страницы авторизации
4.Реализовать верстку для страницы регистрации
5.Реализовать страницу главная с задачами от админ
6.Реализовать создание новой задачи
7.Реализовать страницу сотрудника
8.Реализовать админ панель (блокировка сотрудника, изменения должности)
9.Реализовать страницу ошибок

