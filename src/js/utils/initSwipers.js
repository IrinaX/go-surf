import Swiper from 'swiper';

window.Swiper = Swiper;

Swiper.instances = {};


let swipers = document.getElementsByClassName('swiper-container');
for (let swiper of swipers) {
    let preset = swiper.dataset.preset;
    let options;
    switch (preset) {
        case 'poster':
            options = {
                spaceBetween: 30,
                // autoplay: {
                //     delay: 2500,
                //     disableOnInteraction: false,
                // },
                loop: false,
                navigation: {
                    nextEl: '.swiper-poster-button-next',
                    prevEl: '.swiper-poster-button-prev',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1440: {
                        slidesPerView: 4,
                    },
                }
            };
            break;
        case 'poster-timetable':
            options = {
                slidesPerView: 3,
                spaceBetween: 0,
                direction: 'vertical',
                loop: false,
            };
            let slidersTimetable = document.getElementsByClassName('slider-timetable');
            for (let s = 0; s < slidersTimetable.length; s++) {
                slidersTimetable[s].classList.add('slider-timetable-' + s);
                // console.log('ОНО РАБОТАЕТ');
                var sliderTimetable = new Swiper('.slider-timetable-' + s, {
                    slidesPerView: 3,
                    spaceBetween: 0,
                    direction: 'vertical',
                    navigation: {
                        nextEl: slidersTimetable[s].parentElement.querySelector('.swiper-timetable-button-next'),
                    },

                });
                // console.log('ВАУ');
            }
            break;
        case 'popular-activities':
            options = {
                slidesPerView: 1,
                loop: true,
                // navigation: {
                //     nextEl: nextButton,
                //     prevEl: prevButton,
                // },
                navigation: {
                    prevEl: '.swiper-popular-button-prev',
                    nextEl: '.swiper-popular-button-next',
                },
                observer: true
            };
            break;
        case 'attention':
            options = {
                slidesPerView: 1,
                loop: true,
                // autoplay: {
                //     delay: 2500,
                //     disableOnInteraction: false,
                // },
                pagination: {
                    el: '.swiper-attention-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-attention-button-next',
                    prevEl: '.swiper-attention-button-prev',
                }
            };
            break;

        case 'popular':
            options = {
                spaceBetween: 30,
                // autoplay: {
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }
                loop: true,
                navigation: {
                    nextEl: '.swiper-popular-button-next',
                    prevEl: '.swiper-popular-button-prev',
                }
            };
            break;
        case 'blog':
            options = {
                slidesPerView: 4,
                spaceBetween: 15,
                height: 533,

                // autoplay: {
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }
                // loop: true,
                navigation: {
                    nextEl: '.swiper-blog-button-next',
                },
                direction: 'vertical',
                breakpoints: {
                    0: {
                        // slidesPerView: 2,
                        // height: 553,
                    },
                    456: {
                        slidesPerView: 4,
                        height: 533,
                    },
                }
            };
            break;

        default:
            let slidesPerView = parseInt(swiper.dataset.slidesperview || 1);
            let spaceBetween = parseInt(swiper.dataset.spacebetween || 0);
            let nextButton = swiper.dataset.next;
            let prevButton = swiper.dataset.prev;
            let loop = swiper.dataset.loop !== 'false';
            let autoplay = swiper.dataset.autoplay;
            let paginationEl = swiper.dataset.paginationel;
            let paginationType = swiper.dataset.paginationtype || 'bullets';
            let direction = swiper.dataset.direction || 'horizontal';
            let name = swiper.dataset.name;
            let allowTouchMove = swiper.dataset.allowtouchmove !== 'false';
            let mousewheel = swiper.dataset.mousewheel ? {invert: false, releaseOnEdges: false} : false;
            options = {
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                slidesPerView: slidesPerView,
                spaceBetween: spaceBetween,
                allowTouchMove: allowTouchMove,
                direction: direction,
                mousewheel: mousewheel,
                loop: loop,
                ...(direction === 'vertical' ? {
                    mousewheelReleaseOnEdges: true,
                } : {}),
                ...(autoplay ? {
                    autoplay: {
                        delay: autoplay,
                        disableOnInteraction: true,
                    }
                } : {}),
                navigation: {
                    nextEl: nextButton,
                    prevEl: prevButton,
                },
                pagination: {
                    el: paginationEl,
                    type: paginationType,
                    clickable: true
                }
            };
            break;
    }

    // console.log(options);

    let sw = new Swiper(swiper, options);

    if (name) {
        Swiper.instances[name] = sw;
    }
}

for (let swiper of swipers) {
    let name = swiper.dataset.name;
    let controlSwiper = swiper.dataset.controlswiper;

    if (controlSwiper) {
        Swiper.instances[name].controller.control = Swiper.instances[controlSwiper];
    }
}