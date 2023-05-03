ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.729199, 37.574534],
                zoom: 15,
                controls: []
            }),
            baby = new ymaps.Placemark([555.729199, 37.574534], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../inhtml/baby.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),

            beauty = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../inhtml/beauty.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),

            cinema = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../inhtml/cinema.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),

            coffee = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../inhtml/coffee.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),

            label = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../inhtml/label.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),

            med = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../inhtml/med.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),

            shop = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../inhtml/shop.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),

            study = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../inhtml/study.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });
            myMap.geoObjects
                .add(baby)
                .add(beauty)
                .add(cinema)
                .add(coffee)
                .add(label)
                .add(med)
                .add(shop)
                .add(study);

            // function checkState () {
            //     var shownObjects,
            //     byAttribute = new ymaps.GeoQueryResult();

            //     if ($('#baby').prop('checked')) {
            //     // Будем искать по двум параметрам:
            //     // - для точечных объектов по полю preset;
            //     // - для контурных объектов по цвету заливки.
            //     byAttribute = myObjects.search('options.dataAttribute = "baby"')
            //         .add(myObjects.search('options.preset = "islands#baby"'));
        };