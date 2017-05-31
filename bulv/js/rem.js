'use strict'
window.onload=function(){
	var designWidth=750;   /*定义设计尺寸*/
	function fontSize (){
		var CW = document.documentElement.clientWidth;
//		console.log(CW); /*输出文档的宽度*/
		var size = CW/designWidth*100+"px";
		document.querySelector("html").style.fontSize=size;
//		console.log(size);  /输出rem大小/
	}
	fontSize();
	window.onresize=fontSize; /*监测窗口尺寸是否发生变化*/
	
}