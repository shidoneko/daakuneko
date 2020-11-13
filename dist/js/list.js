
require.config({
    paths:{
        jquery:'jquery-1.11.3',
        "jquery-cookie":'jquery.cookie',
        data:'data',
        goinShop:'goinShop',
        a_event:'a_event',
        shop_function:'shop_function',
    },
    shim:{
        "jquery-cookie":['jquery']
    }
})

require(['data','goinShop','a_event','shop_function'],function(data,goinShop,a_event,shop_function){


    goinShop.goinShop()
    data.download_list()
    goinShop.number_goods()
    a_event.a_event()
    shop_function.adapter_list()
})