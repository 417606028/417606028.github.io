/*/*/// function getClass(ClassName) {
//     if(document.getElementsByClassName){
//         return document.getElementsByClassName(ClassName);
//     }else{
//         var alls=document.getElementsByTagName('*');
//         var all=[];
//         for(var i=0;i<alls.length;i++){
//             if(alls[i].className.includes(ClassName)){
//
//                 all.push(alls[i])
//             }
//         }
//         return all;
//     }
// }
// console.log(getClass('one'));
/*function fn(num) {
    if(num>0){
        fn(--num)
    }
    console.log(num)
}
function jiecheng(num) {
    return (num-1)>0?num*jiecheng(num-1):1;
}
// console.log(jiecheng(5));
//递归平方和
function squre(num) {
    return num>1?(num*num+squre(--num)*squre(--num)):1;
}
// console.log(squre(3));

function $(selector) {
    return new myjquery(selector);
}*/
/*function myjquery() {

}
myjquery.prototype={

};*/
c/*lass myjquery{
    constructor(selector){
        if(typeof selector === "string"){
            var reg=/^<[a-z]\w{0,*}>$/;
            if(reg.test(selector)){
                var el=reg.exec(selector)[1];
                var els=document.createElement(el);
                this[0]=els;
                this.length=1;
            }else{
                var alls=document.querySelectorAll(selector);
                for(var i=0;i<alls.length;i++){
                    this[i]=alls[i];
                }
                this.length=alls.length;
            }

        }else if(typeof selector ==="function"){
                this.ready(selector);
        }else if(typeof selector ==="object"){
            this[0]=selector;
        }

    };
    ready(callback){
        var that=this;
        document.addEventListener("DOMContentLoaded",function () {
            callback.call(that);
        })
    };
    each(callback){
        for(let i=0;i<this.length;i++){
           callback(i,this[i]);
        }
        return this;
    };
    click(callback){
        this.each(function (i,v) {
            v.onclick=function () {
                callback.call(v);
            }
        })
    }
    html(val){
        this.each(function (i,v) {
            v.innerHTML=val;
        })
        return this;
    };
    css(parmas){
        this.each(function (i,v) {
            for(let k in parmas ){
                v.style[k]=parmas[k];
            }
        });
        return this;
    };
    appendTo(el){
        var alls=document.querySelectorAll(el);
        var obj=this[0];
        for(var i=0;i<alls.length;i++){
           var clone=obj.cloneNode(true);
           this[i]=clone;
           alls[i].appendChild(clone);
        }
        this.length=alls.length;
        return this;
    };
}
$(function () {
    console.log(this);
});
function myjquery(selector) {
    if(typeof selector=="string"){
        "....."
    }
}
myjquery.prototype={

}
*/





