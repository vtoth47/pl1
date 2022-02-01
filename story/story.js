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
        content: "<div class=infowindow><h1>Home</h1><img src="https://www.cambridge.ca/en/images/structure/logo.svg" alt="Cambridge Logo"></div>"
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
        content: "<div class=infowindow><h1>Parents</h1></div>"
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
        content: "<div class=infowindow><h1>Pearson Airport</h1></div>"
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


