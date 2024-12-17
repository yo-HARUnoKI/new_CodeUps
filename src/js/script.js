
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
