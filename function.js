document.addEventListener("DOMContentLoaded", function(){
    let answer1 = document.getElementById('mi');
    let answer2 = document.getElementById('tg');
    let answer3 = document.getElementById('jr');
    let answer4 = document.getElementById('rd');
    let answer5 = document.getElementById('tc');
    let answer6 = document.getElementById('ce');
    let answer7 = document.getElementById('ya');
    let answer8 = document.getElementById('sk');
    let answer9 = document.getElementById('hk');
    let answer10= document.getElementById('ar');
    let answer11= document.getElementById('oi');
    let answer12= document.getElementById('qn');
    let answer13= document.getElementById('onethree');
    let answer14= document.getElementById('onesix');
    let answer15= document.getElementById('oneeight');
    let answer16= document.getElementById('cb');
    let answer17= document.getElementById('ba');
    let answer18= document.getElementById('rp');


    let results = document.getElementsByTagName("li");

    let info1 = document.getElementById('p1');
    let info2 = document.getElementById('p2');
    let info3 = document.getElementById('p3');
    let info4 = document.getElementById('p4');
    let info5 = document.getElementById('p5');
    let info6 = document.getElementById('p6');

    let answer = document.getElementsByTagName("button");
    let buttonInfo = document.getElementById('btn');
    let buttonInfo2 = document.getElementById('btn2');

    buttonInfo2.style.display="none";
    info4.style.display="none";
    info5.style.display="none";
    info6.style.display="none";
    answer10.style.display = "none";
    answer11.style.display = "none";
    answer12.style.display = "none";
    answer13.style.display = "none";
    answer14.style.display = "none";
    answer15.style.display = "none";
    answer16.style.display = "none";
    answer17.style.display = "none";
    answer18.style.display = "none";

    for(let result of results){
        result.addEventListener("click",function(){
            if(result===answer1){
                alert("answer 1 selected");
                answer1.style.backgroundColor="grey";
            }else if(result===answer2){
                alert("answer 2 selected");
                answer2.style.backgroundColor="grey";
            }else if(result===answer3){
                alert("answer 3 selected!");
                answer3.style.backgroundColor="grey";
            }else if(result===answer4){
                alert("answer 4 selected");
                answer4.style.backgroundColor="grey";
            }else if(result===answer5){
                alert("answer 5 selected");
                answer5.style.backgroundColor="grey";
            }else if(result===answer6){
                alert("answer 6 selected");
                answer6.style.backgroundColor="grey";
            }else if(result===answer7){
                alert("answer 7 selected");
                answer7.style.backgroundColor="grey";
            }else if(result===answer8){
                alert("answer 8 selected");
                answer8.style.backgroundColor="grey";
            }else if(result===answer9){
                alert("answer 9 selected");
                answer9.style.backgroundColor="grey";
            }

    for(let resultTwo of results){
        resultTwo.addEventListener("click",function(){
            if(resultTwo===answer1){
                alert("2 answers selected!!");
                answer1.style.backgroundColor="white";
            }else if(resultTwo===answer2){
                answer2.style.backgroundColor="white";
            }
        })
    }

    for(let answered of answer){
        answered.addEventListener("click",function(){
            if(this.getAttribute("data-type")=== "answer"){
            buttonInfo.style.display="none";
            answer1.remove();
            answer2.remove();
            answer3.remove();
            answer4.remove();
            answer5.remove();
            answer6.remove();
            answer7.remove();
            answer8.remove();
            answer9.remove();
            info1.style.display="none";
            info2.style.display="none";
            info3.style.display="none";
            info4.style.display="block";
            info5.style.display="block";
            info6.style.display="block";
            answer10.style.display = "list-item";
            answer11.style.display = "list-item";
            answer12.style.display = "list-item";
            answer13.style.display = "list-item";
            answer14.style.display = "list-item";
            answer15.style.display = "list-item";
            answer16.style.display = "list-item";
            answer17.style.display = "list-item";
            answer18.style.display = "list-item";
            buttonInfo2.style.display="block";
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







//START OF PROJECT CODE!!!!!!!!!!!!!!!!!

/**document.addEventListener("DOMContentLoaded", function(){


    let answer1 = document.getElementById('mi');
    let answer2 = document.getElementById('tg');
    let answer3 = document.getElementById('jr');
    let answer4 = document.getElementById('rd');
    let answer5 = document.getElementById('tc');
    let answer6 = document.getElementById('ce');
    let answer7 = document.getElementById('ya');
    let answer8 = document.getElementById('sk');
    let answer9 = document.getElementById('hk');
    let results = document.getElementsByTagName("li");
    let answer = document.getElementsByTagName("button");
    //changed p1 and p2 from class to id because getElementsByClassName is READ-ONLY!
    let question = document.getElementById("p1");
    let question2 = document.getElementById("p2");
    let question3 = document.getElementById("p3");
    let paragraph = document.getElementsByTagName("p");

    for(let result of results){
        result.addEventListener("click",function(){
            if(result===answer1){
                alert("answer 1 selected");
                answer1.style.backgroundColor="grey";
            }else if(result===answer2){
                alert("answer 2 selected");
                answer2.style.backgroundColor="grey";
            }else if(result===answer3){
                alert("answer 3 selected!");
                answer3.style.backgroundColor="grey";
            }else if(result===answer4){
                alert("answer 4 selected");
                answer4.style.backgroundColor="grey";
            }
        })
    }
    for(let resultTwo of results){
        resultTwo.addEventListener("click",function(){
            if(resultTwo===answer1){
                alert("2 answers selected!!");
                answer1.style.backgroundColor="white";
            }else{
                alert("only 1 answer can be selected!");
            }
        })
    }

    for(let firstAnswer of answer){
        firstAnswer.addEventListener("click",function(){
            if(this.getAttribute("data-type")=== "answer")
            alert("are you finished?");
            let next = document.createElement("button");
                next.innerHTML="NEXT";
                next.addEventListener("click",function(){
                    alert("this button now works!");
                    question.remove();
                    question2.remove();
                    question3.remove();
                    answer1.remove();
                    answer2.remove();
                    answer3.remove();
                    answer4.remove();
                    answer5.remove();
                    answer6.remove();
                    answer7.remove();
                    answer8.remove();
                    answer9.remove();
                    next.style.display = "none";
                    let newOne = document.createElement("button");
                    newOne.innerHTML="submit";

                    let question4 = document.createElement("li");
                    question4.innerHTML= "Question 4: what is the name of the star wars character Ewan Mcgregor played?"
                    document.body.appendChild(question4);
                    document.body.appendChild(newOne);

                    if(paragraph===questions){
                        questions.remove();
                    }
                })
                document.body.appendChild(next);
                firstAnswer.style.display = "none";
        })
    }

    for(let secondAnswer of answer){
        secondAnswer.addEventListener("click",function(){
            if(this.getAttribute("data-type")=== "answer"){
                answer1.style.backgroundColor = "red";
                answer2.style.backgroundColor = "green";
                answer3.style.backgroundColor  = "red";
                
            }
        })
    }

       for(let nextOne of next){
        nextOne.addEventListener("click",function(){
                alert("you pressed next!");
                //let findIt = document.getElementsByTagName("button");
                //let question2 = document.createElement("li");
                //question2.innerHTML = "name the character cillain murphy plays in 'the Peaky Blinders' tv show";
                //document.append(question2);
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
**/