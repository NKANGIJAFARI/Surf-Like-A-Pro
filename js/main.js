$('.header__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    draggable: false,
    prevArrow: '<img src="img/right-arrow.svg" alt="arrow" class="slick-prev">',
    nextArrow: '<img src="img/right-arrow.svg" alt="arrow" class="slick-next">',
    asNavFor: '.slider-dots',
});
$('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    asNavFor: '.header__slider',
    draggable: false,
    focusOnSelect: true,
    
});
$('.map__dots').slick({
    slidesToShow: 8,
    slidesToScroll: 8,
    focusOnSelect: true,
    asNavFor: '.surf__slider',
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1175,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 2,
        }
      }
      ,
      {
        breakpoint: 620,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1,
        }
      }
    ]
});
$('.surf__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.map__dots',
    prevArrow: '<a class="slick-prev" aria-label="Previous" type="button"></a>',
    nextArrow: '<a class="slick-next" aria-label="Next" type="button"></a>',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
});

$('.beach-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    draggable: false,
    prevArrow: '<img src="img/right-arrow.svg" alt="arrow" class="slick-prev">',
    nextArrow: '<img src="img/right-arrow.svg" alt="arrow" class="slick-next">',
});
$('.shop-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    draggable: false,
    prevArrow: '<img src="img/right-arrow.svg" alt="arrow" class="slick-prev">',
    nextArrow: '<img src="img/right-arrow.svg" alt="arrow" class="slick-next">',
});
/* quantity */
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});

$('.quantity-button').on('click', function(){
  var parents = $(this).parents('.beach-slider__item-info');
  let sleep_price = $('.sleep-price', parents).data('nights') * $('.sleep-night', parents).val() * $('.sleep-guest', parents).val() ;
  $('.sleep-price', parents).html('$' + sleep_price);
});

$('.shop-product__sufboard-descr__circle').click(function (){
  var parent = $(this).parents('.shop-product__sufboard-descr');
  $(parent).toggleClass("active");
});
$('.nav__btn').click(function() {
    $('.nav').toggleClass('active');
});