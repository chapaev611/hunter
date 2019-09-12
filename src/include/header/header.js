function initFixedHead($block) {
    var nav = $block;
        
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80 && $(this).innerWidth() >= 1230) nav.addClass("is-fixed");
        else nav.removeClass("is-fixed");
    });
}

initFixedHead($('.js-header'));

function initMobileMenu($block) {
    var $hamburger = $block.find('.js-hamburger');
    var $mobile_menu = $block.find('.js-mobile-menu');
    var $mobile_menu_hidden_block = $mobile_menu.find('.js-mobile-menu-hidden-block');
    var $mobile_menu_links = $mobile_menu_hidden_block.find('.js-link');

    $hamburger.on('click touched', function(e) {
        e.preventDefault();

        // открываем/закрываем меню
        if($hamburger.hasClass('is-active')) {
            $hamburger.removeClass('is-active');
            $mobile_menu_hidden_block.slideUp(350);
        }else {
            $hamburger.addClass('is-active');
            $mobile_menu_hidden_block.slideDown(350);
        }
    });

    // закрываем меню при клике на ссылку
    $mobile_menu_links.each(function() {
        $(this).on('click touched', function(e) {
            e.preventDefault();

            $hamburger.removeClass('is-active');
            $mobile_menu_hidden_block.slideUp(350);
        });
    });
}

initMobileMenu($('.js-header'));


$('.js-select2').select2({
    minimumResultsForSearch: Infinity,
    width: 'auto'
});




