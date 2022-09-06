var diceRolls = [];



// function der laver terningkast og skubber resultat til array
function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "DU SLOG" + " " + diceTotal + "."
    var result = d1 + d2;

    if (d1 + d2 > 9){
        diceRolls.push(result)
        document.getElementById("dingding").innerHTML = " ";
    }else
        document.getElementById("dingding").innerHTML = "Prøv igen!";
}



// function der printer arrayet
function showResults(){
    for (var i = 0; i < 5; i++){
        document.getElementById("resultat").innerHTML+= "<br>" + diceRolls[i];
    }
}

// alert der siger om man har vundet hvis der er mere end 2 ting i arrayet
function winner(){
    if (diceRolls.length > 2)
        alert("DU VANDT FANDME!!!");
    else
        alert("kom igen, prøv igen i morgen");
}



// Her tæller jeg hvor mange slag der er blevet taget og giver en udmeldelse hvis alle er blevet brugt
var clickCount = 0;
function clickAmount(){
    clickCount ++;
    if (clickCount > 30){
        alert("du har sgu brugt alle dine slag!")
    };
}









{/* <div class="container">
        <div id="die1" class="dice">0</div>
        <div id="die2" class="dice">0</div>
        <button onclick="rollDice()">Roll dice</button>
        <h2 id="status"></h2>
    </div> */}
