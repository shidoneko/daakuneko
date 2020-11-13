define(['jquery'],function($){
    
    var index=0
    
    // 方向按钮
    function direction(left,right,points,img){
        var timer=null
        $(left).click(function(){
            if(!timer){
                if(index<=0){
                    $(points[index]).removeClass('active')
                    $(points[3]).addClass('active')
                    index--
                    var left_v=-960-(index+1)*1920
                    $(img).animate({marginLeft:left_v},500,function(){
                        $(img).css('margin-left',-8640)
                        index=3
                    })
                }else{
                    $(points[index]).removeClass('active')
                    index--
                    $(points[index]).addClass('active')
                    var left_v=-960-(index+1)*1920
                    $(img).animate({marginLeft:left_v},500)
                }
                timer=setTimeout(function(){
                    timer=null
                },500)
            }
        })
        $(right).click(function(){
            if(!timer){
                if(index>=3){
                    $(points[index]).removeClass('active')
                    $(points[0]).addClass('active')
                    index++
                    var left_v=-960-(index+1)*1920
                    $(img).animate({marginLeft:left_v},500,function(){
                        $(img).css('margin-left',-2880)
                        index=0
                    })
                }else{
                    $(points[index]).removeClass('active')
                    index++
                    $(points[index]).addClass('active')
                    var left_v=-960-(index+1)*1920
                    $(img).animate({marginLeft:left_v},500)
                }
                timer=setTimeout(function(){
                    timer=null
                },500)
            }
        })
    }

    // 下标按钮
    function index_point(points,img){
        for(let i=0;i<points.length;i++){
            $(points[i]).click(function(){
                for(let j=0;j<points.length;j++){
                    $(points[j]).removeClass('active')
                }
                $(points[i]).addClass('active')
                var left_v=-960-(i+1)*1920
                $(img).animate({marginLeft:left_v},500)
                index=i
            })   
        }
    }

    // 自动滑动
    function roll(points,img,showBox){
        var timer=null
        timer=setInterval(function(){
            var left_v=-960-(index+2)*1920
            for(let j=0;j<points.length;j++){
                $(points[j]).removeClass('active')
            }
            if(index==3){
                $(points[0]).addClass('active')
            }else{
                $(points[index+1]).addClass('active')
            }
            $(img).animate({marginLeft:left_v},500,function(){
                if(index==4){
                    index=0
                    $(img).css('margin-left',-2880)
                }
            })
            index++
        },2500)
        $(showBox).hover(function(){
            clearInterval(timer)
        },function(){
            timer=setInterval(function(){
                var left_v=-960-(index+2)*1920
                for(let j=0;j<points.length;j++){
                    $(points[j]).removeClass('active')
                }
                if(index==3){
                    $(points[0]).addClass('active')
                }else{
                    $(points[index+1]).addClass('active')
                }
                $(img).animate({marginLeft:left_v},500,function(){
                    if(index==4){
                        index=0
                        $(img).css('margin-left',-2880)
                    }
                })
                index++
            },2500)
        })
    }


    // 左侧固定栏
    function left_fixed(node){
        if($(window.scrollY)[0]>700&&$(window.scrollY)[0]<6300){
            $(node).css('display','block')
        }else{
            $(node).css('display','none')
        }
        if($(window.scrollY)[0]>700&&$(window.scrollY)[0]<1400){
            $(node.children[0].children[2]).addClass('active')
        }else if($(window.scrollY)[0]>1400&&$(window.scrollY)[0]<2100){
            $(node.children[0].children[4]).addClass('active')
        }else if($(window.scrollY)[0]>2100&&$(window.scrollY)[0]<2900){
            $(node.children[0].children[6]).addClass('active')
        }else if($(window.scrollY)[0]>2900&&$(window.scrollY)[0]<3700){
            $(node.children[0].children[8]).addClass('active')
        }else if($(window.scrollY)[0]>3700&&$(window.scrollY)[0]<4300){
            $(node.children[0].children[10]).addClass('active')
        }
        else if($(window.scrollY)[0]>4300&&$(window.scrollY)[0]<5000){
            $(node.children[0].children[12]).addClass('active')
        }
        else if($(window.scrollY)[0]>5000&&$(window.scrollY)[0]<5700){
            $(node.children[0].children[14]).addClass('active')
        }else if($(window.scrollY)[0]>5700&&$(window.scrollY)[0]<6100){
            $(node.children[0].children[16]).addClass('active')
        }else if($(window.scrollY)[0]>6100&&$(window.scrollY)[0]<6300){
            $(node.children[0].children[18]).addClass('active')
        }
        $(window).bind('scroll',function(){
            if($(window.scrollY)[0]>700&&$(window.scrollY)[0]<6300){
                $(node).css('display','block')
                if($(window.scrollY)[0]>700&&$(window.scrollY)[0]<1400){
                    $(node.children[0].children[0]).removeClass('active')
                    $(node.children[0].children[4]).removeClass('active')
                    $(node.children[0].children[2]).addClass('active')
                }else if($(window.scrollY)[0]>1400&&$(window.scrollY)[0]<2100){
                    $(node.children[0].children[2]).removeClass('active')
                    $(node.children[0].children[6]).removeClass('active')
                    $(node.children[0].children[4]).addClass('active')
                }else if($(window.scrollY)[0]>2100&&$(window.scrollY)[0]<2900){
                    $(node.children[0].children[4]).removeClass('active')
                    $(node.children[0].children[8]).removeClass('active')
                    $(node.children[0].children[6]).addClass('active')
                }else if($(window.scrollY)[0]>2900&&$(window.scrollY)[0]<3700){
                    $(node.children[0].children[6]).removeClass('active')
                    $(node.children[0].children[10]).removeClass('active')
                    $(node.children[0].children[8]).addClass('active')
                }else if($(window.scrollY)[0]>3700&&$(window.scrollY)[0]<4300){
                    $(node.children[0].children[8]).removeClass('active')
                    $(node.children[0].children[12]).removeClass('active')
                    $(node.children[0].children[10]).addClass('active')
                }
                else if($(window.scrollY)[0]>4300&&$(window.scrollY)[0]<5000){
                    $(node.children[0].children[10]).removeClass('active')
                    $(node.children[0].children[14]).removeClass('active')
                    $(node.children[0].children[12]).addClass('active')
                }
                else if($(window.scrollY)[0]>5000&&$(window.scrollY)[0]<5700){
                    $(node.children[0].children[12]).removeClass('active')
                    $(node.children[0].children[16]).removeClass('active')
                    $(node.children[0].children[14]).addClass('active')
                }else if($(window.scrollY)[0]>5700&&$(window.scrollY)[0]<6100){
                    $(node.children[0].children[14]).removeClass('active')
                    $(node.children[0].children[18]).removeClass('active')
                    $(node.children[0].children[16]).addClass('active')
                }else if($(window.scrollY)[0]>6100&&$(window.scrollY)[0]<6300){
                    $(node.children[0].children[16]).removeClass('active')
                    $(node.children[0].children[20]).removeClass('active')
                    $(node.children[0].children[18]).addClass('active')
                }
            }else{
                $(node).css('display','none')
            }
        })
    }

    // 右侧固定栏
    function right_fixed(){
        $(window).bind('scroll',function(){
            if($(window.scrollY)[0]>200){
                $('#right_fixed').css('display','block')
            }else{
                $('#right_fixed').css('display','none')
            }
        })
        if($(window.scrollY)[0]>200){
            $('#right_fixed').css('display','block')
        }else{
            $('#right_fixed').css('display','none')
        }
    }


    
    return {
        roll,
        index_point,
        direction,
        left_fixed,
        right_fixed
    }
})