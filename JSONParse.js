 function shoes() {
     var temp = document.getElementById("temp").value;
     var footwear;
     
    switch(temp) {
        case 'Hot':
        case 'hot':
            footwear = JSON.parse('{ "type":"sandals", "cost":5.00}');
            break;
        case 'Rain':
        case 'rain':
            footwear = JSON.parse('{ "type":"galoshes", "cost":20.00}');
            break;
        case "Snow":
        case "snow":
            footwear = JSON.parse('{ "type":"boots", "cost":30.00}');
            break;
        default:
            footwear = JSON.parse('{ "type":"shoes", "cost":10.00}');
    }
     
    var report = JSON.stringify(footwear);
    document.getElementById("footwear").innerHTML = report;

}