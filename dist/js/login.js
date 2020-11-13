
require.config({
    paths:{
        jquery:'jquery-1.11.3',
        "jquery-cookie":'jquery.cookie',
        a_event:'a_event',
        login_function:'login_function',
    },
    shim:{
        "jquery-cookie":['jquery']
    }
})

require(['a_event','login_function'],function(a_event,login_function){

    a_event.a_event()
    login_function.login()
})