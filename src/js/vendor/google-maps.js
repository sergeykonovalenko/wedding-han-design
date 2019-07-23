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
        content: '<div class="info-window"><strong>Wedding HanDesign</strong><p>Wedding accessories for wedding planning</p><a href="tel:08000850585">0800 085 0585</a></div>'
    });

    marker.addListener('click', function () {
        InfoWindow.open(myMap, marker);
    });
}
