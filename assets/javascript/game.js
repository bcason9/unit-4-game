var random_result;
var randomNum = 0;
var loss = 0;
var win = 0;
var previous = 0;
var crystal;


var resetGame = function() {
    for(var i=0; i < 4; i++) {

        randomNum = Math.floor(Math.random() * 11) + 1;

        crystal = $("<div>")
        crystal.attr({
        "class": "crystal",
        "data-random": randomNum
        });
        
        $(".crystals").append(crystal)
    }

    previous = 0
    random_result = Math.floor(Math.random() * 90) + 30;
    $("#result").html("Random Result: " + random_result);

    
}

var startGame = function() {

    random_result = Math.floor(Math.random() * 90) + 30;
    $("#result").html("Random Result: " + random_result);

    for(var i=0; i < 4; i++) {

        randomNum = Math.floor(Math.random() * 11) + 1;
        //console.log(randomNum);
    
    
        crystal = $("<div>")
            crystal.attr({
                "class": "crystal",
                "data-random": randomNum
            });
        
    
        $(".crystals").append(crystal)
    }


}

window.onload = startGame();


$(document).on("click",".crystal", function() {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#score").html("Score: " + previous);

    if (previous > random_result) {
        alert("You Lost!");
        loss++
        $("#losses").html("Losses: " + loss);
        $("#score").html("Score: 0");
        $(".crystals").empty();
        resetGame();

    } else if (previous === random_result) {
        alert("You win!");
        win++
        $("#wins").html("Wins: " + win)
        $("#score").html("Score: 0");
        $(".crystals").empty();
        resetGame();
    };

    

});