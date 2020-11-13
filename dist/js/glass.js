define(['jquery'],function($){

    // 放大镜
    function magnifying(){
        $('.show_glass').mouseenter(function(){
            $('.mark').css('display','block')
            $('.bigpic').css('display','block')
            $(this).mousemove(function(ev){
                var e=ev||window.event
                var l=e.pageX-125-$(this).offset().left
                var t=e.pageY-125-$(this).offset().top
                l=Math.min(l,250)
                l=Math.max(l,0)
                t=Math.min(t,250)
                t=Math.max(t,0)
                $('.mark').css('left',l)
                $('.mark').css('top',t)
                $('.bigpic_move').css('left',-2*l)
                $('.bigpic_move').css('top',-2*t)
            })
        })
        $('.show_glass').mouseleave(function(){
            $('.mark').css('display','none')
            $('.bigpic').css('display','none')
        })
    }

    // 图片集功能
    function save(){

        $('.img_gather li').hover(function(){
            $('.img_gather li').removeClass('active')
            $(this).addClass('active')
            var index=$('.img_gather li').index($(this))
            $('.bigpic_move').removeClass('active')
            $('.bigpic_move').eq(index).addClass('active')
            $('.show_glass img').removeClass('active')
            $('.show_glass img').eq(index).addClass('active')
        },function(){
        })

        $('.save_left').click(function(){
            $('.save_right').css('color','#4c4c4c')
            $('.save_right').css('cursor','pointer')
            var left=$('.img_gather').css('left')
            left=parseInt(left)
            if(left==-100){
            $(this).css('cursor','default')
            $(this).css('color','#ccc')
                $('.img_gather').animate({left:left+=100},100)
            }else if(left==0){
            $(this).css('cursor','default')
            $(this).css('color','#ccc')
            }else{
                $(this).css('color','#4c4c4c')
                $(this).css('cursor','pointer')
                $('.img_gather').animate({left:left+=100},100)
            }

            return false
        })
        $('.save_right').click(function(){
            $('.save_left').css('color','#4c4c4c')
            $('.save_left').css('cursor','pointer')
            var left=$('.img_gather').css('left')
            left=parseInt(left)
            if(left==-400){
            $(this).css('cursor','default')
            $(this).css('color','#ccc')
                $('.img_gather').animate({left:left-=100},100)
            }else if(left==-500){
            $(this).css('cursor','default')
            $(this).css('color','#ccc')
            }else{
                $(this).css('color','#4c4c4c')
                $(this).css('cursor','pointer')
                $('.img_gather').animate({left:left-=100},100)
            }

            return false

        })

    }


    return {
        magnifying,
        save,
    }
})