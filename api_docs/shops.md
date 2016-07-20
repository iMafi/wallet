# ** user shops **
#### https://classic.moqups.com/sidodessa/idfGVeYN/p:ad6ef665f

# 
## GET: /usershop/<id>
### Send GET:
```GET
      shop_id:10         //  integer, required
      user_shop_id:10    //  empty or integer 
```
### Returns
####   
#### 200 - object:
```js
{
    user_shop_id: 10,       // integer primary key, or NULL
    user_id: 10,            // integer foreign key, default null
    shop_id: 10,            // integer foreign key, default null
    last_updated: '2016-01-01 01:01:01'

    tabs:{
        account:{       
            // https://classic.moqups.com/sidodessa/idfGVeYN/p:a49105a21
            enable:         true,
            have_user_name: false,
            user_name:      "sss",   // user name for login to shop
            online:         true
        } 
        search:{
            // https://classic.moqups.com/sidodessa/idfGVeYN/p:a9ca22cbe
            enable:true
            items_per_page: 30 // integer, simple setup value
        }
        buy:{
            // https://classic.moqups.com/sidodessa/idfGVeYN/p:ad9e4373d
            enable:            true  // this option is allowed by shop and enabled for operation at this role
        }
        sell:{
            //https://classic.moqups.com/sidodessa/idfGVeYN/p:a250f2fc5
            enable:             true,
            monitoring: {
                method_setup: { 
                       disable: true
                       callback:true
                       cron:    true
                 },     // which of methods are allowed in this shop, to disable radiobuttons
                method:  "disable" / 
                         "callback"/ 
                         "cron" 
                                        // string, user selected
            },
            period:             111,    // integer, seconds 
            do_after_setup:{
                twice:      true,
                reinit:     true,
                remain:     true,
            },
            do_after: "twice"   // string
        }
    }
     
}

```
#### 403 - Нет прав
#### \* - Ошибка _сервера_

# 
## POST/PUT: /usershop
### Send POST/PUT:
```POST/PUT

    form data
    
```
### Returns
#### 200 - object:
```js
// request for comments
{
    retcode: 000 // integer, 0 - OK
}
```
#### 403 - Нет прав
#### \* - Ошибка _сервера_

# Список
## GET: /usershop/list
### Send GET:
```GET
    page: 1,         // number, if not set- set to First page
    perpage: 10,     // number
    sortby: 'id',    // string
    // filter parameters: 
    user_id: 11, // default and not required (set up by backend)    
    shop_id: 11,    
    is_configured: 1/0,
    can_sell:1/0,
    can_buy:1/0
```
### Returns
#### 200 - Список:
```js
{
    items: [
        {
            user_shop_id:           10,       // integer primary key, or NULL
            shop_user_name:         "sid",    // shop user_name
            user_id:                10,       // integer foreign key
            shop_id:                10,       // integer foreign key
            shop_name:              'EBay',   // 
            shop_icon_path:         'http://img.com/img.png',   // 
            last_updated:           '2016-01-01 :01:01:01',
            shop_name:              '',
            user_shop_state:        "online" | '',
            last_activity:          '2016-01-01 01:01:01',
            last_activity_date:     '2016-01-01',
            last_activity_fmt:      '1/1/2016',
            last_activity_interval: '5 days',
            items_cnt:              11,
            active_items_cnt:       11,
            buy_cnt:                11,
            events_cnt:             11
            //....
        }
    ],
    total: {                                // for last row 'summary'
            items_cnt:              11,
            active_items_cnt:       11,
            buy_cnt:                11
    }
    pagination: {
        totalCount:     0, // number, required
        pageCount:      10, // number, required
        currentPage:    1 // number, required
    }
}
```
#### 403 - Нет прав
#### \* - Ошибка сервера
