$(document).ready(function() {
	// 탭메뉴 디폴트 on
	if ( $('div[id^="tmenu_comm"]').length ) {
		$('.tmenu li:first-child', this).addClass('on');
		$('.tcon> li', this).not('li:first-child').css({ 'display': 'none' });

		//aria 추가
		if ($('div[id^="tmenu_comm"]').hasClass('aria')) {
			const ariaObj = '.tmenu_wrap.aria>';
			$(ariaObj + '.tmenu').attr('role', 'tablist'),
			$(ariaObj + '.tcon>li').attr('role','tabpanel'),
			$(ariaObj + '.tmenu li').attr('tabindex', 0),
			$(ariaObj + '.tmenu li:first-child').attr('aria-selected', true).siblings('li').attr('aria-selected', false);
			$(ariaObj + '.tmenu li').each(function() {
				let parentId = $(this).closest('.tmenu_wrap').attr('id'),
					tmenuIdx = $(this).index(),
					tmenuId = parentId + '-tab-' + tmenuIdx,
					tconId = parentId + '-section-' + tmenuIdx;
				$(this).attr('id', tmenuId).attr('aria-controls', tconId);
				$(this).closest('.tmenu_wrap').find('>ul.tcon').children('li').eq(tmenuIdx).attr('id', tconId).attr('aria-labelledby', tmenuId);
			})
		}
	}
	$('div[id^="tmenu_comm"] .tmenu li').not('li.off').on('click', function() {
		thisWraptmenu = $(this).parent().parent();
		idx = $(this).index();
		if ( !$(this).hasClass('on') ) {
			$('.tmenu li', thisWraptmenu).removeClass('on');
			$(this).addClass('on');
			$('.tcon> li', thisWraptmenu).hide();
			$('.tcon> li', thisWraptmenu).eq(idx).show();
		}
	});
});

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

gsap.set(".roll_img", { zIndex: (i, target, targets) => targets.length + i });

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
	trigger: '.sec_curri',
	scroller: ".scroller",
	start: "top",
	onEnter: () => {
		$('.cube_wrap').addClass('on');
	},
	onLeaveBack: () => {
		$('.cube_wrap').removeClass('on');
	},
});

ScrollTrigger.create({
	trigger: '.study_txt01',
	scroller: ".scroller",
	start: "top",
	onEnter: () => {
		$('.study_sub_txt').removeClass('on');
		$('.study_sub_txt01').addClass('on');
	},
	onLeaveBack: () => {
		$('.study_sub_txt01').removeClass('on');
	},
});

ScrollTrigger.create({
	trigger: '.study_txt02',
	scroller: ".scroller",
	start: "top",
	onEnter: () => {
		$('.study_sub_txt').removeClass('on');
		$('.study_sub_txt02').addClass('on');
	},
	onLeaveBack: () => {
		$('.study_sub_txt02').removeClass('on');
		$('.study_sub_txt01').addClass('on');
	},
});

ScrollTrigger.create({
	trigger: '.study_txt03',
	scroller: ".scroller",
	start: "top",
	onEnter: () => {
		$('.study_sub_txt').removeClass('on');
		$('.study_sub_txt03').addClass('on');
	},
	onLeaveBack: () => {
		$('.study_sub_txt03').removeClass('on');
		$('.study_sub_txt02').addClass('on');
	},
});

ScrollTrigger.create({
	trigger: '.menopad_tit',
	scroller: ".scroller",
	start: "top",
	onEnter: () => {
		$('.sec_goods').addClass('on');
	},
	onLeaveBack: () => {
		$('.sec_goods').removeClass('on');
	},
});
