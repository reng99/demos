// banner 轮播图效果使用的方法

// 引用请说明出处 -> https://github.com/reng99

/**
 * switchPos('className');
 * html的格式
 * <div class="banner">
 *       <ul class="bd">
 *           <li><a href="javascript:void(0)"><img src="./imgs/index/banner1.png" alt="banner1"></a></li>
 *           <li><a href="javascript:void(0)"><img src="./imgs/index/banner2.png" alt="banner2"></a></li>
 *           <li><a href="javascript:void(0)"><img src="./imgs/index/banner3.png" alt="banner3"></a></li>
 *       </ul>
 *       <ul class="hd">
 *           <li></li>
 *           <li></li>
 *           <li></li>
 *       </ul>
 *       <div class="pre"></div>
 *       <div class="next"></div>
 *   </div>
 *
 * css的使用自行定义
 */
(function(){

    
    switchPos("banner");//banner调用入口

    function switchPos(a){
        var timer = null;//计时器
        var curIndex = 0;//当前的展示层，默认是第一层
        var duringTime = 5000;//轮播的时间
        //var _marginLeft = -$("."+a+" .bd li:first").width();//左移的距离
        var _marginLeft = -100;
        
        $("."+a+" .bd li:first").clone().appendTo("."+a+" .bd");//将第一层克隆放在最后
        $("."+a+" .hd li").eq(curIndex).addClass("active").siblings().removeClass("active");//默认是第一个标志点
        

        slide();
        function slide(){
            clearInterval(timer);
            timer = setInterval(function(){
                autoSlide();
            },duringTime);
        }
        function autoSlide(){
            
            if(curIndex < $("."+a+" .bd li").length - 2){
                curIndex++;
                $("."+a+ " .bd").stop(false,true).animate(
                    {
                        "marginLeft":_marginLeft * curIndex+"%"
                    },
                    "slow"
                );
            }else{
                $("."+a+" .bd").stop(false,true).animate(
                    {
                        marginLeft:_marginLeft * ($("."+a+" .bd li").length-1)+"%"
                    },
                    "slow",
                    function(){
                        $("."+a+" .bd").css("marginLeft",0);
                    }
                );
                curIndex = 0;
            }
            $("."+a+" .hd li").eq(curIndex).addClass("active").siblings().removeClass("active");
        }
        $("."+a).mouseenter(function(){
            $("."+a+" .pre").css("display","block");
            $("."+a+" .next").css("display","block");
        });
        $("."+a).mouseleave(function(){
            $("."+a+" .pre").css("display","none");
            $("."+a+" .next").css("display","none");
        });
        $("."+a+" .next").click(function(){//下一张
            autoSlide();
            slide();
        });
        $("."+a+" .pre").click(function(){//上一张
            if(curIndex > 0){
                curIndex--;
                $("."+a+" .bd").stop().animate({
                    "marginLeft":_marginLeft*curIndex+"%"
                },
                "slow"
                );
            }else{
                $("."+a+" .bd").css("marginLeft",_marginLeft * ($("."+a+" .bd li").length-1)+"%");
                curIndex = $("."+a+" .bd li").length - 2;
                $("."+a+" .bd").stop().animate({
                    "marginLeft":_marginLeft*curIndex+"%"
                },
                "slow"
                );
            }
            $("."+a+" .hd li").eq(curIndex).addClass("active").siblings().removeClass("active");
            slide();
        });
        $("."+a+" .hd li").mouseenter(function(){//点击标记点切换
            $(this).addClass("active").siblings().removeClass("active");
            curIndex = $(this).index();
            $("."+a+" .bd").stop().animate({
                "marginLeft":_marginLeft*curIndex+"%"
            },
            "slow"
            );
            slide();
        });
    }
})();