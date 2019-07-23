function initMap() {

    let myMap;

    let element = document.getElementById('google-map');

    let options = {
        zoom: 17,
        center: {lat:52.868338, lng:-1.343672},
        scrollwheel: false
    };

    // maps initialization
    myMap = new google.maps.Map(element, options);

    // marker and info-window
    let marker = new google.maps.Marker({
        position: {lat:52.868338, lng:-1.343672},
        map: myMap
    });

    let InfoWindow = new google.maps.InfoWindow({
        content: ''+
            '<div class="info-window">' +
            '   Малиновський рынок, Р57<br>' +
            '   Магазин “Технолюкс”<br>' +
            '   Телефон: <a href="tel:+380688199506">+38 (068) 819 95 06</a>' +
            '</div>'
    });

    marker.addListener('click', function () {
        InfoWindow.open(myMap, marker);
    });
}
