/**
 * Created by alexast on 10.08.2022.
 */

let number = ['333', '444', '555', '666', '777', '888'];

function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    let getGeoData = 'http://www.geoplugin.net/json.gp?base_&jsoncallback=?&format=json';
    xhttp.onload = function() {
        let data = this.responseText;
        data = data.replace('%3F', '');
        data = data.replace('(', '[');
        data = data.replace(')', ']');
        data = JSON.parse(data)[0];
        let phones = document.getElementsByClassName("phone");
        let region = document.getElementById("region");
        region.innerHTML = 'Ваш город : ' + data.geoplugin_city;
        let firstThreeNumber = arrayRandElement(number);
        let lastFourNumber = data.geoplugin_latitude.split('.')[0] + '-' + data.geoplugin_longitude.split('.')[0];
        let phone = '8-800-' + firstThreeNumber + '-' + lastFourNumber;
        for (var i = 0; i < phones.length; i++) {
            phones[i].innerHTML = phone;
            phones[i].href = 'tel:+' + phone;
        }
    };
    xhttp.open("GET", getGeoData);
    xhttp.send();
}

loadDoc();
