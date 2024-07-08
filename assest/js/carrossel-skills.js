$('.carrosseul-skills').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    dots:true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><img src="./assest/img/skills/arrow-left.png" alt="para esquerda"></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style=""><img src="./assest/img/skills/arrow-right.png" alt="para direita"></button>',
    autoplay: true,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
    ]
  });