
$(document).ready(function(){
var additionFromCrystals = 0; 
    var userWins = 0;
    var userLoses = 0;
    var randomCrystalOne = 0;
    var randomCrystalTwo = 0;
    var randomCrystalThree = 0;
    var randomCrystalFour = 0;
    var randomNumberToMatch = 0;

    //Reset values              

    function resetAll() {
        numberToMatch();
        randomGenerator();
        additionFromCrystals = 0;

        $(".score").text(additionFromCrystals);
        $(".number").text(numberToMatch);
    }

    //Generate random number to match between 19 - 120

    var numberToMatch = function(){
        randomNumberToMatch = Math.floor((Math.random() * 120) + 19); 
        
        //Place the number on the DOM
        
        $(".number").html(randomNumberToMatch);
    }

    //Generate random numbers for each crystal

    var randomGenerator = function(){
        randomCrystalOne = Math.floor((Math.random() * 12) + 1);
        randomCrystalTwo = Math.floor((Math.random() * 12) + 5);
        randomCrystalThree = Math.floor((Math.random() * 12) + 1);
        randomCrystalFour = Math.floor((Math.random() * 12) + 4);
    }

    //Adding to the score

    function addingToScore(crystalNumber){
        additionFromCrystals = additionFromCrystals + crystalNumber;
     }

    //Calling functions

    numberToMatch();
    randomGenerator();

    $(".game-crystal").on("click", function(){
        addingToScore(randomCrystalOne);
        $(".score").text(additionFromCrystals);
       checkScore(); 

    });

    $(".game-crystal").on("click", function(){
        addingToScore(randomCrystalTwo);
        $(".score").text(additionFromCrystals);
        checkScore();
    });

    $(".game-crystal").on("click", function(){
        addingToScore(randomCrystalThree);
        $(".score").text(additionFromCrystals);
        checkScore();
    });

    $(".game-crystal").on("click", function(){
        addingToScore(randomCrystalFour);
        $(".score").text(additionFromCrystals);
        checkScore();
    });
   
    var checkScore = function(){
        if (additionFromCrystals === randomNumberToMatch){
            resetAll();
            userWins++;
            $("#win").text('Wins:' + userWins);
        } else if (additionFromCrystals > randomNumberToMatch){
            resetAll();
            userLoses++;
            $("#loss").text('Loses:' + userLoses);
        }
    }    
});