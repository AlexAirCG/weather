
fetch('https://api.openweathermap.org/data/2.5/weather?id=491422&appid=d7c85e66cbeb7e01b3db057bf35d6d2b')
    .then(function (respSochi) { return respSochi.json() }) // convert data to json
    .then(function (dataSochi) {
        console.log(dataSochi);

        document.querySelector('.weather__city_sochi').innerHTML = dataSochi.name;
        document.querySelector('.weather__degrees_sochi').innerHTML = Math.round(dataSochi.main.temp - 273) + '&deg;';
        // document.querySelector('.weather__discr').innerHTML = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/10d@2x.png
        document.querySelector('.weather__icon_sochi').innerHTML = `<img src="https://openweathermap.org/img/wn/${dataSochi.weather[0]['icon']}@2x.png">`

    })


fetch('https://api.openweathermap.org/data/2.5/weather?id=524894&appid=d7c85e66cbeb7e01b3db057bf35d6d2b')
    .then(function (respMoscow) { return respMoscow.json() }) // convert data to json
    .then(function (dataMoscow) {
        console.log(dataMoscow);

        document.querySelector('.weather__city_moscow').innerHTML = dataMoscow.name;
        document.querySelector('.weather__degrees_moscow').innerHTML = Math.round(dataMoscow.main.temp - 273) + '&deg;';
        // document.querySelector('.weather__discr').innerHTML = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/10d@2x.png
        document.querySelector('.weather__icon_moscow').innerHTML = `<img src="https://openweathermap.org/img/wn/${dataMoscow.weather[0]['icon']}@2x.png">`

    })


fetch('https://api.openweathermap.org/data/2.5/weather?id=1510853&appid=d7c85e66cbeb7e01b3db057bf35d6d2b')
    .then(function (respBarnayl) { return respBarnayl.json() }) // convert data to json
    .then(function (dataBarnayl) {
        console.log(dataBarnayl);

        document.querySelector('.weather__city_barnayl').innerHTML = dataBarnayl.name;
        document.querySelector('.weather__degrees_barnayl').innerHTML = Math.round(dataBarnayl.main.temp - 273) + '&deg;';
        // document.querySelector('.weather__discr').innerHTML = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/10d@2x.png
        document.querySelector('.weather__icon_barnayl').innerHTML = `<img src="https://openweathermap.org/img/wn/${dataBarnayl.weather[0]['icon']}@2x.png">`

    })


