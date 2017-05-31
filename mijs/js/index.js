/*
* @Author: Administrator
* @Date:   2017-05-01 21:15:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-06 08:49:51
*/

'use strict';
window.onload=function(){
	let lis=document.querySelectorAll('.ui-wrapper .ui-page-link');
	let lunbo=document.querySelectorAll('.ui-wrapper-a .ui-wrapper-a-img');
	let index = -1;
	let t;
	/*for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			this.className='ui-page-link-hot';
			// lunbo[i].className='ui-wrapper-a-img-show';
			console.log(i);
			bannerMove(i);
			index=i;
		}
	}*/
		/*lis[i].onmouseleave=function(){
			this.className='ui-page-link';

		}*/
		
	function bannerMove(j){
		for(let i=0;i<lunbo.length;i++){
			lis[i].className='ui-page-link';
			lunbo[i].className='ui-wrapper-a-img';
		}
			lis[j].className='ui-page-link-hot';
			lunbo[j].className='ui-wrapper-a-img-show';
	}
	// move();
	t=setInterval(move,2000);
		let stop=document.querySelector('ui-controls-directions');
		/*stop.onmouseover=function(){
			clearInterval(t);
		}
		stop.onmouseleave=function(){
			startInterval(t);
		}*/
/*	function move(){
		index++;
		if(index==lunbo.length){
			index=0;
		}
		for(let i=0;i<lunbo.length;i++){
		lis[i].className='ui-page-link';
		lunbo[i].className='ui-wrapper-a-img';
		}
		lis[index].className='ui-page-link-hot';
		lunbo[index].className='ui-wrapper-a-img-show';
	}*/
	let next=0,current=0;
	let imgs=document.querySelectorAll('.ui-wrapper-a');
	let win=document.querySelector('.ui-wrapper');
	let imgWidth=parseInt(getComputedStyle(win,null).width);
	let zuida=document.querySelector('.home-hero-slider');
	let flag;
	/*console.log(imgWidth);*/
	for(let  i=0;i<imgs.length;i++){
		if(i==0){
			continue;
		}
		imgs[i].style.left=imgWidth+'px';
	}
	zuida.onmouseenter=function(){
		clearInterval(t);
	}
	zuida.onmouseleave=function(){
		t=setInterval(move,2000);
	}
		function move(){
			next++;
			if(next==imgs.length){
				next=0;
			}
			imgs[next].style.left=imgWidth+'px';
			animate(imgs[current],{left:-imgWidth});
			lis[next].className='ui-page-link-hot';
			lis[current].className='ui-page-link';
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			current=next;
		}
		function moveL(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			imgs[next].style.left=-imgWidth+'px';
			animate(imgs[current],{left:imgWidth});
			lis[next].className='ui-page-link-hot';
			lis[current].className='ui-page-link';
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			current=next;
		}

	lis.forEach(function(value,index,obj){
		value.onclick=function(){
			if(current==index){
				return;
			}
			lis[current].className='ui-page-link';
			this.className='ui-page-link-hot';
			if(index>current){
				imgs[index].style.left=imgWidth+'px';
				animate(imgs[current],{
					left:-imgWidth
				});
				animate(imgs[index],{
					left:0
				});
			}else if(index<current){
				imgs[index].style.left=-imgWidth+'px';
				animate(imgs[current],{
					left:imgWidth
				});
				animate(imgs[index],{
					left:0
				});
			}
			current=next=index;
		}
	})
	function movePrev(){
		index--;
		 if(index<0){
			index=lunbo.length-1;
		}
		for(let i=0;i<lunbo.length;i++){
		lis[i].className='ui-page-link';
		lunbo[i].className='ui-wrapper-a-img';
		}
		lis[index].className='ui-page-link-hot';
		lunbo[index].className='ui-wrapper-a-img-show';
	}
	headerSearch();
	function headerSearch(){
		let box=document.querySelector('.header-search');
		let left=document.querySelector('.search-text');
		let right=document.querySelector('.search-btn');
		box.onmouseenter=function(){
			left.className='search-text header-search-hover';
			right.className='search-btn search-btn-hover';
		}
		box.onmouseleave=function(){
			left.className='search-text';
			right.className='search-btn';
		}
	}
	bannerDirections();
	function bannerDirections(){
		let uiControlsDirectionsLeft=document.querySelector('.ui-controls-directions .ui-prev');
		let uiControlsDirectionsRight=document.querySelector('.ui-controls-directions .ui-next');
		uiControlsDirectionsLeft.onmouseover=function(){
			this.className='ui-prev-hover';
		}
		uiControlsDirectionsLeft.onmouseleave=function(){
			this.className='ui-prev';
		}
		uiControlsDirectionsLeft.onclick=function(){
			if(flag){
				flag=false;
				moveL();
			}
		}
		uiControlsDirectionsRight.onmouseover=function(){
			this.className='ui-next-hover';
		}
		uiControlsDirectionsRight.onmouseleave=function(){
			this.className='ui-next';
		}
		uiControlsDirectionsRight.onclick=function(){
			if(flag){
				flag=false;
				move();
			}
		}
	}
	changeColor();
	function changeColor(){
		let a=document.querySelectorAll('.site-topbar a');
		for(let i = 0;i<a.length;i++){
			a[i].onmouseover=function(){
			this.className='a-hover';
			}
			a[i].onmouseleave=function(){
				this.className='';
			}
		}
	}
	headNavList();
	function headNavList(){
		let lis=document.querySelectorAll('.header-nav .header-yiji-a');
		for(let i = 0;i<lis.length;i++){
			lis[i].onmouseover=function(){
				this.className='header-yiji-a-hover';
			}
			lis[i].onmouseleave=function(){
				this.className='header-yiji-a';
			}
		}
	}
	topbarCart();
	function topbarCart(){
		let bar = document.querySelector('.site-topbar .topbar-cart');
		let menu=document.querySelector('.site-topbar .topbar-cart .cart-menu');
		let a=document.querySelector('.site-topbar .topbar-cart a');
		bar.onmouseenter=function(){
			this.className='topbar-cart topbar-cart-hot';
			menu.className='cart-menu cart-menu-hot';
			a.className='a-hot';
			a.style.color='#ff6700';
		}
		bar.onmouseleave=function(){
			this.className='topbar-cart';
			menu.className='cart-menu';
			a.className='';
			a.style.color='#b0b0b0';
		}
	}
	headerNavLi();
	function headerNavLi(){
		let lis=document.querySelectorAll('.header-nav .header-nav-li');
		let menu=document.querySelectorAll('.header-nav .header-nav-li .header-nav-menu');
		let ul=document.querySelector('.header-nav .header-nav-list');
		/*ul.onmouseover=function(){
			menu[0].className='header-nav-menu header-nav-menu-move';
		}
		ul.onmouseleave=function(){
			menu[0].className='header-nav-menu header-nav-menu';
		}*/
		for(let i=0;i<7;i++){

			lis[i].onmouseenter=function(){
				menu[i].className='header-nav-menu header-nav-menu-hot';
			}
			lis[i].onmouseleave=function(){
				menu[i].className='header-nav-menu';
			}
		}
	}
	// subRight()

		let ch=window.innerHeight;
		let floors=document.querySelectorAll('.box-bd');
		// let boxs=Array.from(floors);
		let arr=[];
		floors.forEach(function(value,index){
			arr.push(value.offsetTop);
		});
		/*console.log(arr);*/
		window.onscroll=function(){
			let tops=document.body.scrollTop;
			// console.log(tops);
			for(let i =0;i<arr.length;i++){
				if(tops + ch > arr[i]+200){
					let imgs=floors[i].getElementsByTagName('img');
					for(let j=0;j<imgs.length;j++){
						imgs[j]['src']=imgs[j]['title'];
					}
				}
			}
		}
	
	starGoods();
	function starGoods(){
		let box=document.querySelector('.home-star-goods .xm-carousel-list');
		let starGoodsL=document.querySelector('.home-star-goods .box-hd .more .starGoodsL');
		let starGoodsR=document.querySelector('.home-star-goods .box-hd .more .starGoodsR');
		let iconL=document.querySelector('.iconL');
		let iconR=document.querySelector('.iconR');
		box.style.width='2452px';
		moveSR();
		let t,flag=0,flag1=1;
		t=setInterval(moveStar,10000);
		function moveStar(){
			if(flag==0){
				flag=!flag;
				flag1=0;
				moveSL();
			}else{
				flag=!flag;
				flag1=1;
				moveSR();
			}
		}

		starGoodsL.onclick=function(){
			if(flag1==0){
				flag1=!flag1;
				moveSR()
			}else{
				return;
			}
		}
		starGoodsR.onclick=function(){
			if(flag1==1){
				flag1=!flag1;
				moveSL()
			}else{
				return;
			}
		}
		function moveSR(){
			box.style.marginLeft='0';
			starGoodsL.style.cursor='auto';
			starGoodsR.style.cursor='pointer';
			iconR.style.color='#b0b0b0';
			iconL.style.color='#e0e0e0';
		}
		function moveSL(){
			box.style.marginLeft='-1226px';
			starGoodsR.style.cursor='auto';
			starGoodsL.style.cursor='pointer';
			iconL.style.color='#b0b0b0';
			iconR.style.color='#e0e0e0';
		}
		starGoodsL.onmouseenter=function(){
			if(flag1==0){
				iconL.style.color='#ff6700';
			}else{
				return;
			}
		}
		starGoodsL.onmouseleave=function(){
			if(flag1==0){
				iconL.style.color='#b0b0b0';
			}else{
				return;
			}
		}
		starGoodsR.onmouseenter=function(){
			if(flag1==1){
				iconR.style.color='#ff6700';
			}else{
				return;
			}
		}
		starGoodsR.onmouseleave=function(){
			if(flag1==1){
				iconR.style.color='#b0b0b0';
			}else{
				return;
			}
		}
	}
}