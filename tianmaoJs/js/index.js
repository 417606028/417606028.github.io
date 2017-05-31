'use strict'
	$(function(){
	let t;
	t=setInterval(move,4000)

	let ban = $('.ban')[0];
	let ph1 = $('.ph1',ban);
	let ph = $('.ph',ban);
	let wheel = $('.wheel')[0];
	let lun = $('li',wheel);
	let index = 0;

	ban.onmouseover = function(){
		clearInterval(t);
	}
	ban.onmouseout = function(){
		 t = setInterval(move,4000);
	}


	let left = $('.left_jian')[0];
	let right = $('.right_jian')[0];
	//switch
	

	for(let j=0;j<ph1.length;j++){
		lun[j].onmouseover = function(){
			for(let z=0;z<ph1.length;z++){
				lun[z].style.background='#ccc';
				ph[z].style.opacity=0;
			}
			lun[j].style.background='none';
			ph[j].style.opacity=1;
			index = j;
		}

	}
	function move(){
		index++;
		if(index==ph1.length){
			index=0;
		}
		for(let i=0;i<ph1.length;i++){
				ph[i].style.opacity=0;
				lun[i].style.background='#ccc';			
		}
		lun[index].style.background='none';
		ph[index].style.opacity=1;
	
	
		


	}
	function moveDown(){
			index--;
			if(index<0){
				index=ph1.length-1;
			}
			for(let i=0;i<ph1.length;i++){
					ph[i].style.opacity=0;
					lun[i].style.background='#ccc';			
			}
			//按钮点击事件
			lun[index].style.background='none';
			ph[index].style.opacity=1;
	}

	//关注人数
	let gu = $('.gu')[0];
	let logo1 = $('.logo1',gu);
	let tao = $('.tao',gu);
	for(let i=0;i<logo1.length;i++){
		logo1[i].onmouseover = function(){
		tao[i].style.opacity=1;
		}
		logo1[i].onmouseout = function(){
			tao[i].style.opacity=0;
		}
	}

//直播的上下的滑动
	let zhibo = $('.zhibo_dong',gu)[0];
	let zhibo1 = $('.zhibo_dong1',gu);

	let heights = parseInt(getComputedStyle(zhibo,null).height);

	let current = 0;
	let next = 0;
	for(let a=0;a<zhibo1.length;a++){
		if(a==0){
			continue;
		}
		zhibo1[a].style.top = heights+'px';
	}

	let m = setInterval(gun,3000);
	function gun(){
		next++;
		if(next==zhibo1.length){
			next=0;
		}
		zhibo1[next].style.top = heights + 'px';
		animate(zhibo1[current],{top:-heights});
		animate(zhibo1[next],{top:0});

		current = next;

	}



    //最顶部的天猫
    //右边的侧拉框的实现

    //顶部的天猫的获取
    let heads = document.querySelector('.heads');
    let flag = true;

    //直达顶部
    let ding = document.querySelector('.ce .a2');
    ding.onclick = function(){
    	animate(document.body,{scrollTop:0});
    }
   
    //图片的按需加载

    //你的专属活动
    let liu = window.innerHeight;  
	let w = document.querySelectorAll('.title a');
	let arr=[];
	w.forEach(function(value,index){
		arr.push(value.offsetTop);
	})
	//潮流前沿
	let chao = $('.chao')[0];
	let chao1 = $('.chao1',chao)[0]
	let chaos = chao1.offsetTop;

	//古筝
	let guzheng =$('.gu')[0];
	let gutu = $('.gutu1',guzheng)[0]
	let gus=gutu.offsetTop;

	//好货不等人
	let hao = $('.hao')[0];
	let hao1 = $('.hao_one',hao)[0];
	let haos = hao1.offsetTop;
	//你的春装买贵了
	let hao11 = $('.hao2')[0]
	let hao2 = $('.hao_one',hao11)[0];
	let haos1 = hao2.offsetTop;
	//吸顶灯出大事了
	let hao22 = $('.hao3')[0]
	let hao3 = $('.hao_one',hao22)[0];
	let haos2 = hao3.offsetTop;
	//只买真皮就够了
	let hao33 = $('.hao4')[0]
	let hao4 = $('.hao_one',hao33)[0];
	let haos3 = hao4.offsetTop;

	 //获取楼层  美丽人生   潮流酷玩等
    let floors = document.querySelectorAll('.mei');
    let arr1 = [];
    //遍历楼层
    floors.forEach(function(value,index){
    	arr1.push(value.offsetTop);
    })
    //跳转楼层
    let flag2=true;
    let la = document.querySelectorAll('.ce a')
    for(let i=0;i<la.length;i++){
    	la[i].onclick = function(){
    		flag2=false;
    		animate(document.body,{scrollTop:arr1[i]},function(){flag2=true;})
    	}
    }
    //检测滚动条
window.onscroll = function(){
	let tops = document.body.scrollTop;
			
	 //右边的侧拉框
    let ce = document.querySelector('.ce');
    let ce1 = document.querySelectorAll('.ce a');
    let flag1=true;
	//右边的侧边的固定定位的出现
		if(tops>=650){
			if(flag1){
				animate(ce,{left:2},300,Tween.Cubic.easeOut);
				flag1=false;
			}
			
		}else{
			if(flag1){
				flag1=true;
				animate(ce,{left:-400},300,Tween.Cubic.easeOut);
				flag1=false;
			}
			
		}
		//美丽人生
		arr1.forEach(function(value,index){		
			if(tops+liu>=value+200){
				let imgsMei = floors[index].getElementsByTagName('img');
				for(let m=0;m<imgsMei.length;m++){
					imgsMei[m].src=imgsMei[m].title;
				}	

				for(let i=0;i<floors.length;i++){
				ce1[i].style.background='#626262';

			}
				switch(index){
					case 0:
					ce1[index].style.background='#EA5F8D';
					break;
					case 1:
					ce1[index].style.background='#0AA6E8';
					break;
					case 2:
					ce1[index].style.background='#64C333';
					break;
					case 3:
					ce1[index].style.background='#F15453';
					break;
					case 4:
					ce1[index].style.background='#19C8A9';
					break;
					case 5:
					ce1[index].style.background='#F7A945';
					break;
					case 6:
					ce1[index].style.background='#000';
					break;
				}    		
			}
			
			
		
		})



		//古筝
		if(tops+liu>=gus+100){
			let imgsGu =gutu.getElementsByTagName('img');
			for(let m=0;m<imgsGu.length;m++){
					imgsGu[m]['src']=imgsGu[m]['title'];
			}
		}

		//潮流前沿
		if(tops+liu>=chaos+200){
			let imgsChao = chao1.getElementsByTagName('img');
			for(let s=0;s<imgsChao.length;s++){
					imgsChao[s]['src']=imgsChao[s]['title'];
			}
		}

		
		

		//好货不等人
		if(tops+liu>=haos+100){
			let imgsHao1 = hao1.querySelectorAll('img');
			imgsHao1[0].src=imgsHao1[0].title;
		}
		//你的春装买贵了
		if(tops+liu>=haos1+100){
			let imgsHao1 = hao2.querySelectorAll('img');
			imgsHao1[0].src=imgsHao1[0].title;
		}
		//吸顶灯出大事了
		if(tops+liu>=haos2+100){
			let imgsHao1 = hao3.querySelectorAll('img');
			imgsHao1[0].src=imgsHao1[0].title;
		}
		//只买真皮就够了
		if(tops+liu>=haos3+100){
			let imgsHao1 = hao4.querySelectorAll('img');
			imgsHao1[0].src=imgsHao1[0].title;
		}

		if(tops>=750){
			if(flag){
				animate(heads,{top:0},400,Tween.Cubic.easeOut,function(){flag=true;});
				flag=false;
			}
			
		}else{
			if(!flag){
				flag=true;
				animate(heads,{top:-50},400,Tween.Cubic.easeOut,function(){flag=true;})
			}	
		}
}
	let footinfo=$('.footerinfo')[0];
	window.onresize=function(){
		let ce=document.querySelector('.ce');
		let cw=window.innerWidth;
		let footbox=$('.footbox')[0];
		let imginfox=$('.footerinfox')[0];
		let imginfoy=$('.footerinfoy')[0];
		let imgArr=imginfox.src;
		let imgArr1=imginfoy.src;
		if(cw<=1230){
			footinfo.style.width='1190';
			footinfo.style.backgroundImage=`url(${imgArr})`;
			footinfo.style.backgroundPosition='center';
			footinfo.style.backgroundSize='cover'
			footbox.style.width=990+'px';
			footbox.style.marginLeft=(cw-990)/2+"px";
		}else if(cw>1230){
			footinfo.style.backgroundImage=`url(${imgArr1})`;
			footinfo.style.backgroundPosition='center';
			footinfo.style.backgroundSize='cover'
			footbox.style.width='100%';
			footbox.style.marginLeft=0;
		}
	}





})











		
	














