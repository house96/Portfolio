function initMap() {
  var coordinates = {lat: 50.457360, lng: 30.486160};
  // Change some styles
  var styleArray = [
      {
        featureType: 'water',
        stylers: [{color: '#00bfa5'}]
      },
      {
        featureType: 'landscape',
        elementType: 'geometry.fill',
        stylers: [{color: '#ffffff'}]
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'all',
        stylers: [{saturation: '-70'}]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [{lightness: '-15'}]
      },
      {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [{visibility: 'off'}]
       }
   ];

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 50.456265, lng: 30.513145},
		scrollwheel: false,
		zoom: 14,
		styles: styleArray,
		disableDefaultUI: true
	});
  
	var myMarker = new google.maps.Marker({
		position: coordinates,
		map: map,
		icon: 'assets/img/map_marker.svg'
	});
}