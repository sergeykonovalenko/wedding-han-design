function initMap() {

    let myMap;

    let element = document.getElementById('google-map');

    let locationLat = +mapLocation.lat;
    let locationLng = +mapLocation.lng;

    let options = {
        zoom: 17,
        center: {lat:locationLat, lng:locationLng},
        scrollwheel: false
    };

    // maps initialization
    myMap = new google.maps.Map(element, options);

    // marker and info-window
    let marker = new google.maps.Marker({
        position: {lat:locationLat, lng:locationLng},
        map: myMap
    });

    let InfoWindow = new google.maps.InfoWindow({
        content: '<div class="info-window"><strong>' + siteName + '</strong><p>' + siteDescription + '</p><a href="tel:' + phone + '">' + phone + '</a></div>'
    });

    marker.addListener('click', function () {
        InfoWindow.open(myMap, marker);
    });
}
