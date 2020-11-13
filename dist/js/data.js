define(['jquery','goinShop','jquery-cookie'],function($,goinShop,cookie){


    function download_index(){

    // 热卖推荐数据加载
        $.ajax({
            type:'get',
            url:'../data/index.json',
            success:function(arr){
                for(var i=0;i<15;i++){
                    $(`
                    <li>
                        <div class="img">
                            <a href="/html/detail.html">
                                <img src="${arr[i].图片}" alt="">
                                <img src="${arr[i].图片1}" alt="">
                            </a>
                        </div>
                        <div class="ap">
                            <a href="/html/deatil.html">
                                <p>${arr[i].标题2}</p>
                                <p>${arr[i].标题}</p>
                            </a>
                        </div>
                        <div class="price">${arr[i].价格}</div>
                        <div class="dprice">
                            <ins>${arr[i].价格3}</ins>
                        </div>
                    </li>`).appendTo('.hot_body')
                }
            },
            error:function(msg){
                alert(msg)
            }
        })

        // 首页商店数据加载
        $.ajax({
            type:'get',
            url:'../data/index.json',
            success:function(arr){
                // var nodes=
                for(var i=0;i<$('.page_load').length;i++){
                    for(var j=0;j<8;j++){
                        $(`<li class="item">
                        <div class="img">
                            <a href="html/detail.html">
                                <img src="${arr[j].图片}" alt="">
                                <img src="${arr[j].图片1}" alt="">
                            </a>
                        </div>
                        <div class="ap">
                            <a href="html/detail.html">
                                <p>${arr[j].标题2}</p>
                                <p>${arr[j].标题}</p>
                            </a>
                        </div>
                        <div class="price">
                            <span>${arr[i].价格}</span>
                            <ins>${arr[i].价格3}</ins>
                        </div>
                    </li>`).appendTo($('.page_load')[i])
                    }
                }
            },
            error:function(msg){
                alert(msg)
            }
        })
    }

    // 商店列表数据加载
    function download_list(){
        $.ajax({
            type:'get',
            url:'../data/list.json',
            success:function(arr){
                for(var i=0;i<arr.length;i++){
                    $(`<li ${i==2||i==6||i==10||i==14?'class="lastli"':''}>
                        <div class="img">
                            <a href="detail.html">
                                <img src="${arr[i].图片}" alt="">
                                <img src="${arr[i].图片1}" alt="">
                            </a>
                        </div>
                        <div class="ap">
                            <h3>
                                <a href="detail.html">
                                    <p>${arr[i].标题}</p>
                                    <p>${arr[i].名称}</p>
                                </a>
                            </h3>
                            <div>
                                <ins>${arr[i].价格}</ins>
                            </div>
                            <div>
                                <span>${arr[i].关键词.slice(117,119)}</span>
                                <span>${arr[i].关键词.slice(293,295)}</span>
                            </div>
                        </div>
                        <div class="customer clear">
                            <div>
                                <a href="">
                                    <i></i>
                                    <span>对比</span>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <i>收藏</i>
                                </a>
                            </div>
                            <div>
                                <a id="${i}" class="goin_cookie" href="">
                                    <i></i>
                                    <span">加入购物车</span>
                                </a>
                            </div>
                        </div>
                    </li>`).appendTo('.load_data')
                    
                }
            },
            error:function(msg){
                alert(msg)
            }
        })
    }

    // 详情页数据加载
    function download_detail(){
        $.ajax({
            type:'get',
            url:'../data/list.json',
            success:function(arr){
                $(`<li class="left">
                <div>
                    <img src="${arr[0].图片}" alt="">
                </div>
                <p>${arr[0].标题}</p>
                <p>${arr[0].名称}</p>
                <p>${arr[0].价格}</p>
                <a href="">立即查看</a>
            </li>`).appendTo('.list_load')
                for(var i=1;i<7;i++){
                    $(`<li class="right">
                    <div>
                        <img src="${arr[i].图片}" alt="">
                        <p>${arr[i].标题}</p>
                        <p>${arr[i].名称}</p>
                        <p>${arr[i].价格}</p>
                        <a href="">立即查看</a>
                    </div>
                </li>`).appendTo('.list_load')
                }
            },
            error:function(msg){
                alert(msg)
            }
        })

        $.ajax({
            type:'get',
            url:'../data/list.json',
            success:function(arr){
                for(var i=0;i<arr.length;i++){
                    $(`<li>
                    <img src="${arr[i].图片}" alt="">
                    <p>${arr[i].标题}</p>
                    <p>${arr[i].名称}</p>
                    <p>${arr[i].价格}</p>
                </li>`).appendTo('.push_load')
                }
            },
            error:function(msg){
                alert(msg)
            }
        })
    }

    // 购物车数据加载
    function load_shop(){
        $.ajax({
            type:'get',
            url:'../data/list.json',
            success:function(arr){
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
                        $(`<div class="item">
                        <ul class="main clear">
                            <li class="iconfont icon-icon-test choice"></li>
                            <li>
                                <a href="detail.html">
                                    <img src="${newArr[i].图片}" alt="">
                                </a>
                                <a href="detail.html">${newArr[i].标题}&emsp;${newArr[i].名称}</a>
                            </li>
                            <li class="unit_price">${newArr[i].价格}</li>
                            <li>
                                <a class="a_event" href="">-</a>
                                <input type="text" value="1">
                                <a class="a_event" href="">+</a>
                            </li>
                            <li>￥0</li>
                            <li>0</li>
                            <li>${newArr[i].价格}</li>
                            <li>
                                <a id="${cookieArr[i].id}" class="delete_good" href="">×</a>
                            </li>
                        </ul>
                        <div class="solid"></div>
                    </div>`).appendTo('.item_list')
                    }
                }
            },
            error:function(msg){
                alert(msg)
            }
        })
    }

    return {
        download_index,
        download_list,
        download_detail,
        load_shop
    }
})