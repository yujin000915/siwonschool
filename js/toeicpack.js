gsap.registerPlugin(ScrollTrigger);

let bodyScrollBar = Scrollbar.init(document.body, {
	damping: 0.1,
	delegateTo: document,
});

ScrollTrigger.scrollerProxy(".scroller", {
	scrollTop(value) {
		if (arguments.length) {
		bodyScrollBar.scrollTop = value;
		}
		return bodyScrollBar.scrollTop;
	},
});

bodyScrollBar.addListener(ScrollTrigger.update);

gsap.set(".roll_img", { zIndex: (i, target, targets) => targets.length - i });

var sjwScrollSections = gsap.utils.toArray('.sjw_scroll');

sjwScrollSections.forEach((sjwScrollSection) => {
	var images = gsap.utils.toArray(sjwScrollSection.querySelectorAll('.roll_img:not(:last-child)'));

	images.forEach((image, i) => {
		var tl = gsap.timeline({
			scrollTrigger: {
				trigger: sjwScrollSection,
				scroller: ".scroller",
				start: () => "top -" + (window.innerHeight * (i + 0.5)),
				end: () => "+=" + window.innerHeight,
				scrub: true,
				toggleActions: "play none reverse none",
				invalidateOnRefresh: true,
			},
		});

		tl.to(image, { height: 0 })
		.to(image, { opacity: 0 }, 0.001);
	});

	var texts = gsap.utils.toArray(sjwScrollSection.querySelectorAll('.roll'));

	texts.forEach((text, i) => {
		var tl = gsap.timeline({
			scrollTrigger: {
				trigger: sjwScrollSection,
				scroller: ".scroller",
				start: () => "top -" + (window.innerHeight * i),
				end: () => "+=" + window.innerHeight,
				scrub: true,
				toggleActions: "play none reverse none",
				invalidateOnRefresh: true,
			},
		});

		tl.to(text, { duration: 0.33, opacity: 1, y: "50%" })
		.to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66);
	});

	ScrollTrigger.create({
		trigger: sjwScrollSection,
		scroller: ".scroller",
		scrub: true,
		markers: true,
		pin: true,
		start: () => "top top",
		end: () => "+=" + (images.length + 1) * window.innerHeight,
		invalidateOnRefresh: true,
	});
});

ScrollTrigger.create({
	trigger: '.text700',
	scroller: ".scroller",
	start: "top",
	onEnter: () => {
		$('.toggle_switch').addClass('on');
	},
	onLeaveBack: () => {
		$('.toggle_switch').removeClass('on');
	},
});

ScrollTrigger.create({
	trigger: '.sec_point',
	scroller: ".scroller",
	start: "top",
	onEnter: () => {
		$('.point_ani').addClass('on');
	},
	onLeaveBack: () => {
		$('.point_ani').removeClass('on');
	},
});

ScrollTrigger.create({
	trigger: '.sec_goods',
	scroller: ".scroller",
	start: "top",
	onEnter: () => {
		$('.sec_goods').addClass('on');
	},
	onLeaveBack: () => {
		$('.sec_goods').removeClass('on');
	},
});
