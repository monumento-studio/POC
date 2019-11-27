$(function () {

	$('.ham').on('click', function(){
		$('.ham').toggleClass('click');
		$('#menu-left').toggleClass('left');

	});


$(".owl-carousel").owlCarousel({
	loop: true,
	items: 1
});

});
