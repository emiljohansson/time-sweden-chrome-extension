!function(callback) {
    var apiCall = "https://maps.googleapis.com/maps/api/timezone/json?location=62,15&timestamp=1402629305&key="+apiKey;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(data) {
        if (xmlhttp.readyState===4 && xmlhttp.status===200) {
            callback(JSON.parse(data.target.response));
        }
    }
    xmlhttp.open("GET", apiCall, true);
    xmlhttp.send();
}(function(data) {
    var offset = (parseInt(data.dstOffset, 10) / 3600) + (parseInt(data.rawOffset, 10) / 3600);
    var date = new Date();
    var hours = date.getUTCHours() + offset;
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? "0"+minutes : minutes;
    document.getElementById("currentTime").innerHTML = hours + ":" + minutes;
});
