// 当页面加载之后执行function函数
	// 定义一个常量，后面不加单位
	const designWidth=750;
	// 定义字体大小，100方便之后用rem
	const fontSize=100;
	// 查询选择器
	// document.querySelector("html").style.fontSize=fontSize+"px"
	function resizeFont(){
		var CW = document.documentElement.clientWidth;
		// console.log(CW);
		var radio = CW/designWidth; 
		var newFontSize = fontSize*radio;
		document.querySelector("html").style.fontSize=newFontSize+"px";
	}
	resizeFont();
	// 窗口宽度改变时执行resizeFont
	window.onresize= resizeFont;