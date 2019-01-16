(function(){
    var DURATION =200, // 过渡的时间，毫秒为单位
        EFFECTIVE = 'linear'; // 过渡的效果
    var _len = $('.single-item').length;
    var _outerHeight = $('.single-item').outerHeight(true);
    var _wrapper = $('.wrapper');

    $('#stretch').click(function(){
        // 主要是改变wrapper容器的高度就可以了
        if($('#stretch').text() == '点击展开'){
            _wrapper.animate(
                {'height': _len * _outerHeight + 'px'},
                DURATION,
                EFFECTIVE,
                function(){
                    $('#stretch').text('点击折叠')
                }
            );
        }else{
            _wrapper.animate(
                {'height': _outerHeight + 'px'},
                DURATION,
                EFFECTIVE,
                function(){
                    $('#stretch').text('点击展开')
                }
            );
        }
        
    });
})();