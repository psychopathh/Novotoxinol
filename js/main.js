$(document).ready(function(){
	$('.insta_slider').bxSlider({
		pager: true,
		adaptiveHeight: true,
		nextText: '',
		prevText: ''
	});
	$('.fb_slider').bxSlider({
		pager: true,
		adaptiveHeight: true,
		nextText: '',
		prevText: ''
	});

	var resizeId;
	$(window).on('load', function(){$(this).resize()});
	$(window).resize(function() {
		clearTimeout(resizeId);
		resizeId = setTimeout(doneResizing, 300);
	});
	function doneResizing(){
		clearTimeout(resizeId);
	}
});