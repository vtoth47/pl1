      function initMap() {
       const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 47.506, lng: -86.512 },
          zoom: 5,
          mapTypeId: 'hybrid',
        });
        // Create an array of numbered characters used to label the markers.
        const labels = "12345";
        
        const markers = locations.map((location, i) => {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
          });
        });

        

      }

        // list of marker locations
        const location = [
        { lat: 43.402192, lng: -80.354693},
        { lat: 43.543167, lng: -79.694334},
        { lat: 43.679481, lng: -79.625636},
        { lat: 48.569819, lng: -81.374618},
        { lat: 52.818330, lng: -83.907099},
        ];
