$(document).ready(function(){
    if($('.gb_animate').length) {
        $('.gb_animate').viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 200
        });
        $('.to-top').viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            offset: 100
        });
    }
});