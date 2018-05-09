'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        document.getElementById("weather").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function getWeather(position) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsdata = JSON.parse(this.responseText);
            document.getElementById("weather-desc").innerHTML = "<p>" + jsdata.weather[0].description + "</p>";
            changeBG(jsdata.weather[0].id);
            //I don't like how unwieldy this line is, it's because I didn't plan ahead enough regarding placement or using markup
            document.getElementById("temperature").innerHTML = "<p>" + jsdata.name + ", " + jsdata.sys.country + "</p>" + "<p id ='degrees' onclick='toFar(" + jsdata.main.temp + ")'>" + jsdata.main.temp + " &#8451" + "</p>";
        }
    };
    xhttp.open("GET", "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, true);
    xhttp.send();
}

function toFar(c) {
    var f = c * 1.80 + 32.00;
    document.getElementById('degrees').innerHTML = f.toFixed(2) + "&#8457";
    document.getElementById('degrees').setAttribute('onClick', 'javascript:toCel(' + f + ');');
}

function toCel(f) {
    var c = (f - 32.00) / 1.80;
    document.getElementById('degrees').innerHTML = c.toFixed(2) + "&#8451";
    document.getElementById('degrees').setAttribute('onClick', 'javascript:toFar(' + c + ');');
}

function changeBG(id) {
    //Using externally hosted images to avoid committing images needlessly, would use local images if I were hosting this
    if (id >= 200 && id < 300) {
        document.body.style.backgroundImage = "url('http://kerryperesta.com/wp-content/uploads/2013/02/thunderstorm-11.jpg')";
    } else if (id >= 300 && id < 400) {
        document.body.style.backgroundImage = "url('http://imagebank.biz/wp-content/uploads/2013/06/Blue-Rain-Wallpaper.jpg')";
    } else if (id >= 500 && id < 600) {
        document.body.style.backgroundImage = "url('http://www.lazerhorse.org/wp-content/uploads/2015/05/rain-droplets.jpg')";
    } else if (id >= 600 && id < 700) {
        document.body.style.backgroundImage = "url('http://cdn1.theodysseyonline.com/files/2015/12/20/635861833670816810507191518_6670-perfect-snow-1920x1080-nature-wallpaper.jpg')";
    } else if (id >= 700 && id < 800) {
        document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/2/24/Southern_California_Coastal_Range_in_Mist.jpg')";
    } else if (id == 800) {
        document.body.style.backgroundImage = "url('http://www.jaden-fox.com/wp-content/uploads/2014/11/clear-blue-sky-repeat-background-1400.jpg')";
    } else if (id > 800 && id < 900) {
        document.body.style.backgroundImage = "url('http://4.bp.blogspot.com/-gJ7DJsKSBkM/TSzvfrlzaII/AAAAAAAAABM/wwTdTGvHZ4c/s1600/IMG_3477.JPG')";
    } else {
        document.body.style.backgroundImage = "url('https://news.nationalgeographic.com/content/dam/news/2015/04/11/extremeweathergallery/14extremeweather.jpg')";
    }
}

_reactDom2.default.render(_react2.default.createElement(
    'h1',
    null,
    'Hello, world.'
), document.getElementById('app'));
