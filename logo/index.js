$(function () {
   var boxEl=$('#box');
   var arr=[1,2,3,4];
    for(let i=0;i<arr.length;i++){
        let el=$('<div>');
        el.html(i+1);
        boxEl.append(el);
    }
    if(arr.length<81){
        for(let i=arr.length;i<81;i++){
            let el=$('<div>');
            el.html(i+1);
            boxEl.append(el);
            arr.push(i);
        }
    }
    function pre() {
        for(let i=0;i<9;i++){
            let el=$('<div>');
            el.html(i);
            boxEl.prepend(el);
        }
    }
    function t  () {
        flag=true;
    }
    $('body').on('touchstart', boxEl, function(e) {
        var touch = e.originalEvent;
        var startY = touch.changedTouches[0].pageY;

        boxEl.on('touchend', function(e) {
            // e.preventDefault();
            touch = e.originalEvent.touches[0] ||
                e.originalEvent.changedTouches[0];
            if (touch.pageY - startY > 10) {
                // console.log("下划");
                // console.log(top);
                var flag=true;
                if($(document).scrollTop()<=0){
                    if(flag){
                        flag=false;
                        clearTimeout(t);
                        pre();
                        console.log(flag);
                        $(this).off('touchmove');

                    }else {
                        setTimeout(t,2000)
                    }


                }
            } else if (touch.pageY - startY < -10) {
                if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
                    for(let i=arr.length;i<arr.length+9;i++){
                        let el=$('<div>');
                        el.html(i+1);
                        boxEl.append(el);
                    }
                }
                // console.log("上划");
            };
        });

        // Return false to prevent image
        // highlighting on Android
        return false;

    }).on('touchend', function() {
        $('this').off('touchmove');
    });


});