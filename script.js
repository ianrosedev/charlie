/*
WIP Twitter API - need oath, HTTPS...
$(function() {
  console.log("ready!");
  $.ajax({
    url: 'https://twitter.com/search?q=durham%20north%20carolina&src=typd.json?&callback=?',
	  type: 'GET',
    dataType: 'jsonp',
	  success: function(data) {
      console.log(data);
    }
  }); 
});*/

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
      $('#location').text('Hello ' + location);
      $('#temp-degree').text(temp_f);
      $('#temp-icon').html('<img src="' + icon + '"></img>');
    }
  });
});
