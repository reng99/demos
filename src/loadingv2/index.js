var imagesDom = {};

$(document).ready(function(){
    loadImage(imagesSource,start);
});

function start(){
    console.log('start function is active');
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
            if(count >= imgNum){
                callback(); // 回调
            }
        }
        imagesDom[key].src = sources[key]; // image的src赋值
    });
}

// var imagesSource = {
//     image1 : "",
//     image2 : "",
//     image3 : "",
//     image4 : "",
//     image5 : "",
//     image6 : "",
//     image7 : "",
//     image8 : "",
//     image9 : "",
//     image10 : "",
//     image11 : "",
//     image12 : "",
//     image13 : "",
//     image14 : "",
//     image15 : "",
//     image16 : "",
//     image17 : "",
//     image18 : "",
// }


var imagesSource = {
    image1 : "http://campus.sf-tech.com.cn/wechat/asset/start-btn.png",
    image2 : "http://campus.sf-tech.com.cn/wechat/asset/start.png",
    image3 : "http://campus.sf-tech.com.cn/wechat/asset/last.jpg",
    image4 : "http://campus.sf-tech.com.cn/wechat/asset/logo.png",
    image5 : "http://campus.sf-tech.com.cn/wechat/asset/last/astronaut-body.png",
    image6 : "http://campus.sf-tech.com.cn/wechat/asset/last/astronaut-head.png",
    image7 : "http://campus.sf-tech.com.cn/wechat/asset/last/astronaut-light.png",
    image8 : "http://campus.sf-tech.com.cn/wechat/asset/last/bg.jpg",
    image9 : "http://campus.sf-tech.com.cn/wechat/asset/last/bottom-cloud.png",
    image10 : "http://campus.sf-tech.com.cn/wechat/asset/last/bottom-element.png",
    image11 : "http://campus.sf-tech.com.cn/wechat/asset/last/dec-image.png",
    image12 : "http://campus.sf-tech.com.cn/wechat/asset/last/far-cloud.png",
    image13 : "http://campus.sf-tech.com.cn/wechat/asset/last/footer-cloud.png",
    image14 : "http://campus.sf-tech.com.cn/wechat/asset/last/middle-cloud.png",
    image15 : "http://campus.sf-tech.com.cn/wechat/asset/last/speed-light.png",
    image16 : "http://campus.sf-tech.com.cn/wechat/asset/last/title-light.png",
    image17 : "http://campus.sf-tech.com.cn/wechat/asset/last/title.png",
    image18 : "http://campus.sf-tech.com.cn/wechat/asset/last/top-element.png",
    image19 : "http://campus.sf-tech.com.cn/wechat/asset/last/top-left-cloud.png",
    image20 : "http://campus.sf-tech.com.cn/wechat/asset/last/ufo.png",
    image21 : "http://campus.sf-tech.com.cn/wechat/asset/last/aircraft.png",
    image22 : "http://campus.sf-tech.com.cn/wechat/asset/last/aircraft-light.png",
    image23 : "http://campus.sf-tech.com.cn/wechat/asset/last/car.png",
    image24 : "http://campus.sf-tech.com.cn/wechat/asset/last/car-light.png",
    image25 : "http://campus.sf-tech.com.cn/wechat/asset/last/rocket-light.png",
    image26 : "http://campus.sf-tech.com.cn/wechat/asset/last/sf-card-light.png",
    image27 : "http://campus.sf-tech.com.cn/wechat/asset/last/btn-bg.png",
    image28 : "http://campus.sf-tech.com.cn/wechat/asset/last/btn-icon.png"
  }