function getPermissionFromUser() {
    navigator.permissions.query({name: "geolocation"}).then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
                navigator.geolocation.getCurrentPosition((position) => {
                    traiteLocalisation(position.coords.latitude, position.coords.longitude, position.coords.accuracy, position.coords.speed);
                }
            );
        } else {
            alert("Géolocalisation non activée. Veuillez l'activer pour bénéficier de toutes nos fonctionnalités.");
        }
    }
    );
}

function traiteLocalisation(lat, lon, acc, speed) {
    var MapsApiKey = "AIzaSyATyBBK2j7E2x7KLIZeHLPJlCHfOc3qxG4";
    let con = new XMLHttpRequest();
    var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lon+"&key="+MapsApiKey;
    con.open("GET", url);
    con.responseType = "json";
    con.send();

    con.onload = function () {
        let rsp = JSON.stringify(con.response);
        rsp = JSON.parse(rsp).results[0].address_components;
        var nr = rsp[0].short_name;
        var rue = rsp[1].short_name;
        var city = rsp[2].short_name;
        var dept = rsp[3].short_name;
        var reg = rsp[4].long_name;
        var pays = rsp[5].long_name;
        var code = rsp[6].long_name;

        let adresse_complete = nr+", "+rue+", "+code+", "+city;
        var addr_box = document.getElementById("address");
        addr_box.value = adresse_complete;
    }
}

getPermissionFromUser();