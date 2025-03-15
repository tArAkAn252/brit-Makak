$(document).ready(function() {
    let controller = new ScrollMagic.Controller();

    $('.project > div').each(function () {
        let scene = new ScrollMagic.Scene({
            triggerElement: this,  
            duration: 600,  // Довша анімація (замість 400)
            triggerHook: 0.6 // Почне анімацію раніше, коли 75% блоку буде на екрані
        })
        .setClassToggle(this, 'fade-in')
        .addTo(controller);
    });
});
