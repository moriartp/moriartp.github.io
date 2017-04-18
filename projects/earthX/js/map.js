

        var map = L.map('map').setView([40.735317, -73.994582], 13);
        mapLink = 
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>', 
            subdomains: 'abcd',
            maxZoom: 18,
            minZoom: 13,
            }).addTo(map);

            L.circle([40.735236, -73.994507], 67, {
                    color: 'yellow',
                    fillColor: '#111',
                    fillOpacity: 0.1,
                    weight: 1
                }).addTo(map);
            // .bindPopup("Mercury Orbit"); 
            

            L.circle([40.735236, -73.994507], 138, {
                    color: 'yellow',
                    fillColor: '#111',
                    fillOpacity: 0.1,
                    weight: 1
                }).addTo(map);
            // .bindPopup("Venus Orbit.");  


            L.circle([40.735236, -73.994507], 184, {
                    color: 'yellow',
                    fillColor: '#111',
                    fillOpacity: 0.01,
                    weight: 1
                }).addTo(map);
            // .bindPopup("Earth's Orbit.");

            L.circle([40.735236, -73.994507], 276.5, {
                    color: 'yellow',
                    fillColor: '#111',
                    fillOpacity: 0.01,
                    weight: 1
                }).addTo(map);
            // .bindPopup("Martian Orbit.");  

            L.circle([40.735236, -73.994507], 943, {
                    color: 'yellow',
                    fillColor: '#111',
                    fillOpacity: 0.01,
                    weight: 1
                }).addTo(map);
            // .bindPopup("Jupiter Orbit.");                                           

            L.circle([40.735236, -73.994507], 1731, {
                    color: 'yellow',
                    fillColor: '#111',
                    fillOpacity: 0.01,
                    weight: 1
                }).addTo(map);
            // .bindPopup("Saturn Orbit.");  

            L.circle([40.735236, -73.994507], 3478, {
                    color: 'yellow',
                    fillColor: '#111',
                    fillOpacity: 0.01,
                    weight: 1
                }).addTo(map);
            // .bindPopup("Uranus Orbit.");  

            L.circle([40.735236, -73.994507], 5431, {
                    color: 'yellow',
                    fillColor: '#111',
                    fillOpacity: 0.01,
                    weight: 1
                }).addTo(map);
            // .bindPopup("Neptune Orbit.");  

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

            L.marker([40.735236, -73.994507], {icon: sunIcon}).addTo(map).bindPopup("<h1>I am the sun.</h1><img src='icons/00sun.png' height='100' width='100'><img src='imgs/mockupUI-start.jpg' height='100' width='233'>");
            L.marker([40.735683, -73.993981], {icon: mercuryIcon}).addTo(map).bindPopup("I am mercury.<iframe width=98% height='315' src='https://www.youtube.com/embed/Qd4MMjOnglQ' frameborder='0' allowfullscreen></iframe>");
            L.marker([40.736253, -73.993573], {icon: venusIcon}).addTo(map).bindPopup("I am venus.<iframe width='560' height='315' src='https://www.youtube.com/embed/RAn1te30nMY' frameborder='0' allowfullscreen></iframe>");
            L.marker([40.736607, -73.993302], {icon: earthIcon}).addTo(map).bindPopup("<p>I am earth.</p><iframe width='560' height='315' src='https://www.youtube.com/embed/kGqGK54bEZg' frameborder='0' allowfullscreen></iframe>");
            L.marker([40.737331, -73.992749], {icon: marsIcon}).addTo(map).bindPopup("<p>I am mars.</p><iframe width='560' height='315' src='https://www.youtube.com/embed/w60za813B7s' frameborder='0' allowfullscreen></iframe>");  
            L.marker([40.742718, -73.989259], {icon: jupiterIcon}).addTo(map).bindPopup("<p>I am jupiter.</p><iframe width='560' height='315' src='https://www.youtube.com/embed/TONOIXTquho' frameborder='0' allowfullscreen></iframe>"); 
            L.marker([40.748784, -73.984432], {icon: saturnIcon}).addTo(map).bindPopup("I am saturn.<iframe width=560' height='315' src='https://www.youtube.com/embed/tuu7EfD145A' frameborder='0' allowfullscreen></iframe>");  
            L.marker([40.762514, -73.974451], {icon: uranusIcon}).addTo(map).bindPopup("I am uranus."); 
            L.marker([40.777865, -73.963201], {icon: neptuneIcon}).addTo(map).bindPopup("I am neptune.");     