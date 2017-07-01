var height = $('header').height();
//var logo = $('.logo');
var background = $('.bg-parallax');

$(window).on('scroll', function() {
    var scroll = $(this).scrollTop();

   // logo.css('transform', 'translateY(' + scroll / 0.7 + '%)');

    var backgroundSize = 120 - (20 - (height - scroll) / height * 20);
    backgroundSize = backgroundSize < 100 ? 100 : backgroundSize;
    background.css('background-size', backgroundSize + '%');
});
