// import './utils/initSwipers';
import Swiper from 'swiper';
import 'swiper/js/swiper.min'
import 'bootstrap.native/dist/bootstrap-native-v4';
import '@fortawesome/fontawesome-free/js/all.min';

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
        swiper: sliderDots,
    }
});
var serfSlider = new Swiper('.serf-slider',{
    spaceBetween: -40,
    slidesPerView: 4,
    navigation: {
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',/////////////////////////////////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        nextEl: '.serf-slider__btn-next',
        prevEl: '.serf-slider__btn-prev',
    },
});