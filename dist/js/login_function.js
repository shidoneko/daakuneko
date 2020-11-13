define(['jquery'],function($){
    function login(){
        $('.submit_id').click(function(){
            $.ajax({
                type:'post',
                url:'../php/login.php',
                data:{
                    username:$('.username').val(),
                    passward:$('.passward').val(),
                    creattime:(new Date()).getTime()
                },
                success:function(result){
                    console.log(result)
                },
                error:function(msg){
                    console.log(msg)
                }
            })
        })
    }

    return {
        login
    }
})