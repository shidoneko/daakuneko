require.config({
    paths:{
        jquery:'jquery-1.11.3',
        sidebar:'sidebar',
        banner:'banner',
        data:'data',
        'jquery-cookie':'jquery.cookie',
        a_event:'a_event',
        goinShop:'goinShop',
    },
    shim:{
        "jquery-cookie":['jquery']
    }
})

require(['sidebar','banner','data','a_event','goinShop'],function(sidebar,banner,data,a_event,goinShop){
    var siderbar_H=document.getElementsByClassName('sidebar_H')
    var list_A=document.getElementsByClassName('list_A')
    var point_a=document.getElementsByClassName('point_a')[0].children
    var hide_banner=document.getElementsByClassName('hide_banner')[0]
    var left_banner=document.getElementsByClassName('left_banner')[0]
    var right_banner=document.getElementsByClassName('right_banner')[0]
    var show_banner=document.getElementsByClassName('show_banner')[0]
    var left_fixed=document.getElementById('left_fixed')


    data.download_index()
    sidebar.sidebarShow(list_A,siderbar_H)
    banner.index_point(point_a,hide_banner)
    banner.roll(point_a,hide_banner,show_banner)
    banner.direction(left_banner,right_banner,point_a,hide_banner)
    banner.left_fixed(left_fixed)
    banner.right_fixed()
    a_event.a_event()
    goinShop.number_goods()
})