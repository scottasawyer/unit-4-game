var targetNumber = " ";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ['./assets/images/Crystal1.png', './assets/images/Crystal2.png', './assets/images/Crystal3.png', './assets/images/Crystal4.png'];



function randomTargetNumber() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
}

function resetCrystals() {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal", "col s3");
        crystal.addClass("col s3");
        crystal.attr("src", images[i]);
        crystal.attr("height", "300");
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        $(".cards").append(crystal);
    }
}

function resetHTML() {
    $(".target-number").html(targetNumber);
    $(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
    $(".score-number").html(counter);
    $(".cards").empty();
}



function totalReset() {
    randomTargetNumber();
    counter = 0;
    resetHTML();
    resetCrystals();
}


randomTargetNumber();
resetHTML();
resetCrystals();


function crystalClick() {
    counter += parseInt($(this).attr("value"));
    $(".score-number").html(counter);
    if (counter == targetNumber) {
        wins++;
        totalReset();
    } else if (counter > targetNumber) {
        losses++;
        totalReset();
    };
};


$(document).on("click", ".crystal", crystalClick);