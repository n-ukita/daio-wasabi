document.addEventListener('DOMContentLoaded', function () {

	/*================
	アコーディオン
	=================*/

  let icon = document.querySelector('.c-drawer-icon');
  let bar = document.querySelector('.c-drawer-icon__bars');
  let content = document.querySelector('.c-drawer-content');
  let items = document.querySelectorAll('.p-header__link');
  let headerLogo = document.querySelector('.p-header__logo');
	let ecHeader = document.querySelector('.p-header--ec');
  let menuTL = gsap.timeline();

  icon.addEventListener('click',function(){
    //既に開いていたら閉じる
    if(content.classList.contains('is-active')){
      menuTL
      .fromTo(content,{clipPath:'inset(0% 0% 0% 0%)'},{clipPath:'inset(0% 0% 0% 100%)',duration:.3})
      .fromTo(content,{autoAlpha:1},{autoAlpha:0})
      .add(()=>{
				ecHeader.classList.remove('is-active');
        content.classList.remove('is-active');
        headerLogo.classList.remove('is-active');
        bar.classList.remove('is-active');
      },'<')
    }else{//開く
      menuTL
      .add(()=>{
        content.classList.add('is-active');
        headerLogo.classList.add('is-active');
        bar.classList.add('is-active');
				ecHeader.classList.add('is-active');
      })
      .to(content,{autoAlpha:1,clipPath:'inset(0% 0% 0% 0%)',duration:.3 })
    }
  })

	  /*================
  ヘッダーの背景色変更
  =================*/
  if(this.location.pathname === '/ec-top.html'){
    const imgHeight = document.querySelector('.p-ec-top').offsetHeight;
    const header = document.querySelector('.p-header--ec');
		const iconBox = document.querySelector('.p-header__icon-box');
		const ecList = document.querySelector('.p-header__wrapper-ec-lists');
    const triggerHeight = imgHeight - 150;


    window.addEventListener('scroll', function () {
      if (window.scrollY < imgHeight) {
        header.classList.remove('change-color');
				iconBox.classList.remove('is-active');
				ecList.classList.remove('is-active');
      } else {
        header.classList.add('change-color');
				iconBox.classList.add('is-active');
				ecList.classList.add('is-active');
      }
    });
  }

  /*================
  スクロールボタンの背景色変更
  =================*/
	const scrollBtn = document.querySelector('.c-scroll--ec');
	const footer = document.querySelector('.p-footer');

	window.addEventListener('scroll', function () {
		const footerTop = footer.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;

		// フッターが画面に表示され始める前にis-activeを削除し、表示されているときに追加
		if (footerTop <= windowHeight) {
			scrollBtn.classList.remove('is-active');
		} else {
			scrollBtn.classList.add('is-active');
		}
	});



	/*================
  各セクションのアニメーション
  =================*/

  let jsItemsUp = document.querySelectorAll('.js-float-up');
  let jsItemsDown = document.querySelectorAll('.js-float-down');
  let jsItemsLeft = document.querySelectorAll('.js-float-left');
  let jsItemsRight = document.querySelectorAll('.js-float-right');
  jsItemsUp.forEach((jsItemUp)=>{
      gsap.fromTo(jsItemUp,{autoAlpha:0,y:'3%'},{autoAlpha:1,y:'0%',duration:1,delay:.05,scrollTrigger:{
        trigger:jsItemUp,
        start:'center bottom',
    }})
  })

  jsItemsDown.forEach((jsItemDown)=>{
      gsap.fromTo(jsItemDown,{autoAlpha:0,y:'-3%'},{autoAlpha:1,y:'0%',duration:1,delay:.05,scrollTrigger:{
        trigger:jsItemDown,
        start:'center bottom',
    }})
  })

  jsItemsLeft.forEach((jsItemLeft)=>{
      gsap.fromTo(jsItemLeft,{autoAlpha:0,x:'3%'},{autoAlpha:1,x:'0%',duration:1,delay:.05,scrollTrigger:{
        trigger:jsItemLeft,
        start:'center bottom',
    }})
  })

  jsItemsRight.forEach((jsItemRight)=>{
      gsap.fromTo(jsItemRight,{autoAlpha:0,x:'-3%'},{autoAlpha:1,x:'0%',duration:1,delay:.05,scrollTrigger:{
        trigger:jsItemRight,
        start:'center bottom',
    }})
  })


  const mm = gsap.matchMedia();
  const flows = document.querySelectorAll('.js-stagger');

  flows.forEach((flow)=>{
  mm.add('(min-width:768px)',function(){
    gsap.fromTo(flow,{autoAlpha:0,y:'5%'},{autoAlpha:1,y:'0%',duration:1,stagger:.1,
      scrollTrigger:{
        //設定
        trigger:flow,
        start:'center bottom',
      }
    })
  })
  mm.add('(max-width:767px)',function(){
      gsap.fromTo(flow,{autoAlpha:0,y:'5%'},{autoAlpha:1,y:'0%',duration:1,stagger:.1,
        scrollTrigger:{
          //設定
          trigger:flow,
          start:'top bottom',
        }
      })
    })
  })


	/*================
	ボタンアクション
	=================*/
	const btns = document.querySelectorAll('.c-btn2');

	btns.forEach((btn) => {
		// 各ボタンに対応する矢印を取得
		const arrow = btn.querySelector('.c-btn2__arrow');

		btn.addEventListener('mouseover', function () {
			// ホバーしたボタンに対応する矢印だけをアニメーションさせる
			gsap.to(arrow, { '--hover-x': '100%', duration: 0.1 });
			gsap.to(arrow, { '--hover-x1': '-50%', duration: 0. });
	});

		btn.addEventListener('mouseout', function () {
			// ホバーが外れたときも同様に対応する矢印だけをアニメーションさせる
			gsap.to(arrow, { '--hover-x': '-50%', duration: 0.1 });
			gsap.to(arrow, { '--hover-x1': '-200%', duration: 0.1 });
		});
	});

	/*================
	パララックス
	=================*/

	const parallaxes = document.querySelectorAll('.js-parallax');
	const boxes = document.querySelectorAll('.p-top-about__inner');
	const mmp = gsap.matchMedia();

	parallaxes.forEach((parallax) => {

			gsap.fromTo(parallax, { yPercent: 0 }, {
				yPercent: -7, 
					scrollTrigger: {
							trigger: parallax,  // 直接parallaxをトリガーに
							start: 'top bottom',
							end: 'center top',
							scrub: 1,
							markers: false,
					}
			});

			mmp.add('(max-width:767px)', function() {
					gsap.fromTo(parallax, { yPercent: 0 }, {
						yPercent: -5, 
							scrollTrigger: {
									trigger: parallax,  // 同じくparallaxをトリガーに
									start: 'top bottom',
									end: 'top top',
									scrub: 1,
									markers: false,
							}
					});
			});
	});

		/*================
		クリック用
		=================*/

	// 全てのボタンを取得
	const buttons = document.querySelectorAll('.p-recruit__Requirements-btn');

	buttons.forEach((button) => {
			button.addEventListener('click', () => {
					// ボタンの data-index 属性から番号を取得
					const index = button.getAttribute('data-index');

					// 対応する要素を取得
					const targetBusiness = document.getElementById(`list-${index}`);

					// 対応する要素に is-switch クラスが既に付いている場合は処理を終了
					if (targetBusiness.classList.contains('is-switch')) {
							return; // 何もせずに終了
					}

					// 既存の is-switch クラスをすべての要素から削除（要素とボタン両方から削除）
					document.querySelectorAll('.is-switch').forEach(element => {
							element.classList.remove('is-switch');
					});

					// クリックされたボタンに対応する要素に is-switch クラスを追加
					targetBusiness.classList.add('is-switch');

					// クリックされたボタン自体にも is-switch クラスを追加
					button.classList.add('is-switch');
			});
	});

		/*================
		カート用
		=================*/
		document.getElementById("increment").addEventListener("click", function() {
			let quantityInput = document.getElementById("quantity");
			let currentValue = parseInt(quantityInput.value);
			quantityInput.value = currentValue + 1;
		});

		document.getElementById("decrement").addEventListener("click", function() {
			let quantityInput = document.getElementById("quantity");
			let currentValue = parseInt(quantityInput.value);
			if (currentValue > 1) { // 最低数量を1に制限
					quantityInput.value = currentValue - 1;
			}
		});

		// カートに追加するボタンのイベント（必要であれば）
		document.getElementById("add-to-cart").addEventListener("click", function() {
			let quantity = document.getElementById("quantity").value;
			alert("数量 " + quantity + " 個をカートに追加しました。");
	});

	/*================
		アイテム用クリック
		=================*/
			// 全てのボタンを取得
	const itemButtons = document.querySelectorAll('.p-ec-detail__img-list');

	itemButtons.forEach((itemButton) => {
		itemButton.addEventListener('click', () => {
			// ボタンの data-index 属性から番号を取得
			const index = itemButton.getAttribute('data-index');

			// 対応する要素を取得
			const targetItem = document.getElementById(`item-${index}`);

			// 対応する要素に is-switch クラスが既に付いている場合は処理を終了
			if (targetItem.classList.contains('is-display')) {
				return; // 何もせずに終了
			}

			// 既存の is-display クラスをすべての要素から削除
			document.querySelectorAll('.is-display').forEach(element => {
				element.classList.remove('is-display');
			});

			// クリックされたボタンに対応する要素に is-display クラスを追加
			targetItem.classList.add('is-display');
			itemButton.classList.add('is-display');
		});
	});


	/*
	const parallaxes = document.querySelectorAll('.js-parallax');
	const boxes = document.querySelectorAll('.p-top-about__inner');
	const mmp = gsap.matchMedia();

	parallaxes.forEach((parallax) => {
		boxes.forEach((box) => {

			gsap.fromTo(parallax,{y:50},{y:-50,scrollTrigger:{
				trigger:box,
				start:'top bottom',
				end:'center top',
				smooth: true,
				scrub:1,
				markers:false,
			}});
			mmp.add('(max-width:767px)',function(){
				gsap.fromTo(parallax,{y:10},{y:-10,scrollTrigger:{
					trigger:box,
					start:'top bottom',
					end:'top top',
					smooth: true,
					scrub:1,
					markers:false,
				}});
	
			});

		});
	});
	
*/
});



jQuery(function ($) {

	//モーダル記述

	$(function () {
		$('.js-open').click(function () {
			$("body").addClass("no_scroll"); // 背景固定させるクラス付与
			var id = $(this).data('id'); // 何番目のキャプション（モーダルウィンドウ）か認識
			$('#overlay, .c-modal__window[data-id="modal' + id + '"]').fadeIn();
		});
		// オーバーレイクリックでもモーダルを閉じるように
		$('.js-close').click(function () {
			$("body").removeClass("no_scroll"); // 背景固定させるクラス削除
			$('#overlay, .c-modal__window').fadeOut();
		});
	});
	
  
  // ページトップボタン
  var topBtn = $('.js-pagetop');
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

	// 商品情報のアコーディオン
	$('.p-ec-detail__list-text').hide();
$('.p-ec-detail__list-text.is-active').show();

$('.p-ec-detail__list').on('click', function() {
  // クリックした要素内のリストテキストを取得
  const $listText = $('.p-ec-detail__list-text', this);
  
  // すでに is-active クラスが付いている場合は何もしない
  if ($listText.hasClass('is-active')) {
    return;
  }

  // すべてのテキスト要素とリスト要素から is-active クラスを外してスライドアップ
  $('.p-ec-detail__list-text').removeClass('is-active').slideUp();
  $('.p-ec-detail__list').removeClass('is-active');
  
  // クリックした要素に is-active クラスを付けてスライドダウン
  $listText.addClass('is-active').slideDown();
  $(this).addClass('is-active');
});

});
