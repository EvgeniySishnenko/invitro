const jquery = require("jquery");
const slick = require("./slick/slick");
const $ = require("jquery");
const jQuery = require("jquery");
window.jQuery = $;
const fancybox = require("@fancyapps/fancybox");
const fancyboxShow = require("./fancybox/fancybox");


if(document.querySelector('.wrapper')) {
    slick();
    fancyboxShow();
}


