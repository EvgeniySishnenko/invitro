const jquery = require("jquery");
const slick = require("./slick/slick");
const $ = require("jquery");
const jQuery = require("jquery");
window.jQuery = $;
const fancybox = require("@fancyapps/fancybox");
const fancyboxShow = require("./fancybox/fancybox");
const coloringBtnSlider = require("./common/coloringBtnSlider");
const parallax = require("./common/parallax");

if(document.querySelector('.parallax-header')) {
    parallax();
}

if(document.querySelector('.wrapper')) {
    slick();
    fancyboxShow();
}

if(document.querySelector('.section-slider')) {
    coloringBtnSlider();
}

