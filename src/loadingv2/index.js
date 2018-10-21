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

var imagesSource = { // 图片的路径建议改成cdn路径
    image1 : "./imgs/img01.jpg",
    image2 : "./imgs/img02.jpg",
    image3 : "./imgs/img03.jpg",
    image4 : "./imgs/img04.jpg",
    image5 : "./imgs/img05.jpg",
    image6 : "./imgs/img06.jpg",
    image7 : "./imgs/img07.jpg",
    image8 : "./imgs/img08.jpg",
    image9 : "./imgs/img09.jpg",
    image10 : "./imgs/img10.jpg",
    image11 : "./imgs/img11.jpg",
    image12 : "./imgs/img12.jpg",
    image13 : "./imgs/img13.jpg",
    image14 : "./imgs/img14.jpg",
    image15 : "./imgs/img15.jpg",
    image16 : "./imgs/img16.jpg",
    image17 : "./imgs/img17.jpg",
    image18 : "./imgs/img18.jpg",
    image19 : "./imgs/img19.jpg",
    image20 : "./imgs/img20.jpg",
    image21 : "./imgs/img21.jpg",
  }