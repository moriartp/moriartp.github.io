

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
                    // color: '#ff4e00',
                    color: '#444444',
                    fillColor: '#111',
                    fillOpacity: 0.1,
                    weight: 22
                }).addTo(map);
            // .bindPopup("Mercury Orbit"); 
            

            L.circle([40.735236, -73.994507], 138, {
                    color: '#444444',
                    fillColor: '#111',
                    fillOpacity: 0.1,
                    weight: 22
                }).addTo(map);
            // .bindPopup("Venus Orbit.");  


            L.circle([40.735236, -73.994507], 184, {
                    color: '#444444',
                    fillColor: '#111',
                    fillOpacity: 0.01,
                    weight: 22
                }).addTo(map);
            // .bindPopup("Earth's Orbit.");

            L.circle([40.735236, -73.994507], 276.5, {
                    color: '#444444',
                    fillColor: '#111',
                    fillOpacity: 0.01,
                    weight: 22
                }).addTo(map);
            // .bindPopup("Martian Orbit.");  

            L.circle([40.735236, -73.994507], 943, {
                    color: '#444444',
                    fillColor: '#111',
                    fillOpacity: 0.01,
                    weight: 22
                }).addTo(map);
            // .bindPopup("Jupiter Orbit.");                                           

            L.circle([40.735236, -73.994507], 1731, {
                    color: '#444444',
                    fillColor: '#111',
                    fillOpacity: 0.01,
                    weight: 22
                }).addTo(map);
            // .bindPopup("Saturn Orbit.");  

            L.circle([40.735236, -73.994507], 3478, {
                    color: '#444444',
                    fillColor: '#111',
                    fillOpacity: 0.01,
                    weight: 22
                }).addTo(map);
            // .bindPopup("Uranus Orbit.");  

            L.circle([40.735236, -73.994507], 5431, {
                    color: '#444444',
                    fillColor: '#111',
                    fillOpacity: 0.01,
                    weight: 22
                }).addTo(map);
            // .bindPopup("Neptune Orbit.");  


            // ///////////////////////////////////////////
            // L.circle([40.735236, -73.994507], 20, {
            //         color: '#111',
            //         fillColor: '#ffff33',
            //         fillOpacity: 1,
            //         weight: 2
            //     }).addTo(map);
            // // .bindPopup("TheSun"); 


            // L.circle([40.735683, -73.993981], 20, {
            //         color: '#111',
            //         fillColor: '#ff7f00',
            //         fillOpacity: 1,
            //         weight: 2
            //     }).addTo(map);
            // // .bindPopup("Mercury Orbit"); 
            

            // L.circle([40.736253, -73.993573], 20, {
            //         color: '#111',
            //         fillColor: '#a65628',
            //         fillOpacity: 1,
            //         weight: 2
            //     }).addTo(map);
            // // .bindPopup("Venus Orbit.");  


            // L.circle([40.736607, -73.993302], 20, {
            //         color: '#111',
            //         fillColor: '#4daf4a',
            //         fillOpacity: 1,
            //         weight: 2
            //     }).addTo(map);
            // // .bindPopup("Earth's Orbit.");

            // L.circle([40.737331, -73.992749], 20, {
            //         color: '#111',
            //         fillColor: '#984ea3',
            //         fillOpacity: 1,
            //         weight: 1
            //     }).addTo(map);
            // // .bindPopup("Martian Orbit.");  

            // L.circle([40.742718, -73.989259], 20, {
            //         color: '#111',
            //         fillColor: '#377eb8',
            //         fillOpacity: 1,
            //         weight: 2
            //     }).addTo(map);
            // // .bindPopup("Jupiter Orbit.");                                           

            // L.circle([40.748784, -73.984432], 20, {
            //         color: '#111',
            //         fillColor: '#f781bf',
            //         fillOpacity: 1,
            //         weight: 2
            //     }).addTo(map);
            // // .bindPopup("Saturn Orbit.");  

            // L.circle([40.762514, -73.974451], 20, {
            //         color: '#111',
            //         fillColor: '#e41a1c',
            //         fillOpacity: 1,
            //         weight: 2
            //     }).addTo(map);
            // // .bindPopup("Uranus Orbit.");  

            // L.circle([40.777865, -73.963201], 20, {
            //         color: '#111',
            //         fillColor: '#999999',
            //         fillOpacity: 1,
            //         weight: 2
            //     }).addTo(map);
            // // .bindPopup("Neptune Orbit.");  


            // ///////////////////////////////////////////















            var planetIcon = L.Icon.extend({
                options: {
                    iconSize:     [30, 30],
                    shadowSize:   [50, 64],
                    iconAnchor:   [15, 15],
                    shadowAnchor: [4, 62],
                    popupAnchor:  [0, -15]
                }
            });

            var sunIcon = new planetIcon({iconUrl: 'icons/000sun.png'}),
                mercuryIcon = new planetIcon({iconUrl: 'icons/001mercury.png'}),
                venusIcon = new planetIcon({iconUrl: 'icons/002venus.png'}),
                earthIcon = new planetIcon({iconUrl: 'icons/003earth.png'});
                marsIcon = new planetIcon({iconUrl: 'icons/004mars.png'});
                jupiterIcon = new planetIcon({iconUrl: 'icons/005jupiter.png'});
                saturnIcon = new planetIcon({iconUrl: 'icons/006saturn.png'});
                uranusIcon = new planetIcon({iconUrl: 'icons/007uranus.png'});
                neptuneIcon = new planetIcon({iconUrl: 'icons/008neptune.png'});

            L.marker([40.735236, -73.994507], {icon: sunIcon}).addTo(map).bindPopup("<h1>the sun</h1><p>Beginning in the lobby of Parsons Shiela Johnson Design center, the wave 9 model presents a render of the sun at anthropic scale. With a diameter of 5' 6'' -- the average height of an american adult -- this unit of measure remains with the viewer as they progress through the model, taking with them as a recognizable point of reference.</p><img src='imgs/Screenshot_sun.jpg' height=300px width=550px>");
            L.marker([40.735683, -73.993981], {icon: mercuryIcon}).addTo(map).bindPopup("<h1>mercury</h1><img src='imgs/Screenshot_mercury.jpg' height=300px width=550px>");
            L.marker([40.736253, -73.993573], {icon: venusIcon}).addTo(map).bindPopup("<h1>venus</h1><img src='imgs/Screenshot_venus.jpg' height=300px width=550px>");
            // L.marker([40.736253, -73.993573], {icon: venusIcon}).addTo(map).bindPopup("<h1>venus</h1><iframe width='560' height='315' src='https://www.youtube.com/embed/RAn1te30nMY' frameborder='0' allowfullscreen></iframe>");
            L.marker([40.736607, -73.993302], {icon: earthIcon}).addTo(map).bindPopup("<h1>earth</h1></p><img src='imgs/Screenshot_earth.jpg' height=300px width=550px>");
            L.marker([40.737331, -73.992749], {icon: marsIcon}).addTo(map).bindPopup("<h1>mars<h1><img src='imgs/Screenshot_mars.jpg' height=300px width=550px>");  
            L.marker([40.742718, -73.989259], {icon: jupiterIcon}).addTo(map).bindPopup("<h1>jupiter<h1><img src='imgs/Screenshot_jupiter.jpg' height=300px width=550px>"); 
            L.marker([40.748784, -73.984432], {icon: saturnIcon}).addTo(map).bindPopup("<h1>saturn</h1><img src='imgs/Screenshot_saturn.jpg' height=300px width=550px>");  
            L.marker([40.762514, -73.974451], {icon: uranusIcon}).addTo(map).bindPopup("<h1>uranus</h1><img src='imgs/Screenshot_uranus.jpg' height=300px width=550px>"); 
            L.marker([40.777865, -73.963201], {icon: neptuneIcon}).addTo(map).bindPopup("<h1>neptune</h1><img src='imgs/Screenshot_netune.jpg' height=300px width=550px>");     