`use strict`;

const sliders = document.querySelectorAll('.swiper-container');


function mobileSlider() {
    if (window.innerWidth <= 768 && sliders[0].dataset.mobile === 'false') {

        sliders.forEach((el) => {

             new Swiper(el, {
                slidesPerView: 'auto',
                spaceBetween: 16,
                loop: true,

                pagination: {
                    el: el.querySelector('.swiper-pagination'),
                    type: 'bullets',
                },
            });
        });

        sliders[0].dataset.mobile = 'true';
    }
    if (window.innerWidth >= 768) {
        sliders[0].dataset.mobile = "false";

        if (sliders[0].classList.contains('swiper-container-initialized')) {

            sliders.forEach( (el) => {
                el.swiper.destroy();
            });
        }
    }
}

mobileSlider();
window.addEventListener('resize', () => {
    mobileSlider();
});


