(function(){
    $(function(){
        // 开始和结束的时间戳
        var nowTimeStamp = new Date().getTime();
        var endTimeStamp = new Date(2019,0,1).getTime(); // 月份从0开始，0是一月份
        var duringSeconds = Math.floor((endTimeStamp-nowTimeStamp)/1000);
        var counter = null;

        // 相关的dom
        var dayDom = $('#countdown .time-manager .time-day');
        var hourDom = $('#countdown .time-manager .time-hour');
        var minutesDom = $('#countdown .time-manager .time-minutes');
        var secondsDom = $('#countdown .time-manager .time-seconds');
        var hintDom = $('#countdown .arrive-hint');

        var App = function() {
            var _this = this;
            this.timeDay = '';
            this.timeHour = '';
            this.timeMinutes = '';
            this.timeSeconds = '';

            clearInterval(counter);
            counter = setInterval(function(){
                _this.init();
            },1000);
        }

        App.prototype.init = function(){
            var _this = this;
            if(duringSeconds <= 0){
                clearInterval(counter);
                duringSeconds = 0;
                hintDom.show();
            }else{
                duringSeconds--;
                _this.timeSeconds = duringSeconds % 60;
                _this.timeMinutes = Math.floor(duringSeconds/60) % 60;
                _this.timeHour = Math.floor(duringSeconds/(60 * 60)) % 24;
                _this.timeDay = Math.floor(duringSeconds/(60 * 60 * 24));
                dayDom.text(_this.timeDay);
                hourDom.text(_this.timeHour);
                minutesDom.text(_this.timeMinutes);
                secondsDom.text(_this.timeSeconds);
            }
        }

        var app = new App();

        

        
    })
})();