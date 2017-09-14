/*
* @Author: MACHENIKE
* @Date:   2017-09-12 14:10:03
* @Last Modified by:   MACHENIKE
* @Last Modified time: 2017-09-12 17:16:25
*/
/*
蛇：首先应该有蛇头，蛇身；食物；蛇和食物的位置；


 */
window.onload=function(){
	//创建网格
	for(var i=0;i<30;i++){
		for(var j=0;j<50;j++){
			var el=document.createElement('div');
			el.id=i+"_"+j;
			document.getElementById('snakebox').appendChild(el);
		}
	}
	//初始化分数和时间
	var score=-1;
	//初始化蛇的位置
	var sheBiao={"0_0":true,"0_1":true,"0_2":true}
	//蛇对应的坐标
	var she=[
        {x:0,y:0},
        {x:0,y:1},
        {x:0,y:2}
    ];
	//找到对应的点
	var findP=function(point){
        if(point.x<0&&point.y<0){
            return document;
        }else{
            return document.getElementById(`${point.x}_${point.y}`);
        }

    }
    //放蛇
    var init=function(){
        for(var m=0;m<she.length;m++){
            findP(she[m]).classList.add('head');
        }
    }
    init();
    //放食物

    function food(){
        //不能放在蛇身上
        do{var a=Math.floor(Math.random()*48)+1;
            var b=Math.floor(Math.random()*28)+1;
        }while(sheBiao[b+'_'+a]);
        console.log(b,a)
        document.getElementById(`${b}_${a}`).classList.add('food');
        score+=1;
       	document.querySelector('.score').innerHTML=`当前得分：${score}`;

        if(score>3){

            document.querySelector('#next').style.cssText=`transform:scale(1,1)`;
            document.querySelector('.nexttext').innerHTML=`当前得分为：${score}`;
            paused();
        }
        return {x:b,y:a}
    }
    var setFood=food();
    //设置方向
    var fangxiang="right";
    document.onkeydown=function (e) {
        e.preventDefault();
         var biao={
             'left':37,
            'right':39,
             'up':38,
            'down':40
        }
        if(e.keyCode==37){
            fangxiang = "left";
        }else if(e.keyCode==38){
            fangxiang = 'up';
        }else if(e.keyCode==39){
            fangxiang = 'right';
        }else if(e.keyCode==40){
            fangxiang = 'down';
        }
     };
     //移动函数
     function move(){
     	var jiutou=she[she.length-1];
     	if(fangxiang=='right'){
     		var xintou={x:parseInt(jiutou.x),y:parseInt(jiutou.y)+1};
            var yidong=document.getElementById(`${parseInt(xintou.x)+1}_${parseInt(xintou.y)}`);
            var yidong2=document.getElementById(`${(parseInt(xintou.x)-1)>0?parseInt(xintou.x)-1:0}_${parseInt(xintou.y)}`);
            if(!!yidong&&!!yidong2){
                yidong.style.transition='all ease .5s ';
                yidong2.style.transition='all ease .5s ';
                yidong.style.top=10+'px';
                yidong2.style.top=-10+'px';
                setTimeout(function () {
                    yidong.style.top=0+'px';
                    yidong2.style.top=0+'px';
                },50);
            }

     	}else if(fangxiang=='down'){
            var xintou={x:parseInt(jiutou.x)+1,y:parseInt(jiutou.y)};
            var yidong=document.getElementById(`${xintou.x}_${parseInt(xintou.y)+1}`);
            var yidong2=document.getElementById(`${xintou.x}_${parseInt(xintou.y)-1}`);
            // 移动两边的
            if(!!yidong&&!!yidong2){
                yidong.style.transition='all ease .5s ';
                yidong2.style.transition='all ease .5s ';
                yidong.style.left=10+'px';
                yidong2.style.left=-10+'px';
                setTimeout(function () {
                    yidong.style.left=0+'px';
                    yidong2.style.left=0+'px';
                },50);
            }

        }else if(fangxiang=='up'){
     	    var uxint=parseInt(jiutou.x)-1>0?parseInt(jiutou.x)-1:0;
            var xintou={x:uxint,y:parseInt(jiutou.y)};
            var yidong=document.getElementById(`${xintou.x}_${parseInt(xintou.y)+1}`);
            var yidong2=document.getElementById(`${xintou.x}_${parseInt(xintou.y)-1}`);
            // 移动两边的
            if(!!yidong&&!!yidong2){
                yidong.style.transition='all ease .5s ';
                yidong2.style.transition='all ease .5s ';
                yidong.style.left=10+'px';
                yidong2.style.left=-10+'px';
                setTimeout(function () {
                    yidong.style.left=0+'px';
                    yidong2.style.left=0+'px';
                },50);
            }

        }else if(fangxiang=='left'){
            var lInt=parseInt(jiutou.y)-1>0?parseInt(jiutou.y)-1:0;
            var xintou={x:parseInt(jiutou.x),y:lInt};
            var yidong=document.getElementById(`${parseInt(xintou.x)+1}_${parseInt(xintou.y)}`);
            var yidong2=document.getElementById(`${(parseInt(xintou.x)-1)>0?parseInt(xintou.x)-1:0}_${parseInt(xintou.y)}`);
            // console.log(yidong2);
            if(!!yidong&&!!yidong2){
                yidong.style.transition='all ease .5s ';
                yidong2.style.transition='all ease .5s ';
                yidong.style.top=10+'px';
                yidong2.style.top=-10+'px';
                setTimeout(function () {
                    yidong.style.top=0+'px';
                    yidong2.style.top=0+'px';
                },50);
            }

        }


         //能不能撞到自己

         for(let i in sheBiao){

             if(sheBiao[xintou.x+'_'+xintou.y]===sheBiao[i]){
                 document.querySelector('#restart').style.cssText=`transform:scale(1,1)`;
                 paused();

             }


         }

         //将新的蛇头放入she和sheBiao；
         she.push(xintou);
         sheBiao[xintou.x+'_'+xintou.y]=true; //定义蛇头位置

         if((xintou.x==setFood.x)&&(xintou.y==setFood.y)){
             findP(xintou).classList.remove('food');
             setFood=food();
             // console.log(1)
         }else{
             var weiba=she.shift();
             delete sheBiao[weiba.x+'_'+weiba.y] ; //删除尾巴
             findP(weiba).classList.remove('head');
             findP(xintou).classList.add('head');
             // console.log(2)

         }
        //判断失败
         if(xintou.x+1>29||xintou.y+1>49||xintou.x<0||xintou.y<0){
             document.querySelector('#restart').style.cssText=`transform:scale(1,1)`;
             paused();
        }
    }
    var timerid;
     var speed=200;
    var  start=function(speed){
        clearInterval(timerid);
        timerid=setInterval(move,speed);
    }
    var paused=function(){
        clearInterval(timerid);
    };
    var flagXy=true;
    document.querySelector('.button').onclick=function () {
        if(!flagXy){
            flagXy=true;
            document.querySelector('.button').classList.remove('pause');
            paused();
        }else{
            flagXy=false;
            document.querySelector('.button').classList.add('pause');

            start(speed);
        }
    };

    document.querySelector('.reflow').onclick=function () {
       window.location.reload();
    }
    document.querySelector('.nextdoor').onclick=function () {
        speed-=50;
        start(speed);
        document.querySelector('#next').style.cssText=`transform:scale(0,0)`;

    }

}
