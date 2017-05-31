/*
* @Author: Administrator
* @Date:   2017-04-28 13:16:10
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-29 17:50:56
*/

'use strict';

/*
$('.class')
$('#id')
$('div')
$('function(){
	
}')


首先判断是不是字符串   是   ****  
                      不是  ****

 */

function $(selector,can=document){
	let type = typeof selector;
	if(type=='string'){
		//元素的获取
		let select =selector.trim();
		let first = selector.charAt(0);
		if(first=='.'){
			return can.getElementsByClassName(select.substring(1));
		}else if(first=='#'){
			return document.getElementById(select.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
			//正则
			return can.getElementsByTagName(select);
		}else{
			return ;

		}
	}else if(type=='function'){
		//添加事件
		window.onload = function(){
			selector();
		}
	}else{
		return false;
	}

}


