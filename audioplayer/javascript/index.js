window.onload=function () {
    let audio=document.querySelector("audio");
    let song=document.querySelector(".song");
    let author=document.querySelector(".singer");
    let lyrict=document.querySelector(".lyrics");
    let playBtn=document.querySelector(".play");
    let nextBtn=document.querySelector(".next");
    let prevBtn=document.querySelector(".prev");
    let info=document.querySelector(".info");
    let cTime=document.querySelector(".cTime");
    let dTime=document.querySelector(".dTime");
    let pBottom=document.querySelector(".pBottom");
    let box=document.querySelector(".box");
    let son=document.querySelector(".son");
    let infoImg=document.querySelector(".infoimg");
    let volumess=document.querySelector(".volumemark");
    let volumebox=document.querySelector(".volumebox");
    let volume=document.querySelector(".valume");
    let circle=document.querySelector(".circle");
    let index=0;
    render(database[index]);
    volume.onclick=function () {
        volumebox.style.display="block";

    };
    document.body.ondblclick=function () {
            volumebox.style.display="none";
    }
    volumess.onmouseup=function (e) {
        let x=e.offsetY;
       volumess.removeEventListener("mousemove",funmove,false);
        // console.log(x ,this.offsetHeight);
        let bili=1-(x/this.offsetHeight);
        circle.style.top=x+"px";
/*        if(x==200){
            volume.classList.toggle("")
        }*/
        // console.log(bili);
        audio.volume=bili;
    };
    volumess.onmousedown=function (e) {
        volumess.addEventListener("mousemove",funmove,false);
    };
    box.onclick=function (e) {
        let x=e.offsetX;
        let a=box.offsetWidth;
        let bili=x/a;
        audio.onseeking=function () {
            let duration=audio.duration;
            audio.currentTime=bili*duration;
            console.log(audio.currentTime);
            audio.play();
        };
        son.style.width=x+"px";

    }
    function funmove(e) {
        let x=e.offsetY;
/*        console.log(x);*/
        let bili=1-(x/volumess.offsetHeight);
/*        console.log(volume.offsetHeight);*/
        circle.style.top=x+"px";
        audio.volume=bili;
    }
    playBtn.onclick=function ( ) {
        if(audio.paused){
            audio.play();
            playBtn.classList.toggle("pauseds");
        }else{
            audio.pause();
            playBtn.classList.toggle("pauseds");
        }
    };
    nextBtn.onclick=function () {
        index++;
        if(index>=database.length){
            index=0;
        }
        playBtn.classList.toggle("pauseds");
        render(database[index]);
    };
    prevBtn.onclick=function () {
        index--;
        if(index=0){
            index=database.length-1;
        }
        playBtn.classList.toggle("pauseds");
        render(database[index]);
    };
    //初始化加载；
    //歌词
    let i=0;
    let x=0;
    audio.ontimeupdate=function(e){
            let current=format(audio.currentTime);
            let duration=format(audio.duration);
            cTime.innerText=current;
           /* dTime.innerText=duration;*/
            let string="";
            let bili=audio.currentTime/audio.duration*100+"%";
           /* console.log(bili)*/
            son.style.width=bili;
            database[index]["lyrics"].forEach(function (value,index) {
                if(value.time==current){
                    x=i=index;
                };
            })
            if(x<2){
                i=0;
            }else{
                i=x-2;

            }
            for(let j=i;j<database[index]["lyrics"].length;j++){
                if(j==x){
                    string+=`<li class="hot">${database[index]["lyrics"][j]["lyric"]}</li>`
                }else{
                    string+=`<li>${database[index]["lyrics"][j]["lyric"]}</li>`
                }

            }
            lyrict.innerHTML="";
            lyrict.innerHTML=string;
    };
    ////////////////////////////////////////////////////
    function format(time) {
        let m=Math.floor(time/60)>=10?Math.floor(time/60):"0"+Math.floor(time/60);
        let s=Math.floor(time%60)>10?Math.floor(time%60):"0"+Math.floor(time%60);
        return `${m}:${s}`;
    }
    ///////////////////////////////////////////////////
    function render(obj) {
        // song singer lyrics>li audio(src);
        song.innerText=obj.songs;
        author.innerText=obj.name;
        audio.src=obj.src;
        info.innerText=``;
        infoImg.src=obj.photo;
        cTime.innerText="00:00";
        dTime.innerText=obj.alltime;
        son.style.width=0;
        let string="";
        let objarr=obj.lyrics;
        objarr.forEach(function (value,index){
            string+=`<li>value.lyric</li>`;
        });
        lyrict.innerHTML="";
        lyrict.innerHTML=string;
    }
}