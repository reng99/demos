// https://www.jianshu.com/p/0a9b27e7da36

// 模拟数据
var arrImg = [
	"./imgs/img1.jpg",
    "./imgs/img2.jpg",
    "./imgs/img3.jpg",
    "./imgs/img4.jpg",
    "./imgs/img5.jpg",
    "./imgs/img6.jpg",
    "./imgs/img7.jpg",
    "./imgs/img8.jpg",
    "./imgs/img9.jpg",
    "./imgs/img10.jpg",
    "./imgs/img11.jpg",
    "./imgs/img12.jpg",
    "./imgs/img13.jpg",
    "./imgs/img14.jpg",
    "./imgs/img15.jpg",
    "./imgs/img16.jpg",
    "./imgs/img17.jpg",
    "./imgs/img18.jpg",
    "./imgs/img19.jpg",
    "./imgs/img20.jpg"
];

var box = document.getElementById('box');
var items = box.children;

var gap = 10;

window.onload = function(){
	waterFall();
}

window.onresize = function(){
	waterFall();
}

window.onscroll = function(){
	console.log('reng');
}


function waterFall(){
		var pageWidth = getClient().width;
		var itemWidth = items[0].offsetWidth;
		var columns = parseInt(pageWidth/(itemWidth + gap));
		var arr = [];
		for(var i = 0; i < items.length ; i++){
			if(i < columns) {
				items[i].style.top = 0;
				items[i].style.left = (itemWidth +gap)* i +'px';
				arr.push(items[i].offsetHeight);
			}else{
				var minHeight = arr[0];
				var index = 0;
				for(var j = 0; j< arr.length; j++){
					if(minHeight > arr[j]){
						minHeight = arr[j];
						index = j;
					}
				}
				items[i].style.top = arr[index] + gap + 'px';
                items[i].style.left = items[index].offsetLeft + 'px';
				arr[index] = arr[index] + items[i].offsetHeight + gap;
			}
		}
	}



function getClient() {
	return {
		width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
		height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	}
}

function getScrollTop(){
	return window.pageYOffset || document.documentElement.scrollTop;
}