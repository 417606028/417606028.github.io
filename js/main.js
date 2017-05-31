$(function () {
	let wyf_pro=$("[class*=wyf_r]");
	let progress=$(".strongs");
	let picture=$(".gallery-thumb");
	$(window).scroll(function () {
		let ox=document.body.scrollTop;
		if(ox>556){
            wyf_pro.eq(0).css({width:"85%",transition:"all 2s ease 0s"});
            wyf_pro.eq(1).css({width:"90%",transition:"all 3s ease 0s"});
            wyf_pro.eq(2).css({width:"65%",transition:"all 2s ease 0s"});
            wyf_pro.eq(3).css({width:"85%",transition:"all 2s ease 0s"});
        }
		if(ox<500||ox>1666){
            wyf_pro.eq(0).css({width:0});
            wyf_pro.eq(1).css({width:0});
            wyf_pro.eq(2).css({width:0});
            wyf_pro.eq(3).css({width:0});
		}
		if(ox>1555) {
           picture.animate({opacity:"1"},"2000")
        }

    })

	



});
