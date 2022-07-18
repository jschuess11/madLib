function createParagraph(){
    var wordOne = document.getElementById("one").value;
    var wordTwo = document.getElementById("two").value;
    var wordThree = document.getElementById("three").value;
    var wordFour = document.getElementById("four").value;
    var wordFive = document.getElementById("five").value;
    var wordSix = document.getElementById("six").value;
    var wordSeven = document.getElementById("seven").value;
    var wordEight = document.getElementById("eight").value;
    var wordNine = document.getElementById("nine").value;
    var wordTen = document.getElementById("ten").value;
    var wordEleven = document.getElementById("eleven").value;
    var wordTwelve = document.getElementById("twelve").value;
    var wordThirteen = document.getElementById("thirteen").value;
    var wordFourteen = document.getElementById("fourteen").value;
    var wordFifteen = document.getElementById("fifteen").value;
    var wordSixteen = document.getElementById("sixteen").value;
    var wordSeventeen = document.getElementById("seventeen").value;
    var wordEighteen = document.getElementById("eighteen").value;
    var wordNineteen = document.getElementById("nineteen").value;

    var paragraph = "A vacation is when you take a trip to some " + wordOne + " place with your " + wordTwo + " family. " + "Usually you go to some place that is near a/an " + wordThree + " or up on a/an " + wordFour + " . A good vacation place is one where you can ride " + wordFive + " or play " + wordSix + " or go hunting for " + wordSeven + " . I like to spend my time " + wordEight + " or " + wordNine + " . When parents go on a vacation, they spend their time eating three " + wordTen + " a day, and fathers play golf, and mothers sit around " + wordEleven + " . Last summer, my little brother fell in a/an " + wordTwelve + " and got poison " + wordThirteen + " all over his " + wordFourteen + " . My family is going to go to (the) " + wordFifteen + " , and I will practice " + wordSixteen + " . Parents need vacations more than kids because parents are always very " + wordSeventeen + " and because they have to work " + wordEighteen + " hours every day all year making enough " + wordNineteen + " to pay for the vacation.";
    
    document.getElementById('answer').innerHTML = paragraph;}
