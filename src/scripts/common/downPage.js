function downPage () {
    $('.checkup__mouse').on('click', (e) => {
        
        e.preventDefault();
        const target = getCurrentZone(e.target);
        const attr = $(target).attr('data-id');
        const elem = $('#'+attr);
       
        if($(elem).length != 0) {

            $('body,html').animate({ scrollTop: $(elem).offset().top }, 500); 
        }
    });
    function getCurrentZone(from) {
        do {
            if (from.classList.contains('checkup__mouse')) {
                return from;
            }
        } while (from = from.parentElement);
    }
    
}
module.exports = downPage;