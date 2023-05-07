ymaps.ready(function () {
        var myMap = new ymaps.Map("map", {
            center: [55.729199, 37.574534],
            zoom: 15,
            controls: []
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        baby = new ymaps.Placemark([55.729399, 37.576834], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'inhtml/baby.svg',
            iconImageSize: [46, 46]
        }),

        baby1 = new ymaps.Placemark([55.731699, 37.577834], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'inhtml/baby.svg',
            iconImageSize: [46, 46]
        }),

        baby2 = new ymaps.Placemark([55.732399, 37.583634], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'inhtml/baby.svg',
            iconImageSize: [46, 46]
        }),

        beauty = new ymaps.Placemark([55.727499, 37.566734], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'inhtml/beauty.svg',
            iconImageSize: [46, 46]
        }),

        cinema = new ymaps.Placemark([55.728999, 37.564334], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'inhtml/cinema.svg',
            iconImageSize: [46, 46]
        }),

        coffee = new ymaps.Placemark([55.731599, 37.562934], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'inhtml/coffee.svg',
            iconImageSize: [46, 46]
        }),

        coffee1 = new ymaps.Placemark([55.729799, 37.580634], {
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'inhtml/coffee.svg',
                iconImageSize: [46, 46]
            }),

            coffee2 = new ymaps.Placemark([55.725399, 37.581834], {
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'inhtml/coffee.svg',
                    iconImageSize: [46, 46]
                }),

        label = new ymaps.Placemark(myMap.getCenter(), {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'inhtml/label.svg',
            iconImageSize: [46, 46]
        }),

        med = new ymaps.Placemark([55.724699, 37.576834], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'inhtml/med.svg',
            iconImageSize: [46, 46]
        }),

        med1 = new ymaps.Placemark([55.730299, 37.574434], {
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'inhtml/med.svg',
                iconImageSize: [46, 46],
        }),

        shop = new ymaps.Placemark([55.730199, 37.560934], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'inhtml/shop.svg',
            iconImageSize: [46, 46]
        }),

        shop1 = new ymaps.Placemark([55.731199, 37.570534], {
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'inhtml/shop.svg',
                iconImageSize: [46, 46]
            }),

        shop2 = new ymaps.Placemark([55.732399, 37.575334], {
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'inhtml/shop.svg',
                iconImageSize: [46, 46]
            }),

        shop3 = new ymaps.Placemark([55.726399, 37.585634], {
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'inhtml/shop.svg',
                iconImageSize: [46, 46]
            }),

        study = new ymaps.Placemark([55.728399, 37.560434], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'inhtml/study.svg',
            iconImageSize: [46, 46]
        }),

        study1 = new ymaps.Placemark([55.727299, 37.590134], {
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'inhtml/study.svg',
                iconImageSize: [46, 46]
            });
        myMap.geoObjects
            .add(baby)
            .add(baby1)
            .add(baby2)
            .add(beauty)
            .add(cinema)
            .add(coffee)
            .add(coffee1)
            .add(coffee2)
            .add(label)
            .add(med)
            .add(med1)
            .add(shop)
            .add(shop1)
            .add(shop2)
            .add(shop3)
            .add(study)
            .add(study1);

        // function checkState () {
        //     var shownObjects,
        //     byAttribute = new ymaps.GeoQueryResult();

        //     if ($('#baby').prop('checked')) {
        //     // Будем искать по двум параметрам:
        //     // - для точечных объектов по полю preset;
        //     // - для контурных объектов по цвету заливки.
        //     byAttribute = myObjects.search('options.dataAttribute = "baby"')
        //         .add(myObjects.search('options.preset = "islands#baby"'));
    });