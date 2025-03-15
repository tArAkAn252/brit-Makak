$(document).ready(function() {
    let controller = new ScrollMagic.Controller();

    // Робимо анімацію для кожного блоку окремо
    $('.project > div').each(function () {
        let scene = new ScrollMagic.Scene({
            triggerElement: this,  // Запускати анімацію при досягненні цього елемента
            duration: 400,  // Довжина анімації
            triggerHook: 0.9 // Анімація почнеться, коли елемент буде майже на екрані
        })
        .setClassToggle(this, 'fade-in') // Додає клас "fade-in"
        .addTo(controller);
    });
});
