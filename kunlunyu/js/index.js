
function progress(el, callback) {
    var num = 0;
    var t = setInterval(function () {
        if (num < 75) {
            var step = 5 + 20 * Math.random();
        } else {
            var step = (100 - num) / 10;
        }
        num += step;
       el.html(num.toFixed(2) + "%");
    }, 1000);

   window.onload = function () {
        clearInterval(t);
        el.html("100%");
        if (callback) {
            callback();
        }
    }

}
progress($(".start span"), function () {
    autoplay();
    $('.music').trigger('click');
    $(".start").hide();
    $("#home").show();
});
$(".entry").click(function(){
    $("#home").hide();
    $("#content,#silk").addClass("backrun");
    $('.first .wraper').addClass('backruns');
    $("#content,#silk").show().delay(3000).queue(function(){
          $(this).css("animation-play-state","paused");
          $(".first .wraper").show().css({animationPlayState:"paused"});
          $(this).dequeue();
    })
    $(".first").show();
});
function autoplay() {
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        WeixinJSBridge.invoke('getNetworkType', {}, function (res) {
            // 在这里拿到 e.err_msg, 这里面就包含了所有的网络类型
            // alert(res.err_msg);
            $('audio').get(0).play();
        });
    }else{
        // console.log(1);
    }
}
function move(now,next,time){
   now.find(".name").click(function(){
      now.find('.wraper').addClass('backruns');
       now.find('.wraper').delay(time).queue(function () {
           $(this).css("animation-play-state","running").dequeue();
       });
   now.find(".font").addClass(function(index){
        return "order"+(index+1);
    }).delay(time).queue(function(){
        $("#content,#silk").css("animation-play-state","running");
       setTimeout(function(){
           now.find('.wraper').removeClass('backruns').css("left","0");
            now.find('.childs').addClass(function (index) {
                return "out"+index;
            }).delay(time).queue(function(){

                $(this).hide().dequeue();
            });
           now.find('.wraper').addClass("outX").delay(time).queue(function(){

               $(this).hide().removeClass("outX").css("left","100%").dequeue();
           });

            setTimeout(function(){
             now.hide();
           $("#content,#silk").css("animation-play-state","paused");
                now.find('.childs').removeClass(function (index) {
                    return "out"+index;
                }).delay(time).queue(function(){

                    $(this).show().dequeue();
                });
             next.show();
            },3000)
        },500);
       $(this).dequeue();
    })
})
}
move($(".first"),$(".second"),3000);
move($(".second"),$(".third"),4000);
move($(".third"),$(".fourth"),3000);
move($(".fourth"),$(".fifth"),3000);
$(".fifth .name").click(function(){
 $(".fifth .font").addClass(function(index){
        return "order"+(index+1);
    })
    setTimeout(function(){
        $(".fifth").children().addClass("out");
         setTimeout(function(){
             $(".fifth").hide();
             $("#content,#silk").hide();
            $("#end").show();
            },1000)
    },4000)
});
$(".music").click(function(){
    if($('audio').get(0).paused){
        $(this).addClass('active');
        $('audio').get(0).play();

    }else{
        $(this).removeClass('active');
        $('audio').get(0).pause();
    }
});
$(".restart").click(function(){
    $("#end").hide();
    $("#home").show();
   $("#content,#silk").removeClass("backrun");
   $('.wraper').show();
    $(".font").attr("class","font");
    media.load();
    media.play();
    $(".music").addClass("active");
})
// document.querySelector(".welcome .button").onclick = function () {
//     document.querySelector(".welcome").style.display = "none";
//     document.querySelector(".box").className = "box backrun";
//
//     setTimeout(function () {
//         document.querySelector(".box").style.animationPlayState = "paused";
//         document.querySelector(".one").style.display = "block";
//     }, 2000)
// }
// document.querySelector(".one .goon").onclick = function () {
//     document.querySelector(".one .title").style.display = "block";
//     setTimeout(function () {
//         document.querySelector(".box").style.animationPlayState = "running";
//         document.querySelector(".one").className = "one out";
//         setTimeout(function () {
//             document.querySelector(".box").style.animationPlayState = "paused";
//
//             document.querySelector(".two").style.display = "block";
//
//
//         }, 2000)
//
//     }, 3000);
// }
// document.querySelector(".two .goon").onclick = function () {
//     document.querySelector(".two .title").style.display = "block";
// }