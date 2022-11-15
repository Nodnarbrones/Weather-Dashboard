// Pulling the api key from the config.js

console.log(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=33.44&appid=`);

$('#searchButton').on('click', function(){
var searchValue = $('.search').val()
console.log(searchValue)
geoCode(searchValue)

})

function geoCode(searchValue){
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=`)
.then(response => response.json())
.then(data => {
    console.log(data);
 currentWeather(data[0].lat,data[0].lon)
 forcastWeather(data[0].lat,data[0].lon)
})
}

function currentWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=&units=imperial`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var weatherCard = $('<div>').addClass('card')
        var temp = $('<h2>').addClass('currentStyle').text('temp: '+ data.current.temp)


        var humid =$('<h2>').text('Humidity: '+ data.current.humidity)





        weatherCard.append(temp,humid)
        $('.display').append(weatherCard)
    })
    }



function forcastWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=45e1caca3333f1a066f638afcae2dd2e&units=imperial`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for(var i = 0; i < data.daily.length -3;i++){
            //card can go here
            var forcastTemp = $('<p>').text('temp: '+ data.daily[i].temp.day)






           $('.forcastDisplay').append(forcastTemp) 
        }
    })
    }
    
