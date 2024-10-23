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

	if(this.location.pathname === '/about.html'){
		const splide8 = new Splide("#splide8",{
			type: 'loop',
			perPage: 6,
			gap:0,
			arrows: false,
			pagination: false,
			drag:true,
			autoScroll: {
				speed:0.5,
				pauseOnHover: false, // カーソルが乗ったらスクロールを停止させない
				pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない  	
			},
			cloneStatus: false, // クローン要素を作らない

			breakpoints: {
				767: {
					perPage: 4,
				},
			},
		})
		.mount( window.splide.Extensions);
	}

	if(this.location.pathname === '/sponsor.html'){
		const splide9 = new Splide("#splide9",{
      autoplay: true,
      type: "fade",
      rewind: true,
      perPage: 1,
      perMove : 1,
      pauseOnHover: false,
      pauseOnFocus: false,
      interval: 4000,
      speed: 1500,
      arrows: false,
      pagination: false,
    })
    .mount();
	}

	if(this.location.pathname === '/ec-top.html'){
		const splide10 = new Splide("#splide10",{
      autoplay: true,
      type: 'fade',
      rewind: true,
      perPage: 1,
      perMove : 1,
      pauseOnHover: false,
      pauseOnFocus: false,
      interval: 5000,
      speed: 2000,
      arrows: false,
      pagination: true,
			classes: {
        pagination: "splide__pagination p-ec-top__pagination",
        page: "splide__pagination__page p-ec-top__page",
      },
		})
		.mount();
	}

});
