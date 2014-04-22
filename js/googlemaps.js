function GoogleMap(){
	var citymap = {};
	citymap['chicago'] = {
	  center: new google.maps.LatLng(41.878113, -87.629798),
	  population: 2842518
	};
	citymap['newyork'] = {
	  center: new google.maps.LatLng(40.714352, -74.005973),
	  population: 8143197
	};
	citymap['losangeles'] = {
	  center: new google.maps.LatLng(34.052234, -118.243684),
	  population: 3844829
	};
	var cityCircle;
 
 
	this.initialize = function(){
		var map = showMap();
	}
	 
	var showMap = function(){
		var mapOptions = {
			zoom: 3,
			center: new google.maps.LatLng(41.878113, -87.629798),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		 
		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		for (var city in citymap) {
		var populationOptions = {
		  strokeColor: '#FF0000',
		  strokeOpacity: 0.8,
		  strokeWeight: 2,
		  fillColor: '#FF0000',
		  fillOpacity: 0.35,
		  map: map,
		  center: citymap[city].center,
		  radius: citymap[city].population / 20
		};
		// Add the circle for this city to the map.
		cityCircle = new google.maps.Circle(populationOptions);
	  }
	 
		return map;
	}
}