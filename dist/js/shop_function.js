define(['jquery','jquery-cookie','goinShop'],function($,cookie,goinShop){

    var count=0

        // 合计
    function footing(){
        $.ajax({
            type:'get',
            url:'../data/list.json',
            success:function(arr){
                var sum=0
                var newArr=[]
                var cookieStr=$.cookie('goods')
                if(cookieStr!=null&&cookieStr!='[]'){
                    var cookieArr=JSON.parse($.cookie('goods'))
                    for(var i=0;i<cookieArr.length;i++){
                        for(var j=0;j<arr.length;j++){
                            if(cookieArr[i].id==j){
                                newArr.push(arr[j])
                            }
                        }
                        sum+=parseInt(newArr[i].价格.slice(1))
                        $('.footing').html(`￥${sum}`)
                    }
                }else{
                    $('.footing').html(`￥0`)
                }
            },
            error:function(msg){
                alert(msg)
            }
        })
    }

    // 合计功能适配器（适配list）
    function adapter_list(){
        $('.load_data').on('click','.goin_cookie',function(){
            footing()
        })
    }

    // 删除功能
    function delete_good(){
        $('.item_list').on('click','.delete_good',function(){
            var cookieArr=JSON.parse($.cookie('goods'))
            for(var i=0;i<cookieArr.length;i++){
                if(cookieArr[i].id==this.id){
                    cookieArr.splice(i,1)
                }
            }
            $(this).parent().parent().parent().remove()
            $.cookie('goods',JSON.stringify(cookieArr),{
                expires:7,
                path:'/'
            })
            if($(this).parent().parent().children('.choice').css('backgroundColor')=='white'){
                count++
            }
            goinShop.number_goods()
            footing()
            if(count==0){
                $('.check_all').css({'background':'#00a8ff','borderColor':'#00a8ff'})
            }else{
                $('.check_all').css({'background':'white','borderColor':'#ccc'})
            }
            return false
        })
    }

    // 选择框功能
    function choice(){
        $('.item_list').on('click','.choice',function(){
            if($(this).css('backgroundColor')=='rgb(255, 255, 255)'){
                $(this).css({'background':'#00a8ff','borderColor':'#00a8ff'})
                var price=parseInt($(this).next().next().html().slice(1))
                var sum=parseInt($('.footing').html().slice(1))
                $('.footing').html(`￥${sum+price}`)
                $('.number_check').html(`${parseInt($('.number_check').html())+1}`)
                count++
            }else{
                $(this).css({'background':'white','borderColor':'#ccc'})
                var price=parseInt($(this).next().next().html().slice(1))
                var sum=parseInt($('.footing').html().slice(1))
                $('.footing').html(`￥${sum-price}`)
                $('.number_check').html(`${$('.number_check').html()-1}`)
                count--
            }
            if(count==0){
                $('.check_all').css({'background':'#00a8ff','borderColor':'#00a8ff'})
            }else{
                $('.check_all').css({'background':'white','borderColor':'#ccc'})
            }
        })
    }

    // 全选框
    function check_all(){
        $('.check_all').click(function(){
            var sum=0
            if($(this).css('backgroundColor')=='rgb(255, 255, 255)'){
                $(this).css({'background':'#00a8ff','borderColor':'#00a8ff'})
                $('.choice').css({'background':'#00a8ff','borderColor':'#00a8ff'})
                count=0
                $.each($('.unit_price'),function(index,value){
                    sum+=parseInt($(value).html().slice(1))
                })
                $('.number_check').html(`${$('.choice').size()}`)
                $('.footing').html(`￥${sum}`)
            }else{
                $(this).css({'background':'white','borderColor':'#ccc'})
                $('.choice').css({'background':'white','borderColor':'#ccc'})
                $('.footing').html(`￥0`)
                $.each($('.unit_price'),function(index,value){
                    count--
                })
                $('.number_check').html('0')
            }
        })
    }

    return {
        footing,
        delete_good,
        choice,
        check_all,
        adapter_list,
    }
})