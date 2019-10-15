// jsを記述する際はここに記載していく
jQuery(function() {
  var appear = false;
  var pagetop = $("#page_top");
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate(
          {
            bottom: "30px" //下から50pxの位置に
          },
          300
        ); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate(
          {
            bottom: "-50px" //下から-50pxの位置に
          },
          300
        ); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function() {
    $("body, html").animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});

//フェードイン

$(function() {
  $(window).scroll(function() {
    $(".effect-fade").each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });
  });
});

$(".autoplay").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
});
