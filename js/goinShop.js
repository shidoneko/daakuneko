define(['jquery-cookie','jquery'],function(cookie,$){
   
    // 商品列表加入购物车功能
    function goinShop(){
        $('.load_data').on('click','.goin_cookie',function(){
            var cookie=$.cookie('goods')
            var id=this.id
            if(cookie==null){
                var cookieArr=[{id:id,num:1}]
                $.cookie('goods',JSON.stringify(cookieArr),{
                    expires:7,
                    path:'/'
                })
                $('#shop').css('display','block')
                $('.success').css('display','block')
                $('.exit').click(function(){
                    $('#shop').css('display','none')
                    $('.success').css('display','none')
                })
            }else{
                var cookieArr=JSON.parse($.cookie('goods'))
                var same=false
                for(var i=0;i<cookieArr.length;i++){
                    if(cookieArr[i].id==id){
                        same=true
                        $('#shop').css('display','block')
                        $('.loser').css('display','block')
                        $('.exit').click(function(){
                            $('#shop').css('display','none')
                            $('.loser').css('display','none')
                        })
                        break
                    }
                }
                if(!same){
                    var obj={id:id,num:1}
                    cookieArr.push(obj)
                    $('#shop').css('display','block')
                    $('.success').css('display','block')
                    $('.exit').click(function(){
                        $('#shop').css('display','none')
                        $('.success').css('display','none')
                    })
                }
                $.cookie('goods',JSON.stringify(cookieArr),{
                    expires:7,
                    path:'/'
                })
            }
            number_goods()
            return false
        })
    }

    // 商品数量
    function number_goods(){
        var cookieStr = $.cookie("goods");
        var sum = 0;
        if(cookieStr){
            var cookieArr = JSON.parse(cookieStr);
            for(var i = 0; i < cookieArr.length; i++){
                sum++
            }
        }
        $(".number_goods").html(sum);
    }
    
    return {
        goinShop,
        number_goods,
    }
})