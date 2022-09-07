console.log("JavaScript is running...");


var output = document.getElementById("out");

var tilbud = ["- Proteinpulver", "- Abonnementer", "- Hængelåse"]

function cdtd() {
    var tilbudexpire = new Date("October 01, 2022 00:00:00");
    var now = new Date();
    var timeDiff = tilbudexpire.getTime() - now.getTime();
    if (timeDiff <= 0) {
        clearTimeout(timer);
    document.write("Tilbuddet er slut!");
    }

    var seconds = Math.floor(timeDiff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("daysBox").innerHTML = days;
    document.getElementById("hoursBox").innerHTML = hours;
    document.getElementById("minsBox").innerHTML = minutes;
    document.getElementById("secsBox").innerHTML = seconds;

    var timer = setTimeout('cdtd()',1000);
    
    if (timeDiff > 0) {
        output.innerHTML(tilbudsvar [0]);
        }
}

output.innerHTML+="<h2>Du kan finde super gode tilbud på:</h2>"
for (var i = 0; i < tilbud.length; i++) {
    output.innerHTML+= "<br>" + tilbud [i];
}
