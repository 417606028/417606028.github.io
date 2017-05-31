/**
 * Created by MACHENIKE on 2017/5/26.
 */
$(function () {
    // 52 4  13
    // hcsd 黑桃（Spade）、红桃（Heart）、方块（Diamond）、梅花（Club）
    let poke=[];
    let color=['h','s','c','d'];
    let biao={};
    for(let i=0;i<52;i++){
        let huase=color[Math.floor(Math.random()*4)];
        let shuzi=Math.floor(Math.random()*13+1);
        while (biao[`${huase}_${shuzi}`]){
            huase=color[Math.floor(Math.random()*4)];
            shuzi=Math.floor(Math.random()*13+1);
        }
        biao[`${huase}_${shuzi}`]="pokeJoker";
        poke.push({huase,shuzi});
    }
    let index=0;
    for(let i=0;i<7;i++){
        for(let j=0;j<=i;j++){
            let item=poke[index];
            //item={huase:shuzi}
            index++;
            // $("<img>").appendTo(document.body).attr({src:`img/${item.shuzi}${item.huase}.png`});
            let imgSrc=`img/${item.shuzi}${item.huase}.png`;
            // $("img").remove();
          $('<div>').addClass('poke').css({
                backgroundImage:`url(${imgSrc})`
            }).delay(30*index)
              .prop({id:`${i}_${j}`}).attr({pokeid:`${item.shuzi}`})
              .data("num",item.shuzi)
                .animate({
                    left:300-i*50+100*j,
                    top:70*i,
                    opacity:1
                })
                .appendTo('.table');
        }
    }
    for(;index<poke.length;index++){
        let item=poke[index];
        //item={huase:shuzi}
        /*$("<img>").appendTo(document.body).attr({src:`img/${item.shuzi}${item.huase}.png`});*/
        let imgSrc=`img/${item.shuzi}${item.huase}.png`;
       /* $("img").remove();*/
        $('<div>').addClass('poke zuo').attr({pokeid:`${item.shuzi}`})
            .data("num",item.shuzi)
            .css({
            backgroundImage:`url(${imgSrc})`
        }).delay(30*index)
            .animate({
                left:100,
                top:600,
                opacity:1
            })
            .appendTo('.table');
    }
    let first=null;
    $(".poke").click(function () {
        let coords=$(this).prop("id").split("_");
        let ele= $(`#${parseInt(coords[0])+1}_${parseInt(coords[1])}`);
        let ele1=$(`#${parseInt(coords[0])+1}_${parseInt(coords[1])+1}`);
        if(!(ele.length||ele1.length)){
            $(this).toggleClass("active");
            if($(this).hasClass("active")){
                $(this).finish().animate({top:"-=20"})
            }else {
                $(this).finish().animate({top:"+=20"})
            }
        }else{
            return
        }
    /*    if(!first){
            first=this;
            if($(this).data('num')==13){
                $('.active').animate({top:0,left:600},function () {
                    $(this).remove();
                });
                first=null;
            }

        }else{
            let sum=$(first).data('num')+$(this).data('num');
            console.log(sum);
            if(sum==13){
                $('.active').animate({top:0,left:600},function () {
                    $(this).remove();
                });
            }else {
                $('.active').animate({top:"+=20"}).removeClass("active");
            }
            first=null;
        }*/
        if($(".active").length>2){
            $(".active").animate({top:"+=20"});
            $(".active").removeClass("active");
            // $(".active").eq(1).removeClass("active");

        }
       $(".active").map(function (value, index) {
           for (let i=0;i<$(".active").length;i++){
               // console.log($(index).attr("pokeid"));
               if(parseInt($(index).attr("pokeid"))+parseInt($(".active").eq(i).attr("pokeid"))==13||$(index).attr("pokeid")==13){
                    $('.active').animate({top:0,left:600},function () {
                    $(this).remove();
               });
           }

           }})

    });
    let moveL=$(".moveL");
    let moveR=$(".moveR");
    let z=1;
    moveR.on("click",function () {
        z++;
        $(".zuo").last().removeClass("zuo")
            .addClass("you")
            .css({zIndex:z})
            .animate({left:"+=400"})
    })
    moveL.on("click",function () {
        let you=$(".you");
        z--;
        if($(".you").length!=0){
            for(let i=0;i<you.length;i++){
                $(you[i]).removeClass("you").addClass("zuo").css({zIndex:z}).delay(30*i).animate({left:"-=400"})
            }
        }else{
            alert("请点击左箭头发牌");
        }

    })
    if($(".poke").length==0){
        window.prompt("恭喜你完成十三点");
    }
    $(".poke").map(function (index,value) {
        for(let i=0;i<$(".poke").length;i++){
            if($(value).data("num")+$(".poke").eq(i).data("num")!=13){

            }
        }
    })
});