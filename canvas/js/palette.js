/**
 * Created by MACHENIKE on 2017/5/18.
 */
/*
* 线，铅笔，矩形，多边形，多角形，圆，虚线，圆角矩形，填充，描边，填充样式，描边样式，
* 橡皮，文字，裁切
* 撤销，保存，新建，
*
* */
function Palette(obj,ctx,mask) {
    this.obj=obj;// canvas
    this.ctx=ctx;//ctx
    this.width=this.obj.width;
    this.height=this.obj.height;
    this.lineWidth=1;
    this.fillStyle='#000';
    this.strokeStyle='#000';
    this.type='stroke';//fill stroke;
    this.history=[];
    this.lineCap="butt";
    this.bian=5;
    this.jiao=5;
    this.r=50;
    this.randu=50;
    this.ruidu=3;
    this.mask=mask;
    this.fontStyle="20px sans-serif";
    this.textBaseline="middle";
    this.textAlign="center";
}
Palette.prototype={
    init:function () {
        //初始化样式
        this.ctx.lineWidth=this.lineWidth;
        this.ctx.strokeStyle=this.strokeStyle;
        this.ctx.fillStyle=this.fillStyle;
    },
    line:function () {
        let self=this;
        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function (e) {
                let mx=e.offsetX,my=e.offsetY;
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                self.ctx.strokeStyle=self.strokeStyle;
                self.ctx.beginPath();
                self.ctx.moveTo(ox,oy);
                self.ctx.lineTo(mx,my);
                self.ctx.closePath();
                self.ctx.stroke();
            self.mask.onmouseup=function () {
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
            }
        }
    },
    pencil:function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            // console.log(ox,oy)
            self.init();
            self.ctx.clearRect(0,0,self.width,self.height);
            if (self.history.length > 0) {
                self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
            }
            self.ctx.beginPath();
            self.ctx.moveTo(ox, oy);
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.lineTo(mx, my);
                self.ctx.stroke();
                self.mask.onmouseup = function () {
                    self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                    self.mask.onmousemove = null;
                    self.mask.onmouseup = null;
                }
            }
        }
    },
    rect:function () {
      let self=this;
      self.mask.onmousedown=function (e){
          let ox = e.offsetX, oy = e.offsetY;
          self.mask.onmousemove=function (e) {
              let mx = e.offsetX, my = e.offsetY;
              self.init();
              self.ctx.clearRect(0, 0, self.width, self.height);
              if (self.history.length > 0) {
                  self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
              };
              self.ctx.beginPath();
              self.ctx.rect(ox,oy,(mx-ox),(my-oy));
             self.ctx[self.type]();

          };
          self.mask.onmouseup=function () {
              self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
              self.mask.onmousemove = null;
              self.mask.onmouseup = null;
          }
      }
    },
    polygon:function () {
        let self=this;
        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            self.init();
            self.mask.onmousemove=function (e) {
                let cx=e.offsetX,cy=e.offsetY;
                let angle=360/self.bian*(Math.PI/180);
                let r=Math.sqrt(Math.pow((cx-ox),2)+Math.pow((cy-oy),2));
                self.ctx.beginPath();
                self.ctx.moveTo(ox+r,oy);
                for(let i=0;i<self.bian+1;i++){
                    self.ctx.clearRect(0,0, self.width, self.height);
                    if (self.history.length > 0) {
                        self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                    }
                    let x=ox+r*Math.cos(angle*i);
                    let y=oy+r*Math.sin(angle*i);
                    self.ctx.lineTo(x,y);
                    self.ctx[self.type]();

                }
            };
                self.ctx.closePath();
                self.mask.onmouseup=function (e) {
                    self.history.push(self.ctx.getImageData(0,0,self.width, self.height));
                    self.mask.onmousemove=null;
                    self.mask.onmouseup=null;
                }
            };
    },
    pentagon:function () {
        let self=this;
        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            self.init();
            self.mask.onmousemove=function (e) {
                let cx=e.offsetX,cy=e.offsetY;
                let angle=360/(self.bian*2)*Math.PI/180;
                let r=Math.sqrt(Math.pow((cx-ox),2)+Math.pow((cy-oy),2));
                let rm=r/self.ruidu;
                self.ctx.clearRect(0,0, self.width, self.height);
                self.ctx.beginPath();
                self.ctx.moveTo(ox+r,oy);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                for(let i=0;i<self.bian*2;i++){
                    if(i%2==0){
                        self.ctx.lineTo(ox+Math.cos(angle*i)*r,oy+Math.sin(angle*i)*r);
                    }else{
                        self.ctx.lineTo(ox+rm*Math.cos(angle*i), oy+rm*Math.sin(angle*i));
                    }

                }
                self.ctx.closePath();
                self.ctx[self.type]();

            };

            self.mask.onmouseup=function (e) {
                self.history.push(self.ctx.getImageData(0,0,self.width, self.height));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        };
    },
    Rrect:function () {
        let self=this;
        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            self.init();
            self.mask.onmousemove=function (e) {
                let cx=e.offsetX,cy=e.offsetY;
                let w=cx-ox,h=cy-oy;
                self.ctx.clearRect(0,0, self.width, self.height);
                    if (self.history.length > 0) {
                        self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                    }
               /*     if(w||h){
                       w*=-1;
                       h*=-1;
                    }*/
                    self.ctx.beginPath();
                    self.ctx.moveTo(ox-w+self.r,oy-h);
                    self.ctx.lineTo(cx-self.r,oy-h);
                    self.ctx.quadraticCurveTo(cx,oy-h,cx,oy-h+self.r);
                    self.ctx.lineTo(cx,cy-self.r);
                    self.ctx.quadraticCurveTo(cx,cy,cx-self.r,cy);
                    self.ctx.lineTo(ox-w+self.r,cy);
                    self.ctx.quadraticCurveTo(ox-w,cy,ox-w,cy-self.r);
                    self.ctx.lineTo(ox-w,oy-h+self.r);
                    self.ctx.quadraticCurveTo(ox-w,oy-h,ox-w+self.r,oy-h);
                 /*    self.ctx.beginPath();
                    self.ctx.moveTo(ox+self.r,oy);
                    self.ctx.lineTo(Math.abs(cx-self.r),oy);
                    self.ctx.quadraticCurveTo(cx,oy,cx,oy+self.r);
                    self.ctx.lineTo(cx,Math.abs(cy-self.r));
                    self.ctx.quadraticCurveTo(cx,cy,Math.abs(cx-self.r),cy);
                    self.ctx.lineTo(ox+self.r,cy);
                    self.ctx.quadraticCurveTo(ox,cy,ox,Math.abs(cy-self.r));
                    self.ctx.lineTo(ox,oy+self.r);
                    self.ctx.quadraticCurveTo(ox,oy,ox+self.r,oy)
                    */

                    self.ctx.closePath();
                    self.ctx[self.type]();
                };
            self.mask.onmouseup=function (e) {
                self.history.push(self.ctx.getImageData(0,0,self.width, self.height));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
            };

        },
    circle:function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.init();
            if (self.randu == 0) {
                self.mask.onmousemove=function (e) {
                    let mx=e.offsetX,my=e.offsetY;
                    self.ctx.clearRect(0,0,self.width,self.height);
                    if (self.history.length > 0) {
                        self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                    }
                    self.ctx.beginPath();
                    let radius=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
                 /*   console.log(radius);*/
                    self.ctx.arc(ox,oy,radius,0,Math.PI*2);
                    self.ctx[self.type]();
                    self.ctx.closePath();

                };
            } else {
                let ox = e.offsetX, oy = e.offsetY;
                self.ctx.moveTo(ox+self.randu,oy);
                self.ctx.arc(ox, oy, self.randu, 0, Math.PI * 2);
                if(self.fillStyle){
                    self.ctx.fillStyle=self.fillStyle;
                }
                if(self.strokeStyle){
                    self.ctx.strokeStyle=self.strokeStyle;
                }
               self.ctx[self.type]();
                self.ctx.closePath();
            }
            self.mask.onmouseup=function (e) {
                self.history.push(self.ctx.getImageData(0,0,self.width, self.height));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        };
    },
    eraser:function (w,h,eraserbtn) {
        //clearRect(x,y,w,h)
        let self=this;
        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
           eraserbtn.style.width=w+"px";
           eraserbtn.style.height=h+"px";
           eraserbtn.style.display="block";
           eraserbtn.style.left=ox+"px";
           eraserbtn.style.top=oy+"px";
            self.mask.onmousemove=function (e) {
                e.preventDefault();
                let cx=e.offsetX,cy=e.offsetY;
                if(cx>=self.width-w){
                    cx=self.width-w;
                }
                if(cx<0){
                    cx=0;
                }
                if(cy>=self.height-h){
                    cy=self.height-h;
                }
                if(cy<0){
                    cy=0;
                }
                eraserbtn.style.left=cx-(w/2)+"px";
                eraserbtn.style.top=cy-(h/2)+"px";
                self.ctx.clearRect(cx,cy,w,h);
            }
            self.mask.onmouseup=function () {
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                eraserbtn.style.display="none";
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    chexiao:function () {
        this.ctx.putImageData(this.history[this.history.length-1],0,0);
        this.history.pop(this.history[this.history.length-1]);
    },
    upload:function (aa,type) {
        let self=this;
        let imageData=aa.toDataURL("img/png");
        let img=new Image();
        img.src=imageData;
        img.onload=function () {
           if(type){
               let a=document.createElement("a");
               a.href=imageData;
               document.body.appendChild(a);
           }else {
              let data=self.obj.toDataURL('image/png').replace('data:image/png','data:stream/octet');
              location.href=data
           }

        }
    },
    font:function () {
        let self=this;
        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            let div=document.createElement("div");
            div.style.cssText=`
            min-width:50px;
            height:30px;
            position:absolute;
            background:#fff;
            left:${ox}px;
            top:${oy}px;
            `;
            div.contentEditable="true";
            self.mask.appendChild(div);
            self.mask.onmousedown=null;
            self.area=div;
            self.area.onmousedown=function (e) {
                let ox=e.clientX-this.offsetLeft;
                let oy=e.clientY-this.offsetTop;
                self.area.onmousemove=function (e) {
                    let cx=e.clientX,cy=e.clientY;
                    let mx=cx-ox,my=cy-oy;
                    self.area.style.left=`${mx}px`;
                    self.area.style.top=`${my}px`;

                };
                self.area.onmouseup=function () {
                    self.area.onmousemove=null;
                    self.area.onmouseup=null;

                }
            };
            self.area.onblur=function () {
                self.ctx.font=self.fontStyle;
                self.ctx.textAlign=self.textAlign;
                self.ctx.textBaseline=self.textBaseline;
                self.ctx.fillText(this.innerText,this.offsetLeft,this.offsetTop);
                this.parentNode.removeChild(this);
                self.area=null;
            };
            self.mask.onmousemove=function (e) {
                let cx=e.offsetX,cy=e.offsetY;
            };
            self.mask.onmouseup=function () {

            }
        }
    },
    clip:function (clipBtn) {
        let self=this;
        self.mask.onmousedown=function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            let minx,miny,w,h;
            self.mask.onmousemove=function (e) {
                let cx=e.offsetX,cy=e.offsetY;
                minx=cx>=ox?ox:cx;
                miny=cy>=oy?oy:cy;
                w=Math.abs(cx-ox);
                h=Math.abs(oy-cy);
                clipBtn.style.cssText=`
                width:${w}px;
                height:${h}px;
                position:absolute;
                top:${miny}px;
                left:${minx}px;
                border:2px dashed #000;
                `
            }
            self.mask.onmouseup=function () {
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
                self.temp= self.ctx.getImageData(minx,miny,w,h);
                self.ctx.clearRect(minx,miny,w,h);
                self.ctx.putImageData(self.temp,minx,miny);
                self.drag(minx,miny,w,h,clipBtn)
            }
        }
    },
    drag:function (x,y,w,h,clipBtn) {
        let self = this;
        self.mask.onmousemove = function (e) {
            let ox = e.offsetX;
            let oy = e.offsetY;
            if (ox > x && ox < w + x && oy > y && oy < h + y) {
                self.mask.style.cursor = "move";
            } else {
                self.mask.style.cursor = "default";
            }
        }
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX;
            let oy = e.offsetY;
            //鼠标相对于div左上角的位置
            let cx = ox - x;
            let cy = oy - y;
            if (ox > x && ox < w + x && oy > y && oy < h + y) {
                self.mask.style.cursor = "move";
            } else {
                self.mask.style.cursor = "default";
                return;
            }
            self.mask.onmousemove = function (e) {
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length != 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                let endx = e.offsetX;
                let endy = e.offsetY;
                let left = endx - cx;
                let top = endy - cy;
                if(left<0){
                    left=0;
                }
                if(left>self.width-w){
                    left=self.width-w
                }

                if(top<0){
                    top=0;
                }
                if(top>self.height-h){
                    top=self.height-h
                }
                clipBtn.style.left= left+'px';
                clipBtn.style.top=top+'px';
                x=left;
                y=top;
                self.ctx.putImageData(self.temp, left, top);
            }
            self.mask.onmouseup = function () {
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;
                self.drag(x, y, w, h, clipBtn)
            }
        }
    },
    newfiles:function () {
        this.ctx.clearRect(0,0,this.width,this.height);
        this.lineWidth=1;
        this.fillStyle='#000';
        this.strokeStyle='#000';
        this.type='stroke';//fill stroke;
        this.history=[];
        this.lineCap="butt"
        this.bian=5;
        this.jiao=5;
        this.r=50;
        this.randu=50;
        this.ruidu=3;
        this.mask=mask;
        this.fontStyle="20px sans-serif";
        this.textBaseline="middle";
        this.textAlign="center";
    }

};
