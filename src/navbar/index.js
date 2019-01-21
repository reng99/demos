(function(){
    $(document).ready(function(){
        $lisa = $('#navbar .nav-tools>li a');
        $lis = $('#navbar .nav-tools>li');
        $lisa.click(function(){
            $(this).parent().siblings().removeClass('active');
            $(this).parent().addClass('active');
        })

        $('.sub-menu').click(function(){
            $(this).children('.children').slideToggle();
        })
        
        var flag = true;
        $(".nav-bar .more-icon").click(function(){
            if(flag){
                $('#navbar').animate({
                    "left": "0"
                });
                flag = false;
            }else{
                $('#navbar').animate({
                    "left": "100%"
                });
                flag = true;
            }
        })
    });
})();