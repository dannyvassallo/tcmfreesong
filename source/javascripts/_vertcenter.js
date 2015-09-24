function vertCenter(){
	var lH = $('.logo').height();
	var hH = $('.header').height();
	var margin = (hH/2)+(lH/2);
	var ctstMargin = (lH/2);
	ctstMargin = '-'+ctstMargin+'px'
	margin = '-'+margin+'px'
	$('.logo').css({'margin-top':margin});
	// $('.ss-form').css({'margin-top':ctstMargin});
}

$(function(){
	vertCenter();
});

$(window).resize(function(){
	vertCenter();
});