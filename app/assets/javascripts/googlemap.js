$(document).ready(function() {
 // var mapOptions = {
 //    zoom: 8,
 //    center: new google.maps.LatLng(-34.397, 150.644),
 //    mapTypeId: google.maps.MapTypeId.ROADMAP
 //  };
 //  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      var initialize = function(){
        
        var mapCanvas = document.getElementById('map-canvas');
        
        var mapOptions = {
          center: new google.maps.LatLng(22.2670, 114.1880),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      
      google.maps.event.addDomListener(window, 'load', initialize);
});