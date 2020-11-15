
const apikey = e5484895a48f875416fd40b699c60fe2;
var city = $("#search-input").val();
const query = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
