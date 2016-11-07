// JavaScript Document

$(document).ready(function(){
	//slideshow();
	$(".menu_toggle img").click(function(){
		$(this).parents(".menu_toggle").siblings(".menu_list").slideToggle("200");
	});
});

function slideshow(){
	var slideLength=$(".slideshow_img").length;
	var i=1;
	window.setInterval(function(){slide();},5000);
	function slide(){
		var j=i+1;
		$(".slideshow_img:nth-child("+j+")").siblings(".slideshow_img").fadeOut("5000");
		$(".slideshow_img:nth-child("+j+")").siblings(".slideshow_img").css({"display":"none"});
		$(".slideshow_img:nth-child("+j+")").fadeIn("5000");
		i++;
		j++;
		if(i==slideLength){ i=0; }
	}
}