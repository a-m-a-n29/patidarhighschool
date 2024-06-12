 

// Google maps pin tooltip  
    var markers = [
        {
            "lat": '44.074',
           "lng": '-118.242214',
          
           
        }
    ];
    
    
    // Google maps main api
    window.onload = function () {
        var mapOptions = {
            center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
            zoom: 13,
            flat: true,
            scrollwheel:false,
            panControl:false,
            zoomControl:true,
            streetViewControl: false,
            mapTypeControl: false,
 
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
            var infoWindow = new google.maps.InfoWindow();
            var map = new google.maps.Map(document.getElementById("google-map"), mapOptions);
            for (i = 0; i < markers.length; i++) {
            var data = markers[i]
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: 'assets/images/map.png',
            title: data.title
            });
            (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                infoWindow.setContent(data.description);
                infoWindow.open(map, marker);
              });
            })(marker, data);
        }
    };