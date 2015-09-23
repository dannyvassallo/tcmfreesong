function vertCenter(){
	var lH = $('.logo').height();
	var hH = $('.header').height();
	var margin = (hH/2)+(lH/2);
	margin = '-'+margin+'px'
	$('.logo').css({'margin-top':margin});
}

$(function(){
	vertCenter();
});

$(window).resize(function(){
	vertCenter();
});