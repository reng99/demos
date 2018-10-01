## html2canvas的相关说明

[html2canvas官网](http://html2canvas.hertzen.com/)

自己的[例子](./index.html)

### 注意点

为了更好的使用html2canvas，需要注意以下的点:

- 截图使用图片img来代替背景图，截取的清晰度更好

- 浏览器兼容
	- Firefox 3.5+
	- Google Chrome
	- Opera 12+
	- IE9+
	- Edge
	- Safari 6+

- CSS样式不支持
	- background-blend-mode
	- border-image
	- box-decoration-break
	- box-shadow
	- filter
	- font-variant-ligatures
	- mix-blend-mode
	- object-fit
	- repeating-linear-gradient()
	- writing-mode
	- zoom

-  图片会如果存在跨域问题，这个必须设置好代理允许跨域



> written by reng99 in Canton on 10.01.2018
