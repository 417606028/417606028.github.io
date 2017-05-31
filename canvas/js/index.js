window.onload=function () {
    let line=document.querySelector(".line");
    let pencil=document.querySelector(".pencil");
    let rect=document.querySelector(".rect");
    let polygon=document.querySelector(".polygon");
    let pentagon=document.querySelector(".pentagon");
    let Rrect=document.querySelector(".Rrect");
    let circle=document.querySelector(".circle");
    let strokes=document.querySelector(".strokes");
    let fills=document.querySelector(".fills");
    let clip=document.querySelector(".cutting");
    let clipBtn=document.querySelector(".clip");
    let eraser=document.querySelector(".eraser");
    let lineWidth=document.querySelector(".lineWidth");
    let miaobianse=document.querySelector("#miaobianse");
    let tianchongse=document.querySelector("#tianchongse");
    let texts=document.querySelector(".texts");
    let canvas=document.querySelector("canvas");
    let ctx=canvas.getContext("2d");
    let mask=document.querySelector(".mask");
    let palette=new Palette(canvas ,ctx,mask);
    let eraer=document.querySelector(".eraer");
    let chexiao=document.querySelector(".chexiao");
    let upload=document.querySelector(".upload");
    let newfiles=document.querySelector(".newfiles");
    line.onclick=function () {
        palette.line();
    };
    pencil.onclick=function () {
        palette.pencil();
    };
    rect.onclick=function () {
        palette.rect();
    };
    polygon.onclick=function () {
        palette.bian=Number(prompt("请输入边数",5));
        palette.polygon();
    };
    Rrect.onclick=function () {
        palette.r=Number(prompt("请输入圆角半径",30));
        /*console.log(r)*/
        palette.Rrect();
    };
    circle.onclick=function () {
        palette.randu=Number(prompt("请输入圆的半径",50));
        /*console.log(r)*/
        palette.circle();
    };
    pentagon.onclick=function () {
        palette.ruidu=Number(prompt("请输入锐度",3));
        palette.bian=Number(prompt("请输入边数",5));
        palette.pentagon();
    };
    eraser.onclick=function () {
        let w=Number(prompt("请输入橡皮的宽",10));
        let h=Number(prompt("请输入橡皮的高",10));
        let eraserbtn=eraer;
        /*console.log(r)*/
        palette.eraser(w,h,eraserbtn);
    };
    strokes.onclick=function () {
        palette.type="stroke";
    };
    fills.onclick=function () {
        palette.type="fill";
    };
    miaobianse.onchange=function () {
        palette.strokeStyle=`${this.value}`;
    };
    tianchongse.onchange=function () {
        palette.fillStyle=`${this.value}`;
    };
    lineWidth.onclick=function () {
        palette.lineWidth=prompt("请输入线宽",1);
    };
    chexiao.onclick=function () {
        palette.chexiao();
    };
    texts.onclick=function () {
        palette.font();
    };
    clip.onclick=function () {
        palette.clip(clipBtn);
    };
    newfiles.onclick=function () {
        palette.newfiles();
    };
    upload.onclick=function () {
        let aa=canvas;
        let type=window.confirm("是否需要在其他页面打开？");
        palette.upload(aa,type);
    }

};