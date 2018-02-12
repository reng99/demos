//  兼容浏览器
(function(){
    var lastTime = 0;
    var vendors = ['webkit','moz','ms','-o'];
    for(var x = 0;x <vendors.length && !window.requestAnimationFrame; ++x){
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'cancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if(!window.requestAnimationFrame){
        window.requestAnimationFrame = function(callback){
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function(){
                callback;
            },timeToCall);
            lastTime = currTime - timeToCall;
            return id;
        }
    }
    if(!window.cancelAnimationFrame){
        window.cancelAnimationFrame = function (id){
            clearTimeout(id);
        }
    }
})();

// 业务代码
(function(){
    var deg = 0;
    var id ;
    var el = $('.avatar');
    el.mouseenter(function(){
        var self = this;
        requestAnimationFrame(function change(){
            self.style.transform = 'rotate('+ (++deg) +'deg)';
            id = requestAnimationFrame(change);
        })
    });
    el.mouseleave(function(){
        cancelAnimationFrame(id);
    });
})()

(function(){
    var audio = document.getElementById('music');
    audio.loop = true;
    // 播放/暂停
    $('.btn-play').click(function() {

        console.log('rengjiaming')
        // 检测播放是否已暂停
        if(audio!==null){
            if(audio.paused){
                audio.play();

            }else{
                audio.pause();
            }
        }
    });
})()
