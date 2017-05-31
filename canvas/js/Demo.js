/*
 * 线，铅笔，矩形，多边形，多角形，圆，虚线，圆角矩形，填充，描边，填充样式，描边样式，
 * 橡皮，文字，裁切
 * 撤销，保存，新建，
 *
 * */
 class Palette{
     constructor(obj,ctx){
       this.obj=obj;
       this.ctx=ctx;
       this.lineWidth=5;
       this.fillStyle="#000000";
       this.strokeStyle="#000000";
       this.type="stroke";
       this.lineCap="butt"
       this.bian=5;
       this.jiao=5;
       this.width=obj.width;
       this.height=obj.height;
       this.history=[];

       //线宽，样式，颜色，类型，边数，角数；
     };
     init(){
         this.ctx.lineWidth=this.lineWidth;
         this.ctx.lineCap=this.lineCap;
         this.ctx.fillStyle=this.fillStyle;
         this.ctx.strokeStyle=this.strokeStyle;

     }
     line(){
         let that=this;
         that.obj.onmousedown=function (e) {
             let ox=e.offsetX,oy=e.offsetY;
             that.obj.onmousemove=function (e) {
                 let mx=e.offsetX,my=e.offsetY;
                 that.init();
                 that.ctx.clearRect(0,0,that.width,that.height);
                 if(that.history.length>0){
                     that.ctx.putImageData(that.history[that.history.length-1],0,0);
                 }
                 that.ctx.beginPath();
                 that.ctx.moveTo(ox,oy);
                 that.ctx.lineTo(mx,my);
                 that.ctx.stroke();
                 that.ctx.closePath();
                 //填充

             };
             that.obj.onmouseup=function () {
                 that.history.push(that.ctx.getImageData(0,0,that.width,that.height));
                 that.obj.onmousemove=null;
                 that.onmouseup=null;
             }
         }
     };
     pencil(){

     };
     rect(){
        let that=this;
        that.obj.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            that.obj.onmousemove=function (e) {
                let cx=e.offsetX,cy=e.offsetY;
                let w=cx-ox,h=cy-oy;
                that.ctx.clearRect(0,0,that.width,that.height);
                if(that.history.length>0){
                    that.ctx.putImageData(that.history[that.history.length-1],0,0);
                }
                that.ctx.beginPath();
                that.ctx.moveTo(ox,oy);
                that.ctx.rect(ox,oy,w,h);
                that.ctx.closePath();
                that.ctx.stroke();

            }
            that.obj.onmouseup=function () {
                that.history.push(that.ctx.getImageData(0,0,that.width,that.height));
                that.obj.onmousemove=null;
                that.obj.onmouseup=null;
            }
        }
     };
     circle(){

     };
     draw(){

     };
     ploygon(){
         let that=this;
         that.obj.onmousedown=function (e) {
             let ox=e.offsetX,oy=e.offsetY;
             that.obj.onmousemove=function (e) {
                 let cx=e.offsetX,cy=e.offsetY;
                 let radius=Math.sqrt(Math.pow((cx-ox),2)+Math.pow((cy-oy),2));
                 let angle=360/that.bian*Math.PI/180;
                 that.ctx.clearRect(0,0,that.width,that.height);
                 if(that.history.length>0){
                     that.ctx.putImageData(that.history[that.history.length-1],0,0);
                 }
                 that.ctx.beginPath();
                 that.ctx.moveTo(ox+radius,oy);
                 for(let i=0;i<that.bian;i++){
                     that.ctx.lineTo(ox+radius*Math.cos(angle*i),oy+radius*Math.sin(angle*i));
                     that.ctx.closePath();
                 }
                 that.ctx[that.type]();
                 that.ctx.stroke();

             }
             that.obj.onmouseup=function () {
                 that.history.push(that.ctx.getImageData(0,0,that.width,that.height));
                 that.obj.onmousemove=null;
                 that.obj.onmouseup=null;
             }
         }
     }



}