/**
 * 引用请注明出处 https://github.com/reng99
 */

(function(){
    // 调用
    showPopLayer("#showPopLayer");

    var time = 600;

    // 实现获取窗口大小的类
    var Size = {  // 兼容处理
        // 获取浏览器的可视宽度
        getPageWidth : function(){
            var pageWidth = window.innerWidth; // ie9+，opera,chrome,safari.firefox支持
            if(typeof pageWidth != "number"){
                if(document.compatMode == "CSS1Compat"){
                    pageWidth = document.documentElement.clientWidth;
                }else{
                    // 非标准模式的ie
                    pageWidth = document.body.clientWidth;
                }
            }
            return pageWidth;
        },
        // 获取浏览器的可视高度
        getPageHeight : function(){
            var pageHeight = window.innerHeight;
            if(typeof pageHeight != "number"){
                if(document.compatMode == "CSS1Compat"){
                    pageHeight = document.documentElement.clientHeight;
                }else{
                    pageHeight = document.body.clientHeight;
                }
            }
            return pageHeight;
        }
    }
    
    // 初始化弹出层面积和内容的居中
    function init(){
        $("#pop .layer").css({
            width: Size.getPageWidth() + "px",
            height: Size.getPageHeight() + "px"
        });
        $("#pop .container").css({
            left: Math.floor((Size.getPageWidth()-$("#pop .container").width())/2) + "px"
        })
    }
    function showPopLayer(el){
        $(el).click(function(){
            init();
            $("#pop").fadeIn(time);
            $("body").css({
                "overflow": "hidden"
            });
        });
    }

    // 改变浏览器大小触发事件
    $(window).resize(function(){
        init();
    })

    // 关闭弹出层
    $("#pop .close , #pop .login").click(function(){
        $("#pop").fadeOut(time);
        $("body").css({
            "overflow": "auto"
        })
    })
})()