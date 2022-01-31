function initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 47.506, lng: -86.512 },
            zoom: 5,
            mapTypeId: 'hybrid',
      });

      const marker1 = new google.maps.Marker({
        position: { lat: 43.402192, lng: -80.354693},
        map,
        label: "1",
        });
      const marker2 = new google.maps.Marker({
        position: { lat: 43.543167, lng: -79.694334},
        map,
        label: "2",
        });
      const marker3 = new google.maps.Marker({
        position: { lat: 43.679481, lng: -79.625636},
        map,
        label: "3",
        });
      const marker4 = new google.maps.Marker({
        position: { lat: 48.569819, lng: -81.374618},
        map,
        label: "4",
        }); 
      const marker5 =  new google.maps.Marker({
        position: { lat: 52.818330, lng: -83.907099},
        map,
        label: "5",
        }); 

      const contentString = 
            "<h1>Home</h1>";

      const infowindow = new google.maps.InfoWindow({
            content: contentString,
      });      

      marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
          });
      });


}


