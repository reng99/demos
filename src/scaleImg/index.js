/**
 * 引用请注明出处 https://github.com/reng99
 * 引用了viewer.js https://github.com/fengyuanchen/viewerjs
 */

$(function(){
	// 图片查看入口
	(function(){
		$('#scale').viewer({});
	})();
	// 本demo图片转换不是重点 详细查看 http://reng99.cc/demos/dist/html/carousel/
	(function(){
		var lis = $("#scale .imgs li");
		var _index = 0;
		var time = 500;

		$("#scale .imgs").css("width",lis.width()*lis.length + "px");

		$("#scale .next").click(function(){
			_index = (_index < lis.length-1) ? _index+1 : 0;
			$("#scale .imgs").stop().animate({
				marginLeft:-lis.width()*_index + "px"
			},time);
			return false;
		});

		$("#scale .pre").click(function(){
			_index = (_index == 0) ? lis.length-1 : _index-1;
			$("#scale .imgs").stop().animate({
				marginLeft:-lis.width()*_index + "px"
			},time);
			return false;
		});

	})();
})