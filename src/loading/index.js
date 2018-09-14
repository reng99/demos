(function(){
	var $loading = document.getElementById("loading");
  	var $progress = document.getElementById("progress");
  	var prg = 0;

  	var timer = 0;
	var timer0 = null;//过渡的页面的计时器

  	progress([80,90],[1,3],100);

  	window.onload = function(){
  		progress(100,[1,5],10,function(){
  			window.setTimeout(function(){
				  var timer0 = setInterval(function(){
					  if($loading.style.opacity!=0){
						  $loading.style.opacity -= 0.1;
					  }else{
						$loading.style.display = "none";
						clearInterval(timer0);
					  }
				  },60);
  			},600);
  		})
  	}

	function progress (dist, speed, delay, callback) {
		var _dist = random(dist);
		var _speed = random(speed);
		var _delay = random(delay);
	  	window.clearTimeout(timer);
	  	timer = window.setTimeout(function(){
	  		if(prg + _speed >= _dist){
	  			window.clearTimeout(timer);
	  			prg = _dist;
	  			callback && callback();
	  		}else{
	  			prg += _speed;
	  			progress(_dist,speed,delay,callback);
	  		}
			if(prg>99){
				$progress.innerHTML = parseInt(prg) + "%";
			}else{
				$progress.innerHTML = '加载中 '+ parseInt(prg) + "%";
			}
	  		console.log(prg);
	  	},_delay);



	}
	function random (n){
		if(typeof n === 'object'){
			var times = n[1]-n[0];
			var offset = n[0];
			return Math.random()*times + offset;
		}else{
			return n;
		}
	}
})();