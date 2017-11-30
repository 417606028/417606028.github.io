$(function () {
    var hashs=location.hash.split("#")[1];
    // console.log(hashs);//0
    var urls=['http://m10.music.126.net/20171130145434/9ddecaa74d3657e388ffcd8199c3aad9/ymusic/da77/1a23/3212/b75782a72e49b57f561bcdd63684ff1f.mp3','http://m10.music.126.net/20171130150113/7eef4845e36625462aaf277708efe18c/ymusic/0908/de2d/b9cb/e681689541a32a4832a94d9f99fa9937.mp3','http://m10.music.126.net/20171130150406/bbca4c21b2703374dcefd6a598f73c09/ymusic/87b2/b6b6/2862/25c7104cecb596141c14328f7f949e05.mp3','http://m10.music.126.net/20171130150532/4a1050871150efedd4e784399782975d/ymusic/fad7/deb4/c5d0/2d9b54b214014ffacb95ef18b28dc1fb.mp3','http://m10.music.126.net/20171130150834/56a018613e851fb32679239ede4883e2/ymusic/a398/582b/1f04/0996a45e84319b022826d0e5dc0c530a.mp3','http://m10.music.126.net/20171130151022/8791d2d36a8ecf1bf12ce69f0ff8f487/ymusic/8a1f/086f/0c82/8376ee8fec24f653996f986ac29e1e0b.mp3','http://m10.music.126.net/20171130151246/58c79aadc01a9b70db244d172605c3a6/ymusic/56f5/53b5/9d45/88fd44bd2ffcc4c45c69ed51a07e3c64.mp3','http://m10.music.126.net/20171130151410/05cb89dd07b686ec29861acdf4b11ef5/ymusic/1e87/1952/1747/cd507850541045d0124df872f09c65cc.mp3','http://m10.music.126.net/20171130151700/4279e35d4a16c7e95892487756b15975/ymusic/f4f4/61ea/204e/4f1e8b8ef0d5b10333d84fa1fc249d0e.mp3','http://m10.music.126.net/20171130151809/15aa470693313e5cc4fa22bcc4279b40/ymusic/9044/1e77/f75b/6a86f5fb1dbde0bf07f26ee8e618d4a0.mp3','http://m10.music.126.net/20171130152105/fcf3d167c0d665ca7af7e9de9f0dd8fc/ymusic/5dde/f2d3/3dba/0a0914dcd1585247b58938a3a7afd925.mp3','http://m10.music.126.net/20171130152256/b8a6957b069a3e4d43095b119e7a4f20/ymusic/ee40/4573/0670/9c0041e4ce576853b06f0ad04eeee885.mp3','http://m10.music.126.net/20171130152751/8eaadfa6edd5555bf3d9dea36ed70ed8/ymusic/ff2f/0701/cfa9/01670d046f07e60b58a7602966c6ce19.mp3','http://m10.music.126.net/20171130153050/9784a647b12de7e601ebb3c6eab924da/ymusic/a8f8/4db5/48a4/f8a85686e7fc0d894b6d9f210500ff37.mp3','http://m10.music.126.net/20171130153255/fc9047a0e67baa84a975e64f67988b4e/ymusic/0dd9/d28b/e089/fcbab41f4900212553c5b610c617da2a.mp3']
    var urls1=urls[hashs];
    // console.log(urls);
    var audio=$('audio');
    audio.attr('src',urls1);
    audio.get(0).play();
    var playEl=$('#play');
    playEl.click(function () {
        // console.log(1);
        if($(this).hasClass('active')){
            audio.get(0).pause();
            $(this).find('i').css('display','block');
            $(this).removeClass('active');
            $('.disc').removeClass('active');
        }else{
            audio.get(0).play();
            $(this).find('i').css('display','none');
            $(this).addClass('active');
            $('.disc').addClass('active');
        }

    })
    audio.on('timeupdate',function () {
        console.log();
    })
});