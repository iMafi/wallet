# **Темплейты**

# Список
## GET: /api/tmpl/list
### Send GET:
```GET
    page: 1,         // number, if not set- set to First page
    perpage: 10,     // number
    sortby: 'id',    // string
    search: 'ttt',   // string
    userid: 10       // number, required
   
    field1: 'ttt',   // string1 for search
    field2: 'ttt',   // string2 for search
    field3: 'ttt',   // string3 for search
```
### Returns
#### 200 - Список:
```js
{
    items: [
        {
            id: 10,                         // number, required
            userId: 10,                     // number, required
            name: '1234567890',             // string, required
            description: '7890',            // string, required
            dateCteated: '9999-12-31',      // date
            parentId: 10,                   // number, required
            version: 1,                     // number, required, default 1
            templateText: 'big html text',  // string
            dateDeleted: '9999-12-31'      // date, default null, not required
        }
    ],
    pagination: {
        totalCount: 0, // number, required
        pageCount: 10, // number, required
        currentPage: 1 // number, required
    }
}
```
#### 403 - Нет прав
#### \* - Ошибка сервера

# Удаление
## POST: /api/tmpl/delete
### Send POST:
```js
{
    id: '1234567890', // number, required
    reason: '12112'   // text, not required, for LOG
}
```

### Returns:
#### 200 - Успешно
#### 403 - Нет прав: `{error}`
#### \* - Ошибка сервера: `{error}`


# Создание
## POST: /api/tmpl/new
### Send POST:
```POST
           name: '1234567890',             // string, required
           description: '7890',            // string, required
           dateCteated: '9999-12-31',      // date
           parentId: 10,                   // number, required
           version: 1,                     // number, required, default 1
           templateText: 'big html text',  // string
```
### Returns:
#### 200 - Успешно:
```js
{
   id: 100 // number, required
}
```
#### 403 - Нет прав - `{error}`
#### \* - Ошибка сервера - `{error}`


# Получение данных
## GET: /api/tmpl/load/{id}
### Returns:
#### 200:
```js
{
            id: 10,                         // number, required
            userId: 10,                     // number, required
            name: '1234567890',             // string, required
            description: '7890',            // string, required
            dateCteated: '9999-12-31',      // date
            parentId: 10,                   // number, required
            version: 1,                     // number, required, default 1
            templateText: 'big html text',  // string
}
```
#### 403 - Нет прав - `{error}`
#### \* - Ошибка сервера - `{error}`

# Обновление
## POST: /api/tmpl/update/{id}
### Send POST:
```js
{
      id: 10,                         // number, required
      userId: 10,                     // number, required
      name: '1234567890',             // string, required
      description: '7890',            // string, required
      dateCteated: '9999-12-31',      // date
      parentId: 10,                   // number, required
      version: 1,                     // number, required, default 1
      templateText: 'big html text',  // string
      dateDeleted: '9999-12-31',      // date, default null, not required
}
```
### Returns:
#### 200 - Успешно
#### 403 - Нет прав - `{error}`
#### \* - Ошибка сервера - `{error}`