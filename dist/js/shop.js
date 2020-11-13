
require.config({
    paths:{
        jquery:'jquery-1.11.3',
        "jquery-cookie":'jquery.cookie',
        data:'data',
        shop_function:'shop_function',
        goinShop:'goinShop',
        a_event:'a_event',
    },
    shim:{
        "jquery-cookie":['jquery']
    }
})

require(['data','shop_function','goinShop','a_event'],function(data,shop_function,goinShop,a_event){
    data.load_shop()
    goinShop.number_goods()
    shop_function.footing()
    shop_function.delete_good()
    shop_function.choice()
    shop_function.check_all()
    a_event.a_event()
})