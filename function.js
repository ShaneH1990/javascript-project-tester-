document.addEventListener("DOMContentLoaded", function(){


    let answer1 = document.getElementById('mi');
    let answer2 = document.getElementById('tg');
    let answer3 = document.getElementById('jr');
    let answer4 = document.getElementById('rd');
    let answer5 = document.getElementById('tc');
    let answer6 = document.getElementById('ce');
    //I can put my own declared function(answered) inside of the function for answer1 and it works perfectly!
    answer1.addEventListener("click", function (){ answered();});
    answer2.addEventListener("click", function (){ alert("you selected Top Gun");});
    answer3.addEventListener("click", function (){ alert("you selected Jack Reacher");});
    answer4.addEventListener("click", function (){ alert("you selected Robert Downey Jr");});
    answer5.addEventListener("click", function (){ alert("you selected Tom Cruise");});
    answer6.addEventListener("click", function (){ alert("you selected Chris evans");});

    function answered(){
        alert("you selected Mission Impossible");


    }
})