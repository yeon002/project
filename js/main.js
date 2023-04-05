$(function(){

	$("#gnb > ul > li").hover(
		function(){
			$("header .menu").addClass("active");
		},
		function(){
			$("header .menu").removeClass("active");
		}
	);
	
	$("#gnb > ul > li:first-child > a").focusin(function(){
		$("#header .menu").addClass("active");
	});
	$("#gnb li:last-child li:last-child a").focusout(function(){
		$("#header .menu").removeClass("active");
	});
	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active")
	});
	$("#gnb li li:last-child a").focusout(function(){
		$(this).parent().parent().parent().removeClass("active")
	});

	let pageN=0;

	$(".slider").click(function(e){
		e.preventDefault();
	});

	$(".control li").eq(0).addClass("current");
	$(".slider_moving li").eq(0).addClass("active");

	$(".control li").click(function(){
		$(".control li").removeClass("current");
		$(this).addClass("current");

		pageN=$(this).index();

		$(".slider_moving li").removeClass("active");
		$(".slider_moving li").eq(pageN).addClass("active");
	});
	$(".right").click(function(){
		if(pageN < 3){
			pageN=pageN+1;
		}
		else{
			pageN=0;
		}

		$(".control li").removeClass("current");
		$(".control li").eq(pageN).addClass("current");
		$(".slider_moving li").removeClass("active");
		$(".slider_moving li").eq(pageN).addClass("active");
	});
	$(".left").click(function(){
		if(pageN > 0){
			pageN=pageN-1;
		}
		else{
			pageN=3;
		}

		$(".control li").removeClass("current");
		$(".control li").eq(pageN).addClass("current");
		$(".slider_moving li").removeClass("active");
		$(".slider_moving li").eq(pageN).addClass("active");
	});
});