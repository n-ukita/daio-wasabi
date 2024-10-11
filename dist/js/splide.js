document.addEventListener('DOMContentLoaded', function () {

	const splide = new Splide(".splide",{
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
});
