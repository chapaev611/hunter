$(document).ready(function () {

    function initMask(inputs) {
        
        if (inputs.filter('input[type="tel"]').length > 0) {
            inputs.filter('input[type="tel"]').inputmask({
                mask: '+7 (999) 999-99-99',
                placeholder: ' ',
                showMaskOnHover: false,
                showMaskOnFocus: false,
            });
        }
    }
    initMask($('input[type="tel"]'));

    $('.js-letter-input').each(function () {
        $(this).on('input', function () {
            this.value = this.value.replace(/[^a-zA-Zа-яА-Я]/g, '');
        });
    });


    $('.js-form').each(function () {
        var $form = $(this);
        var $text_input = $form.find('input[type="text"],input[type="tel"]');
    
        $text_input.each(function (i, item) {
            $(item).on('input change blur', function () {
                if (item.value === '' ) {
                    $(item).removeClass('has-value');
                } else {
                    $(item).addClass('has-value');
                }
            });
        });
    });
});
