$(function () {

	$('.ham').on('click', function(){
		$('.ham').toggleClass('click');
		$('#menu-left').toggleClass('left');

	});


$(".owl-carousel").owlCarousel({
	autoplay: true,
	items: 1,
  singleItem: true,
  slideSpeed: 2000,
  theme: 'owl-theme',
	pagination:false,
	navigation:true,
  dots: false,
  loop: true,
  nav: true
});


$(".owl-prev span").html('');
$(".owl-next span").html('');





});
