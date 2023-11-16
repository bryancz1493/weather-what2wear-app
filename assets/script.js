var searchBtn = document.querySelector("#search-btn");
var cityInput = document.querySelector("#city-input");

searchBtn.addEventListener("click", function() {

    var apiKey = "16d08849bf989c0b230cb5b5a551d5c0";
    var cityName = cityInput.value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

    fetch(url).then(response=>response.json())
    .then(response=>{
        console.log(response)
    })

})