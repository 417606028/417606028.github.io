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
    $(".start").hide();
    $("#home").show();
});
$(".entry").click(function(){
    $("#home").hide();
    $("#content,#silk").addClass("backrun");
    $("#content,#silk").show().delay(3000).queue(function(){
          $(this).css("animation-play-state","paused");
          $(this).dequeue();
    })
    $(".first").show();
})
function move(now,next,time){
   now.find(".name").click(function(){
   now.find(".font").addClass(function(index){
        return "order"+(index+1);
    }).delay(time).queue(function(){
        $("#content,#silk").css("animation-play-state","running");
        setTimeout(function(){
            now.children().addClass("out");
            setTimeout(function(){
             now.hide();
           $("#content,#silk").css("animation-play-state","paused");
             next.show();
            },500)
        },2500);
       $(this).dequeue();
    })
})
}
move($(".first"),$(".second"),3000);
move($(".second"),$(".third"),4000);
move($(".third"),$(".fourth"),2000);
move($(".fourth"),$(".fifth"),2000);
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
})
$(".music").click(function(){
    $(this).toggleClass("active");
    if($("audio").get(0).paused){
        $("audio").get(0).play();
    }else{
         $("audio").get(0).pause();
    }
})
$("audio")[0].play();
$(".restart").click(function(){
    $("#end").hide();
    $("#home").show();
   $("#content,#silk").removeClass("backrun");
    $(".item").children().removeClass("out");
    $(".font").attr("class","font");
    $("audio")[0].load();
    $("audio")[0].play();
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