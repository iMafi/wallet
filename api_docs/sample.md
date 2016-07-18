# **Оборудование**



# Список
## GET: /api/equipment
### Send GET:
```js
{
    page: 1, // number
    'per-page': 10, // number
    sort: '-name', // string
    search: 'арка' // string
}
```
### Returns
#### 200 - Список:
```js
{
    items: [
        {
            id: 10, // number, required
            barcode: '1234567890', // string, required
            operator: 'Тенет', // string, required
            contract: '03-123/1 от 01.01.2016', // string, number + ' от ' + dateStart
            address: 'г. Одесса, ул. Бунина, 1', // string, required
            equipmentType: 'Ящик', // string, required
            includeContractDate: '2016-01-01', // string
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
## POST: /api/equipment/delete/{id}
### Returns:
#### 200 - Успешно
#### 403 - Нет прав: `{error}`
#### \* - Ошибка сервера: `{error}`



# Проверка на уникальность
## GET: /api/equipment/is-unique
### Send GET:
```js
{
    barcode: '1234567890' // string, required
}
```
### Returns:
#### 200 - Уникально
#### 403 - Нет прав - `{error}`
#### 409 - Не уникально - `{error}`
#### \* - Ошибка сервера - `{error}`



# Создание
## POST: /api/equipment/new
### Send POST:
```js
{
    equipmentTypeId: 1, // number, required
    operatorId: 10, // number, required
    contractId: 10, // number
    items: [
        {
            addressId: 10, // number, required
            equipmentLocationId: 10, // number, required
            entrance: 'левая', // string
            floor: '16', // string
            powerConnect: 'какой-то признак', // string
            contractIncludeDate: '2016-01-01' // string
        }
    ]
}
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



# Получение данных для обновления
## GET: /api/equipment/update/{id}
### Returns:
#### 200:
```js
{
    id: 10, // number, required
    barcode: '1234567890', // string, required
    // object, required
    equipmentType: {
        id: 10, // number, required
        name: 'Ящик' // string, required
    },
    // object, required
    operator: {
        id: 10, // number, required
        name: 'Тенет' // string, required
    },
    // object
    contract: {
        id: 10, // number, required
        name: '01-354/1 от 01.01.2016' // string, required, contract number + ' от ' + contractDate
    },
    // object, required
    address: {
        id: 1, // number, required
        name: 'г. Одесса, ул. Бунина, 1'
    },
    // object,
    equipmentLocation: {
        id: 1,
        name: 'На этаже',
        // object
        parent: {
            id: 10,
            name: 'В парадной'
        }
    },
    entrance: 'левая', // string
    floor: '16', // string
    powerConnect: 'сопливое подключение', // string
    contractIncludeDate: '2016-01-01' // string
}
```
#### 403 - Нет прав - `{error}`
#### \* - Ошибка сервера - `{error}`



# Обновление
## POST: /api/equipment/update/{id}
### Send POST:
```js
{
    barcode: '1234567890', // string, required
    equipmentTypeId: 1, // number, required
    operatorId: 10, // number, required
    contractId: 10, // number
    addressId: 10, // number, required
    equipmentLocationId: 10, // number, required
    entrance: 'левая', // string
    floor: '16', // string
    powerConnect: 'какой-то признак', // string
    contractIncludeDate: '2016-01-01' // string
}
```
### Returns:
#### 200 - Успешно
#### 403 - Нет прав - `{error}`
#### \* - Ошибка сервера - `{error}`