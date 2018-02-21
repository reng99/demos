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
    var effctive = $('#index .effective');
    var audio = document.getElementById('music');
    var timer = null;
    audio.loop = true;
    effctive.find('span').css('background','#fff');
    el.mouseenter(function(){
        var self = this;
        audio.play();
        effctive.find('span').css('background','#09c7d1');
        timer = setInterval(function(){
                var _index = Math.floor(3 * Math.random());
                var _height = Math.ceil(16 * Math.random());
                effctive.find('span').eq(_index).css('height',_height+'px');
            },500)
        requestAnimationFrame(function change(){
            self.style.transform = 'rotate('+ (++deg) +'deg)';
            id = requestAnimationFrame(change);
        })
    });
    el.mouseleave(function(){
        audio.pause();
        effctive.find('span').css('background','#fff');
        clearInterval(timer);
        cancelAnimationFrame(id);
    });
})();
