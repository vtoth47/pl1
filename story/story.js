// Info window code template from: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple-max#:~:text=%2F%2F%20The%20maximum%20width%20of,is%20set%20to%20200%20pixels.

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 47.506, lng: -86.512 },
          zoom: 5,
          mapTypeId: 'hybrid',
    });

// marker 1
    var marker1 = new google.maps.Marker({
      position: { lat: 43.402192, lng: -80.354693},
      map,
      label: "1",
      });
    var infowindow1 = new google.maps.InfoWindow({
        content: "<h2>Home</h2><p>This is where I call home.</p><img src='https://www.cambridge.ca/en/images/structure/logo.svg' alt='Cambridge Logo'>"
    });  
    google.maps.event.addListener(marker1, 'click', function() {
        infowindow1.open(map,marker1);
    });

// marker 2 
    var marker2 = new google.maps.Marker({
      position: { lat: 43.543167, lng: -79.694334},
      map,
      label: "2",
      });
    var infowindow2 = new google.maps.InfoWindow({
        content: "<h2>Parents</h2><p>My former home, and also where I would drop off my dog for the 2 weeks I was away at work</p>"
    });  
    google.maps.event.addListener(marker2, 'click', function() {
        infowindow2.open(map,marker2);
    }); 

// marker 3     
    var marker3 = new google.maps.Marker({
      position: { lat: 43.679481, lng: -79.625636},
      map,
      label: "3",
      });
    var infowindow3 = new google.maps.InfoWindow({
        content: "<h2>Pearson Airport</h2><p>I would typically catch the 8:45AM flight from YYZ to YTS aboard an Air Canada Dash 8.</p><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Air_Canada_Express_De_Havilland_Canada_DHC-8-301_Dash_8_C-GKTA_2_%288027593421%29.jpg/640px-Air_Canada_Express_De_Havilland_Canada_DHC-8-301_Dash_8_C-GKTA_2_%288027593421%29.jpg' alt='Dash8'>"
    });  
    google.maps.event.addListener(marker3, 'click', function() {
        infowindow3.open(map,marker3);
    });

// marker 4
    var marker4 = new google.maps.Marker({
      position: { lat: 48.569819, lng: -81.374618},
      map,
      label: "4",
      }); 
    var infowindow4 = new google.maps.InfoWindow({
        content: "<div class=infowindow><h1>Timmins Airport</h1></div>"
    });  
    google.maps.event.addListener(marker4, 'click', function() {
        infowindow4.open(map,marker4);
    });  

// marker 5 
    var marker5 =  new google.maps.Marker({
      position: { lat: 52.818330, lng: -83.907099},
      map,
      label: "5",
      }); 
    var infowindow5 = new google.maps.InfoWindow({
        content: "<div class=infowindow><h1>The Mine</h1></div>"
    });  
    google.maps.event.addListener(marker5, 'click', function() {
        infowindow5.open(map,marker5);
    });  
   





}


