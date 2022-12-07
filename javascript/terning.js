var diceRolls = [];
var allDiceRolls = [];
var clickCount = 0;


// function der laver terningkast
function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    var diceTotal = d1 + d2;
    status.innerHTML = "DU SLOG" + " " + diceTotal
    


    // her skubber jeg resultaterne til arrays
    allDiceRolls.push(diceTotal)
    if (d1 + d2 > 9){
        diceRolls.push(diceTotal)
    }

    document.getElementById("throw").innerHTML="REPEAT"


    // Her tæller jeg hvor mange slag der er blevet taget og giver en udmeldelse hvis alle er blevet brugt og om man har vundet
    clickCount ++;
    if (clickCount == 10 && diceRolls.length < 3){
        document.getElementById("status").innerHTML="Du har brugt alle dine slag og har desværre ikke vundet, men prøv igen i morgen!";
        document.getElementById("throw").style.display = "none";
        die1.style.display = "none";
        die2.style.display = "none";
        document.getElementById("resultater").style.display = "flex";
    }else if (clickCount == 10 && diceRolls.length > 2){
        document.getElementById("status").innerHTML="SÅ FOR SATAN DER ER GEVINST, BRUG RABATKODE E94BQ FOR 20% AF ET MÅNEDS ABONNEMENT";
        document.getElementById("throw").style.display = "none";
        die1.style.display = "none";
        die2.style.display = "none";  
        document.getElementById("resultater").style.display = "flex";  
    }
}


// function der printer arrayet
function showResults(){
    for (var i = 0; i < 10; i++){
        document.getElementById("allthrows").innerHTML+= " " + allDiceRolls[i];
    }
    document.getElementById("resultater").style.display = "none";
}
















{/* <div class="container">
        <div id="die1" class="dice">0</div>
        <div id="die2" class="dice">0</div>
        <button onclick="rollDice()">Roll dice</button>
        <h2 id="status"></h2>
    </div> */}

