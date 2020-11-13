define(['jquery'],function($){

    function a_event(){
        $('body').on('click','.a_event',function(){
            return false
        })
    }

    return {
        a_event,
    }
})