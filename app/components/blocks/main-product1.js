import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  didInsertElement: function() {
    $('.c-main-products-carousel').slick({
      prevArrow: false,
      nextArrow: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.c-main-products-carousel--mini'
    });
  
    $('.c-main-products-carousel--mini').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.c-main-products-carousel',
      arrows: false,
      dots: false,
      centerMode: false,
      focusOnSelect: true
    });
  }
});
