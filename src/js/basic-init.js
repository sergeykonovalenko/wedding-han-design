$(document).ready(function () {
    'use strict';

    const is_mobile = isMobile();

    if (is_mobile) {
        document.querySelector("body").classList.add('is-mobile');
    }

    // parallax
    if (!is_mobile) {
        let decor = document.querySelectorAll('.decor');
        decor.forEach(function (decorItem) {
            let parallaxDecor = new Parallax(decorItem);
        });
    }

    // init mmenu
    if (window.innerWidth < 1530) {
        $('#js-top-nav').mmenu({
            // wrappers: ["wordpress"],
            extensions: [
                'border-full',
                'fx-menu-slide',
                'fx-listitems-slide',
                'multiline',
                'pagedim-black',
            ],
            "counters": true,
            "setSelected": {
                "hover": true
            },
            navbar: {
                title: ''
            },
            "navbars": [
                {
                    "position": "top",
                    "type": "tabs",
                    "content": [
                        "<a href='#categories'>Categories</a>",
                        "<a href='#service'>Our Service</a>"
                    ]
                },
                {
                    "position": "bottom",
                    "content": [
                        '<ul class="top-nav__social social-top-nav mm-tileview">' +
                        '    <li class="social-top-nav__item">' +
                        '        <a class="social-top-nav__link social-top-nav__link--facebook" href="' + facebook + '" title="Our Facebook group" target="_blank">' +
                        '            <span class="visually-hidden">Our Facebook group</span>' +
                        '         </a>' +
                        '     </li>' +
                        '    <li class="social-top-nav__item">' +
                        '        <a class="social-top-nav__link social-top-nav__link--instagram" href="' + instagram + '" title="Our Instagram page" target="_blank">' +
                        '            <span class="visually-hidden">Our Instagram page</span>' +
                        '        </a>' +
                        '    </li>' +
                        '</ul><!-- / .social-top-nav -->'
                    ]
                }
            ],
        });
    }

    // offer-slider
    $('.offer-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        fade: true,
        speed: 1800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    // gallery
    $('.gallery').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.gallery-side',
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 401,
                settings: {
                    dots: true,
                }
            }
        ]
    });

    // gallery-side
    $('.gallery-side').on('init', function() {
        if ( $('.gallery-side__item').length <= 5 ) {
            $('.gallery-side .slick-list').css({'overflow' : 'visible'});
        }
    });

    $('.gallery-side').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        asNavFor: '.gallery',
        pauseOnFocus: false,
        pauseOnHover: false,
        focusOnSelect: true,
        prevArrow: '<button class="gallery-side__arrow gallery-side__arrow_prev" type="button"><span class="visually-hidden">Previous</span></button>',
        nextArrow: '<button class="gallery-side__arrow gallery-side__arrow_next" type="button"><span class="visually-hidden">Next</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 277.3 512" width="16" height="30" fill="#fff"><path d="M6.3 36.4L225.8 256 6.3 475.6c-8.3 8.3-8.3 21.8 0 30.2 8.3 8.3 21.8 8.3 30.2 0l234.7-234.7c8.3-8.3 8.3-21.8 0-30.2L36.4 6.3C32.3 2.1 26.8 0 21.3 0c-5.4 0-10.9 2.1-15 6.3-8.4 8.3-8.4 21.8 0 30.1z"/></svg></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {

                }
            }
        ]
    });

    // product-slider
    $('.product-slider').slick({
        dots: false,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        focusOnSelect: true,
        prevArrow: '<button class="product-slider__arrow product-slider__arrow--prev" type="button"><span class="visually-hidden">Previous</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.1 116" width="26" height="49" fill="#b1b4ad"><path d="M55.1 1.2C55.9.4 56.9 0 58 0c1.1 0 2.1.4 2.9 1.2 1.6 1.6 1.6 4.2 0 5.8l-51 51 51 51c1.6 1.6 1.6 4.2 0 5.8-1.6 1.6-4.2 1.6-5.8 0L1.2 60.9c-1.6-1.6-1.6-4.2 0-5.8L55.1 1.2z"/></svg></button>',
        nextArrow: '<button class="product-slider__arrow product-slider__arrow--next" type="button"><span class="visually-hidden">Next</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 277.3 512" width="26" height="49" fill="#b1b4ad"><path d="M6.3 36.4L225.8 256 6.3 475.6c-8.3 8.3-8.3 21.8 0 30.2 8.3 8.3 21.8 8.3 30.2 0l234.7-234.7c8.3-8.3 8.3-21.8 0-30.2L36.4 6.3C32.3 2.1 26.8 0 21.3 0c-5.4 0-10.9 2.1-15 6.3-8.4 8.3-8.4 21.8 0 30.1z"/></svg></button>',
        responsive: [
            {
                breakpoint: 1330,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // setting the same height for slides
    $('.product-slider').on('setPosition', function () {
        $(this).find('.slick-slide').height('auto');

        let slickTrackHeight = $(this).find('.slick-track').height();

        $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
    });

    // masked input
    $('input[type="tel"]').mask('+44 (0) 99-9999-99-99');

    // nice number
    $('input[type="number"]').niceNumber({
        autoSize: false,
        buttonDecrement: '–',
        buttonIncrement: "+",
        buttonPosition: 'right'
    });

    /*
    * Substitution of the name and quantity of the product in the form fields
    */
    $('.product-card__button').on('click', function () {
        let productName = $('.product-card__title--desktop').text() || '';
        let quantity = $(this).closest('.product-card__actions-box').find('.quantity').val();

        $('.js-product-name').val(productName);
        $('.js-quantity').val(quantity);
    });

    // install and remove focus
    let modalOrder = $('.modal-order');

    modalOrder.on('hidden.bs.modal', function (e) {
        setTimeout(function () {
            $('.product-card__button').blur();
        }, 10);
    });

    modalOrder.on('shown.bs.modal', function () {
        $('#order-name').focus();
    });

    // change the number of entries per page
    let params = window
        .location
        .search
        .replace('?','')
        .split('&')
        .reduce(
            function(p,e) {
                let a = e.split('=');
                p[ decodeURIComponent( a[0] ) ] = decodeURIComponent( a[1] );
                return p;
            },
            {}
        );

    $('#page-size option').each(function() {
        let val = $(this).val();
        if ( params['posts'] == val ) { $(this).attr('selected','selected'); }
    });

    $('#page-size').on('change',function(){
        let loc = location.href;
        loc = loc.split('?');
        loc = loc[0].replace(/page\/\d\//, '');
        let p = 0;
        let per;
        if (p == 1) { per = '#page-size'; } else { per = ''; }
        location.href = loc + '?posts=' + $(this).val() + per;
    });

    ////////////////////////////////////////////////////////////////////////////
    // FORM PROCESSING

    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    });

    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            let re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your details"
    );

    function valEl(el) {
        let validator = el.validate({
            rules:{
                name:{
                    required:true
                },
                email:{
                    required:true
                },
                phone:{
                    required:true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                }
            },
            messages:{
                name:{
                    required:'Required field'
                },
                email:{
                    required:'Required field',
                    email:'Wrong email format'
                },
                phone:{
                    required:'Required field',
                    regex:'Wrong phone format'
                }
            },
            submitHandler: function (form) {
                $('.modal-order').modal('hide');
                $('.loader').fadeIn();

                $.ajax({
                    url: templateUrl + '/tpl-sys-request.php',
                    type: 'POST',
                    data: new FormData(form),
                    processData: false,
                    contentType: false,
                })
                    .always(function (response) {
                        setTimeout(function () {
                            $('.loader').fadeOut();
                        },800);
                        setTimeout(function () {
                            $('.modal-thanks').modal('show');
                            $( '.order__field' ).val('');
                        },1100);
                    });

                return false;
            }
        });
    }

    $('.js-form').each(function() {
        valEl( $(this) );
    });

    ////////////////////////////////////////////////////////////////////////////

    function isMobile() {
        return $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

}); // end ready
