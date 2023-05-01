const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 35,
    width: 294,
    slidesOffsetBefore: 14,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        768: {
          spaceBetween: 39,
          slidesOffsetBefore: 40
        },
        1440: {
            spaceBetween: 112,
            slidesOffsetBefore: 120
          },
    }
  });