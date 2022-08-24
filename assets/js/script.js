$("#search-button").click(function(event) {
    console.log("hello");
    event.preventDefault();
    var searchedCity = $("#search-bar").val()
    fetchCoords(searchedCity);
});
var fetchCoords = function(cityName) {
    $.ajax({
        method: "get",
        url: "http://api.openweathermap.org/geo/1.0/direct?q=" +
            cityName +
            "&appid=28d17285e93e297b0ba8fb4a190df02d",

