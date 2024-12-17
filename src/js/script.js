
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  /*-------------------------------
    ハンバーガーメニュー（js-hamburger）
    ドロワーメニュー（js-drawer）
  -------------------------------*/
  const hamburger = jQuery('.js-hamburger');
  const drawer = jQuery('.js-drawer');

  hamburger.on('click', function() {
    jQuery(this).toggleClass('is-active');
    drawer.toggleClass('is-open');
    if (jQuery(this).hasClass('is-active')) {
      jQuery('html, body').addClass('no-scroll');
    } else {
      jQuery('html, body').removeClass('no-scroll');
    }
  });
  jQuery('.drawer__link').on('click', function() {
    drawer.removeClass('is-open');
    hamburger.removeClass('is-active');
    jQuery('html, body').removeClass('no-scroll');
  });

  /*------------------------------------
    画像のアニメーション
    （information, voice, price）
  ------------------------------------*/
  let scroll;
  let windowHeight = jQuery(window).height();

  jQuery(window).on('scroll', function() {
    jQuery('.animation').each(function() {
      let target = jQuery(this);
      let imgHeight = target.outerHeight();
      let imgTop = target.offset().top;
      let imgCenter = imgTop + imgHeight / 2;

      scroll = jQuery(window).scrollTop();
      if(scroll >= imgCenter - windowHeight) {
        target.children('.animation__bg').addClass('is-show');
        target.children('.animation__img').addClass('is-show');
      }
    });
  });

  /*-------------------------------
    トップへ戻るボタン（totop）
  -------------------------------*/
  const totop = jQuery('.js-totop');
  const headerHight = jQuery('.js-header').height();

  totop.hide();
  jQuery(window).on('scroll', function() {
    if(jQuery(this).scrollTop() > headerHight) {
      totop.fadeIn();
    } else {
      totop.fadeOut();
    }
  });

});


/*-------------------------------
  スワイパー実装（fv）
-------------------------------*/
const fvSwiper = new Swiper('.fv__swiper', { //swiperの名前
  //切り替えのモーション
  speed: 1000, //表示切り替えのスピード
  effect: "fade", //切り替えのmotion (※1)
  allowTouchMove: true, // スワイプで表示の切り替えを有効に

  //最後→最初に戻るループ再生を有効に
  loop: true,
  //自動スライドについて
  autoplay: {
    delay: 3000, //何秒ごとにスライドを動かすか
    stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
    disableOnInteraction: false, //ユーザーの操作時に止める
    reverseDirection: false, //自動再生を逆向きにする
  },

   //表示について
  centeredSlides: true, //中央寄せにする
  slidesPerView: 1,
  // spaceBetween: 30,
});

/*-------------------------------
  スワイパー実装（campaign）
-------------------------------*/
const campaignSwiper = new Swiper('.campaign__swiper', { //swiperの名前
  //切り替えのモーション
  speed: 1000, //表示切り替えのスピード
  effect: "slide", //切り替えのmotion (※1)
  allowTouchMove: true, // スワイプで表示の切り替えを有効に

  //最後→最初に戻るループ再生を有効に
  loop: true,
  //自動スライドについて
  autoplay: {
    delay: 3000, //何秒ごとにスライドを動かすか
    stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
    disableOnInteraction: false, //ユーザーの操作時に止める
    reverseDirection: false, //自動再生を逆向きにする
  },

   //表示について
  centeredSlides: false, //中央寄せにする
  slidesPerView: "auto",
  spaceBetween: 24,

  //ナビゲーション
  navigation: {
    prevEl: ".swiper-button-prev", //戻るボタンのclass
    nextEl: ".swiper-button-next" //進むボタンのclass
  },
  //ブレイクポイントによって変える
  breakpoints: {
    768: {
      spaceBetween: 30,
    }
  }
});