// Pricing table - mobile only slider
var init = false;
var pricingCardSwiper;
var pricingLoanSwiper
function swiperCard() {
  if (window.innerWidth <= 991) {
    if (!init) {
      init = true;
      pricingCardSwiper = new Swiper("#pricing-card-slider", {
        slidesPerView: "auto",
        spaceBetween: 0,
        grabCursor: true,
        keyboard: true,
        autoHeight: false,
        navigation: {
          nextEl: "#pricing-card-right",
          prevEl: "#pricing-card-left",
        },
      });
    }
  } else if (init) {
    pricingCardSwiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);