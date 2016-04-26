// Weather
$(function() {
  $.ajax({
  url : "http://api.wunderground.com/api/caf3ed5a4eec9e36/conditions/astronomy/geolookup/q/autoip.json",
  dataType : "jsonp",
  success : 
    function(data) {
      var location = data.location.city;
      var temp_f = data.current_observation.temp_f;
      var icon = data.current_observation.icon_url;
      
      // Display location and temp in F on page 
      $('#location').html('Hello ' + location);
      $('#temp-degree').html(temp_f + '&deg;');
      $('#temp-icon').html('<img src="' + icon + '"></img>');
    }
  });
});
