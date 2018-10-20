var imagesDom = {};

$(document).ready(function(){
    loadImage(imagesSource,start);
});

function start(){
    $('#loading-version2-percent').hide();
    $('#loading-version2').show();
}

function loadImage(sources , callback){
    var count = 0;
    var imgNum = Object.keys(sources).length;
    Object.keys(sources).forEach(function(key){
        imagesDom[key] = new Image();
        imagesDom[key].onload = function(){
            count++;
            var loadingRate = parseInt((count / imgNum) * 100) + '%';
            console.log(loadingRate);
            $('#progress').text('已经加载了 '+loadingRate);
            if(count >= imgNum){
                callback(); // 回调
            }
        }
        imagesDom[key].src = sources[key]; // image的src赋值
    });
}

var imagesSource = {
    image1 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img01.jpg",
    image2 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img02.jpg",
    image3 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img03.jpg",
    image4 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img04.jpg",
    image5 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img05.jpg",
    image6 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img06.jpg",
    image7 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img07.jpg",
    image8 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img08.jpg",
    image9 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img09.jpg",
    image10 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img10.jpg",
    image11 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img11.jpg",
    image12 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img12.jpg",
    image13 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img13.jpg",
    image14 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img14.jpg",
    image15 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img15.jpg",
    image16 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img16.jpg",
    image17 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img17.jpg",
    image18 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img18.jpg",
    image19 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img19.jpg",
    image20 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img20.jpg",
    image21 : "http://omu538iq8.bkt.clouddn.com/frontend/loading/img21.jpg",
  }