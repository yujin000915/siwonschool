(function () {

	const stageElem = document.querySelector( '.stage' );
	const houseElem = document.querySelector( '.house' );
	const barElem = document.querySelector( '.progress_bar');
	const mousePos = { x: 0, y: 0};
	let maxScrollValue;

	function resizehandler() {
		maxScrollValue =  document.body.offsetHeight - window.innerHeight;
	}

	window.addEventListener( 'scroll', function() {
		const scrollPer = pageYOffset / maxScrollValue;
		const zMove =  scrollPer * 1000 - 490;
		houseElem.style.transform = 'translateZ(' + zMove + 'vw)';

		// progressBar
		barElem.style.width =  scrollPer * 100 + '%';
	});

	// mouse hover시 moving
	window.addEventListener('mousemove', function (e) {
		mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
		mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;

		stageElem.style.transform = 'rotateX(' + (mousePos.y * 5) + '0deg) rotateY(' + (mousePos.x * 5) + 'deg)';
	});

	window.addEventListener('resize', resizehandler);
	resizehandler();

})();

$(document).ready(function (){

	const sl_book = new Swiper('.sl_book', {
		centeredSlides: true,
		slidesPerView: 4,
		spaceBetween: 10,
		loop: true,
		touchRatio: 0,
		navigation: {
			prevEl: '.navigation .prev',
			nextEl: '.navigation .next'
		},
	});

});
