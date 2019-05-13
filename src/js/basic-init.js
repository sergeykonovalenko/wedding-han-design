$(document).ready(function () {
    'use strict';

    const is_mobile = isMobile();

    if (is_mobile) {
        document.querySelector("body").classList.add('is-mobile');
    }

    let scene = document.getElementById('scene-1');
    let parallaxInstance = new Parallax(scene);

    let scene2 = document.getElementById('scene-2');
    let parallaxInstance2 = new Parallax(scene2);

    function isMobile() {
        return $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
}); // end ready
