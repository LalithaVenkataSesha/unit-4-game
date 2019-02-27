var randomScore = 40;
var wins = 0;
var loss = 0;
var crystalClicked = false;
var crystals = ['crystalgreen', 'crystalblue', 'crystalyellow', 'crystalred'];
var totalScore = 0;
var crystalvalue = [4, 2, 1, 7];
[crystals] = [crystalvalue];

$(document).ready(function () {
    crystalClicked = true;
    $(".game-crystal").on("click", function () {
        for (var i = 0; i < crystals.length; i++) {
            if (crystalClicked === true && crystalClicked === crystals[i]) {
                $('.number').text(randomScore)
                crystalscore = crystal[i].val();
                totalScore = totalScore + crystalscore;
                console.log(totalScore);
                wins++
                $('#win').text("wins" + "" + wins)
            } else
                if (crystalClicked === true && crystalClicked === crystals[i] && totalScore > randomScore) {
                  loss++
                    $('#loss').text("loss" + " " + loss)
                }
        }
    });
});
