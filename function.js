document.addEventListener("DOMContentLoaded", function(){


    let answer1 = document.getElementById('mi');
    let answer2 = document.getElementById('tg');
    let answer3 = document.getElementById('jr');
    let answer4 = document.getElementById('rd');
    let answer5 = document.getElementById('tc');
    let answer6 = document.getElementById('ce');
    let results = document.getElementsByTagName("li");

    for(let result of results){
        result.addEventListener("click",function(){
            if(result===answer1){
                alert("answer 1 selected");
            }else if(result===answer2){
                alert("answer 2 selected");
            }else if(result===answer3){
                alert("answer 3 selected!");
            }else if(result===answer4){
                alert("answe 4 selected");
            }
    for(let resultTwo of results){
        resultTwo.addEventListener("click",function(){
            if(resultTwo===answer1){
                alert("2 answers selected!!");
            }else{
                alert("only 1 answer can be selected!");
            }
        })
    }

        })
    }

    //I can put my own declared function(answered) inside of the function for answer1 and it works perfectly!
    //answer1.addEventListener("click", function (){ answered();});
    //answer2.addEventListener("click", function (){ answeredTwo(); test();});
    //answer3.addEventListener("click", function (){ alert("you selected Jack Reacher");});
    //answer4.addEventListener("click", function (){ alert("you selected Robert Downey Jr");});
    //answer5.addEventListener("click", function (){ alert("you selected Tom Cruise");});
    //answer6.addEventListener("click", function (){ alert("you selected Chris evans");});

    //The Arraylist for the list items contains the answer the for loop is iterting through the array and printing out"<li id =tg></li>"
    //to view printout go to inspect on webpage then go to console and click on info which should display the output
    //let array = [answer1,answer2,answer3,answer4];
    //for(i=0;i<array.length;i++){
    //    console.log(array[1]);

    //}
    
    //function answered(){
    //    alert("you selected Mission Impossible");
        
    //}

    //function answeredTwo(){
   //     alert("you selected Top Gun");
    //}
    
    //function test(){
    //        alert("you selected 2 answers!");
   // }
    //Need If Statement for two list items being selected!
})