function coloringBtnSlider() {
    $('.controls__prev').on('click', ()=>{
        const itemIndex = $('.slick-active').index();
        console.log(itemIndex);
    });
    
}
module.exports = coloringBtnSlider;