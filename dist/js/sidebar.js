define(['jquery'],function($){
    function sidebarShow(show,hide){
        for(let i=0;i<show.length;i++){
            $(show[i]).hover(function(){
                $(hide[i]).css('display','block')
            },function(){
                $(hide[i]).css('display','none')
            })
        }
    }

    return {
        sidebarShow:sidebarShow
    }
})



