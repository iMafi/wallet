# **auth**

# 
## GET: /auth/session/cheq
### Send GET:
```GET
      
```
### Returns
#### 200 - object:
```js
{
    userId: 10,                     // number or NULL
    online: true
    events: [
        sessionExpire: '2016-01-01 01:01:01', // timestamp
        rightsExpired: false,
        etc: 'etc'
    ]
}

```
#### 403 - Нет прав
#### \* - Ошибка _сервера_

# 
## GET: /auth/user/get
### Send GET:
```GET
    user_id: 349876 // number
```
### Returns
#### 200 - object:
```js
{
        userId: 10,                     // number or NULL
        userName:  '1234567890',            // string, required
        userRole: 'admin',                  // admin,user
        logoFilePath: 'ert/erte/rt.jpg'     //
      
        rights: [
            canMenu1:       1,  // number
            canMenu2:       1,  // number
            canRight1:      1,  // number
            canSomething:   1   // number
       ]
}
```
#### 403 - Нет прав
#### \* - Ошибка _сервера_