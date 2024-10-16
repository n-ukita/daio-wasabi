document.addEventListener('DOMContentLoaded', function () {

	// スライダーの設定
	if(this.location.pathname === '/eat.html'){
		const splide = new Splide("#splide1",{
			type: 'loop',
			perPage: 4,
			arrows: false,
			pagination: false,
			drag:false,
			autoScroll: {
				speed:0.5,
				pauseOnHover: false, // カーソルが乗ったらスクロールを停止させない
				pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない  	
			},

			breakpoints: {
				767: {
					perPage: 2,
				},
			},
		})
		.mount( window.splide.Extensions);
	}

	if(this.location.pathname === '/travel.html'){
		const splide2 = new Splide("#splide2",{
			type: 'loop',
			perPage: 1,
			perMove : 1,
			arrows: true,
			pagination: true,
			classes: {
        pagination: "splide__pagination p-travel__pagination",
        page: "splide__pagination__page p-travel__page",
      },
		})
		.mount();

		const splide3 = new Splide("#splide3",{
			type: 'loop',
			perPage: 1,
			perMove : 1,
			arrows: true,
			pagination: true,
			classes: {
        pagination: "splide__pagination p-travel__pagination",
        page: "splide__pagination__page p-travel__page",
      },
		})
		.mount();

		const splide4 = new Splide("#splide4",{
			type: 'loop',
			perPage: 1,
			perMove : 1,
			arrows: true,
			pagination: true,
			classes: {
        pagination: "splide__pagination p-travel__pagination",
        page: "splide__pagination__page p-travel__page",
      },
		})
		.mount();

		const splide5 = new Splide("#splide5",{
			type: 'loop',
			perPage: 1,
			perMove : 1,
			arrows: true,
			pagination: true,
			classes: {
        pagination: "splide__pagination p-travel__pagination",
        page: "splide__pagination__page p-travel__page",
      },
		})
		.mount();

		const splide6 = new Splide("#splide6",{
			type: 'loop',
			perPage: 1,
			perMove : 1,
			arrows: true,
			pagination: true,
			classes: {
        pagination: "splide__pagination p-travel__pagination",
        page: "splide__pagination__page p-travel__page",
      },
		})
		.mount();

		const splide7 = new Splide("#splide7",{
			type: 'loop',
			perPage: 1,
			perMove : 1,
			arrows: true,
			pagination: true,
			classes: {
        pagination: "splide__pagination p-travel__pagination",
        page: "splide__pagination__page p-travel__page",
      },
		})
		.mount();
	}

});
