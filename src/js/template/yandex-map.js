// UNIVERSAL YANDEX MAP
$('.js-yandex-map').each(function (i, item) {
    var $page = $(item);
    var map;

    // находим центр карты
    var lat = parseFloat($page.attr('data-lat'));
    var lng = parseFloat($page.attr('data-lng'));

    // находим значение зума карты
    var start_zoom;
    $page.attr('data-zoom') === undefined ? start_zoom = 16 : start_zoom = parseInt($page.attr('data-zoom'));

    var coords = []

    // инициализируем яндекс карту
    $(window).on('yandex:map:ready',function () {
        ymaps.ready(function () {
            map = new ymaps.Map($('#yandex-map')[0], {
                center: [lat, lng], // задаем центр карты
                zoom: start_zoom, // задаем стартовый зум карты
                controls: ['zoomControl'], // включаем управление зумом на кнопки
                behaviors: ['drag'] // отключение скролла карты при наведении 
            });

            var placemark = new ymaps.Placemark([55.02794706, 37.40604254], {
                balloonContent: [
                    '<div class="metka">',
                    '<h2 class="metka__title">СтройБетонвоз</h2>',
                    '<div class="metka__block"> <img class="metka__img" src="assets/img/metka.jpg" /> </div>',
                    '<div class="metka__block">',
                    '<p class="metka__text">',
                    '<svg class="svg-flajok" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.8 21.4"><defs><clipPath><rect class="cls-1" width="15.8" height="21.44"/></clipPath></defs><g class="cls-2"><path class="cls-3" d="M14.8,7.9c0,5.6-6.9,12.5-6.9,12.5S1,13.5,1,7.9a6.9,6.9,0,0,1,13.8,0Z"/><path class="cls-4" d="M10.1,8A2.3,2.3,0,1,1,7.8,5.8,2.3,2.3,0,0,1,10.1,8"/></g></svg>',
                    'Серпуховский район, п. Пролетарский ул. Центральная д. 30а',
                    '</p>',
                    '<p class="metka__text">',
                    '<svg class="svg-phone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.3 21.1"><defs><clipPath id="clip-path" transform="translate(0 0)"><rect class="cls-1" width="15.3" height="21.05"/></clipPath></defs><g class="cls-2"><path class="cls-3" d="M9.1,14.9,5.5,7.1,8.6,5.6,6.5,1,3,2.6A3.4,3.4,0,0,0,1.3,7.1L6.3,18a3.4,3.4,0,0,0,4.6,1.7l3.5-1.6-2.1-4.6Z"/></g></svg>',
                    '+7 (926) 11-44-00',
                    '</p>',
                    '<p class="metka__text">',
                    '<svg class="svg-mess" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.5 15.4"><defs><clipPath><rect class="cls-1" width="20.5" height="15.35"/></clipPath></defs><g class="cls-2"><rect class="cls-3" x="1" y="1" width="18.5" height="13.35" rx="1.6" ry="1.6"/><polyline class="cls-3" points="1.9 2.1 10.4 9.6 18.6 1.9"/></g></svg>',
                    'betonvoz1@yandex.ru',
                    '</p>',
                    '</div>',
                    '</div>'
                ].join('')
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'assets/img/placemark.png',
                iconImageSize: [158, 48],
                iconImageOffset: [-79, -48],

                balloonMaxWidth: 360,
                balloonMaxHeight: 170,
                balloonOffset: [-140, 0]
            });

            map.geoObjects.add(placemark); // добавление метки\
            map.behaviors.disable('scrollZoom'); // отключение скролла колесиком
        });
    });
});