        var map = L.map('map').setView([40.735317, -73.994582], 13);
        mapLink = 
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>', 
            subdomains: 'abcd',
            maxZoom: 21,
            }).addTo(map);


            L.circle([40.735236, -73.994507], 67, {
                    color: '#DDD',
                    fillColor: '#111',
                    fillOpacity: 0.01
                }).addTo(map).bindPopup("Mercury Orbit");  

            L.circle([40.735236, -73.994507], 138, {
                    color: '#DDD',
                    fillColor: '#111',
                    fillOpacity: 0.01
                }).addTo(map).bindPopup("Venus Orbit.");  


            L.circle([40.735236, -73.994507], 184, {
                    color: '#DDD',
                    fillColor: '#111',
                    fillOpacity: 0.01
                }).addTo(map).bindPopup("Earth's Orbit.");

            L.circle([40.735236, -73.994507], 276.5, {
                    color: '#DDD',
                    fillColor: '#111',
                    fillOpacity: 0.01
                }).addTo(map).bindPopup("Martian Orbit.");  

            L.circle([40.735236, -73.994507], 943, {
                    color: '#DDD',
                    fillColor: '#111',
                    fillOpacity: 0.01
                }).addTo(map).bindPopup("Jupiter Orbit.");                                           

            L.circle([40.735236, -73.994507], 1666, {
                    color: 'coral',
                    fillColor: '#111',
                    fillOpacity: 0.01
                }).addTo(map).bindPopup("Saturn Orbit.");  

            L.circle([40.735236, -73.994507], 3333, {
                    color: 'coral',
                    fillColor: '#111',
                    fillOpacity: 0.01
                }).addTo(map).bindPopup("Uranus Orbit.");  

            L.circle([40.735236, -73.994507], 5333, {
                    color: 'coral',
                    fillColor: '#111',
                    fillOpacity: 0.01
                }).addTo(map).bindPopup("Neptune Orbit.");  

            // var earthOrbit = L.circle([40.735236, -73.994507], {
            //     color: 'blue',
            //     fillColor: 'blue',
            //     fillOpacity: 0.9,
            //     radius: 50
            // }).addTo(map);

            var planetIcon = L.Icon.extend({
                options: {
                    iconSize:     [30, 30],
                    shadowSize:   [50, 64],
                    iconAnchor:   [15, 15],
                    shadowAnchor: [4, 62],
                    popupAnchor:  [0, -15]
                }
            });

            var sunIcon = new planetIcon({iconUrl: 'icons/00sun.png'}),
                mercuryIcon = new planetIcon({iconUrl: 'icons/01mercury.png'}),
                venusIcon = new planetIcon({iconUrl: 'icons/02venus.gif'}),
                earthIcon = new planetIcon({iconUrl: 'icons/03earth.png'});
                marsIcon = new planetIcon({iconUrl: 'icons/04mars.png'});
                jupiterIcon = new planetIcon({iconUrl: 'icons/05jupiter.png'});
                saturnIcon = new planetIcon({iconUrl: 'icons/06saturn.png'});
                uranusIcon = new planetIcon({iconUrl: 'icons/07uranus.png'});
                neptuneIcon = new planetIcon({iconUrl: 'icons/08neptune_.png'});

            L.marker([40.735236, -73.994507], {icon: sunIcon}).addTo(map).bindPopup("<h1>I am the sun.</h1><img src='icons/00sun.png' height='100' width='100'>");
            L.marker([40.735683, -73.993981], {icon: mercuryIcon}).addTo(map).bindPopup("I am mercury.");
            L.marker([40.736253, -73.993573], {icon: venusIcon}).addTo(map).bindPopup("I am venus.");
            L.marker([40.736607, -73.993302], {icon: earthIcon}).addTo(map).bindPopup("I am earth.");
            L.marker([40.737331, -73.992749], {icon: marsIcon}).addTo(map).bindPopup("I am mars.");  
            L.marker([40.742718, -73.989259], {icon: jupiterIcon}).addTo(map).bindPopup("I am jupiter."); 
            L.marker([40.748784, -73.984432], {icon: saturnIcon}).addTo(map).bindPopup("I am saturn.");  
            L.marker([40.762514, -73.974451], {icon: uranusIcon}).addTo(map).bindPopup("I am uranus."); 
            L.marker([40.777865, -73.963201], {icon: neptuneIcon}).addTo(map).bindPopup("I am neptune.");     