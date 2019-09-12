$('.js-scroll').on('click', function(e) {
    e.preventDefault();

    $('body,html').animate({ scrollTop: $('.js-anchor-object').filter('[data-anchor-object="' + $(this).attr('data-anchor') + '"]').offset().top }, 1000);

});