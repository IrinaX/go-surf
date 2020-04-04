// import './utils/initSwipers';
import Swiper from 'swiper';
import 'swiper/js/swiper.min'
import 'bootstrap.native/dist/bootstrap-native-v4';


var sliderDots = new Swiper('.slider-dots', {
    spaceBetween: 40,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var headerSlider = new Swiper('.header-slider', {
    speed: 600,
    parallax: true,
    navigation: {
        nextEl: '.header-slider__btn-next',
        prevEl: '.header-slider__btn-prev',
    },
    thumbs: {
        swiper: sliderDots
    }
});