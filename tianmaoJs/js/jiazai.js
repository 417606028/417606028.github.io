/*
* @Author: Administrator
* @Date:   2017-05-03 22:13:47
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-04 13:05:36
*/

'use strict';

//按需加载原理：浏览器滚动距离+可视区域>=offsetTop;
window.onload = function(){
	//你的专属活动
	let liu = window.innerHeight;  
	let w = document.querySelectorAll('.title a');
	let arr=[];
	w.forEach(function(value,index){
		arr.push(value.offsetTop);
	})

	//古筝
	/*let meinv = document.querySelectorAll('.gu .left img');
	let arr1=[];
	meinv.forEach(function(value,index){
		arr1.push(value.offsetTop);
	})
	console.log(arr1);*/
	/*let right = document.querySelectorAll('.gu .right img');
	let arr1=[];
	right.forEach(function(value,index){
		arr1.push(value.offsetTop);
	})*/
	









	window.onscroll = function(){
		//你的专属活动
		let tops = document.body.scrollTop;
		for(let i=0;i<w.length;i++){
			let imgs = w[i].getElementsByTagName('img');
			if(tops + liu>=w[i].offsetTop+50){
				for(let j=0;j<imgs.length;j++){
					imgs[j]['src']=imgs[j]['title']
				}
			}
		}

 		//古筝
 		/*for(let i=0;i<right.length;i++){
			let imgs = right[i].getElementsByTagName('img');
			if(tops + liu>=right[i].offsetTop+50){
				for(let j=0;j<imgs.length;j++){
					imgs[j]['src']=imgs[j]['title']
				}
			}
		}*/






	}


	






}


























