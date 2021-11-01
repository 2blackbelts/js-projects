$(document).ready(function() {
  $("#my-slider").lightSlider({
    item:1,
    thumbItem:9,
    slideMargin: 0,
    speed:1500,
    auto:true,
    loop:true,
    onSliderLoad: function() {
        $('#my-slider').removeClass('cS-hidden');
    }
  }); 
});