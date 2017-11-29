document.write('<script type="text/javascript" src="js/appOne.js"></script>');
//this start soon as page is loaded
$(document).ready(function(){   
    setTimeout(function(){
        while(!user){
        var user = prompt("Please enter your name");   
            if(user === null || user === false){
                user = prompt("You must enter your name");   
            }
        if(user === user){
            // alert(user.toUpperCase() + "! Welcome to the Jeopardy Game");    
            alert(user.toUpperCase() + "\n\nGENERAL RULES AND CONSIDERATIONS \n1) A maximum of three teams can play in each game.\n2) There is a maximum of four players per team.\n3) Points are deducted for incorrect responses.\n4) Teams with negative scores will not be allowed to participate in Final Jeopardy. \n5) The championship game that determines the regional winner consists of Jeopardy, Double Jeopardy and Final Jeopardy rounds.\n6) Preliminary games (i.e., those used to determine the teams that will compete in the championship game) consist of Jeopardy and Final Jeopardy rounds.\n\nGAME BOARD \n1) Jeopardy and Double Jeopardy should each consist of six categories with five clues each. \n2) Final Jeopardy consists of one clue. \n3) The point totals vary from 100 to 500 points (multiples of 100) and from 200 to 1000 (multiples) ");      
            document.getElementById('playerName').innerHTML = user.toUpperCase() + " Score : ".toUpperCase();
        } 
    }
    //    PopUp();
    },3000); // Dialog pop up after 3500     page load
 });

let playerScore = document.getElementById('score'); //global variable
// let playerScore = $('#score'); //global variable
playerScore = parseInt('0');

let numRight = document.getElementById('countCorrect');
numRight = parseInt('0');
let numWrong = document.getElementById('countWrong');
numWrong = parseInt('0');

let musicStart = new Audio();
musicStart.src = "sound/house_party.mp3";
let makeNoise = new Audio();
makeNoise.src = "sound/bell.mp3"; //global 
let failNoise = new Audio(); // wrong alert
failNoise.src = "sound/alert-game-lost.mp3";
let winNoise = new Audio(); //correct alert
winNoise.src = "sound/alert-game-win.mp3";
/*
To do 
- disable the div/button after every click 
- fix userName pop up -fixed 
- Add counter correct and wrong 
*/
/*
check the score.
if the score is added, add 1 to number of correct counter
if the score is minus, add 1 to number of wrong counter 
*/

// $('.col-sm-2').click(function(){      
//           if (numWrong > 3){
//                 $('.col-sm-2').css('visibility', 'hidden');  
//                 // alert("lkafdka");
//             }
// })

/*----------------------CSS---------------------------------------------*/
$(document).ready(function(){
    makeNoise.play();
    // musicStart.play();
    $('.hundred-1').click(function(){
        //();
    $('.hundred-1').empty();
    // $('.hundred-1').detach();
    // this.disabled = true;    
        while(!cssQ1){
            var cssQ1 = prompt(csss.Q1);
            if(cssQ1 === null || cssQ1 === false || cssQ1 === ""){
                cssQ1 = prompt("You forgot to enter your answer.");
            } 
            if(cssQ1.toLowerCase() === csss.A1) {
                winNoise.play();
                alert("correct!!!"); 
                playerScore += 100;
                document.getElementById('score').innerHTML = playerScore;  
                $(this).css('visibility', 'hidden');  
                numRight += 1;
                document.getElementById('countCorrect').innerHTML = numRight;
            }                     
            else{
                failNoise.play();
                alert("Wrong!!!");
                playerScore -= 100;
                document.getElementById('score').innerHTML = playerScore;
                $(this).css('visibility', 'hidden'); 
                numWrong += 1;
                document.getElementById('countWrong').innerHTML = numWrong;
                
                
        }   
     }      
    });   
}); 

$(document).ready(function(){
    $('.two-hundred-1').click(function(){
        //();
    $('.two-hundred-1').empty();
        while(!cssQ2){
        var cssQ2 = prompt(csss.Q2);
        if(cssQ2 === null || cssQ2 === false || cssQ2 === ""){
            cssQ2 = prompt("You must enter your answer.");
            }
        if(cssQ2.toLowerCase() === csss.A2) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore; 
            $(this).css('visibility', 'hidden');  
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;      
         }  
        }     
    });
});
$(document).ready(function(){
    $('.three-hundred-1').click(function(){
        //()
    $('.three-hundred-1').empty();
        while(!cssQ3){
        var cssQ3 = prompt(csss.Q3);
        if(cssQ3 === null || cssQ3 === false || cssQ3 === ""){
            cssQ3 = prompt("You must enter your answer.");            
            }
        if(cssQ3.toLowerCase() === csss.A3) {
            winNoise.play();    
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
         } 
        }      
    });
});
$(document).ready(function(){
    $('.four-hundred-1').click(function(){
        //();
    $('.four-hundred-1').empty();
        while(!cssQ4){
        var cssQ4 = prompt(csss.Q4);
        if(cssQ4 === null || cssQ4 === false || cssQ4 === ""){
            cssQ4 = prompt("You must enter your answer.");            
        }
        if(cssQ4.toLowerCase() === csss.A4) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore; 
            $(this).css('visibility', 'hidden');
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
          
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
            }  
        }     
    });
});
$(document).ready(function(){
    $('.five-hundred-1').click(function(){
        //();
    $('.five-hundred-1').empty();
        while(!cssQ5){
        var cssQ5 = prompt(csss.Q5);
        if (cssQ5 === null || cssQ5 === false || cssQ5 === ""){
            cssQ5 = prompt("You must enter your answer.");            
        }
        if(cssQ5.toLowerCase() === csss.A5) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 500;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
            }   
        }    
    });
});
/*----------------------JavaScript---------------------------------------------*/
$(document).ready(function(){
    $('.hundred-2').click(function(){
        //();
    $('.hundred-2').empty();
        while(!jsQ1){
        var jsQ1 = prompt(js.Q1);
        if(jsQ1 === null || jsQ1 === false || jsQ1 === ""){
            jsQ1 = prompt("You must enter your answer.");     
        }
        if(jsQ1.toLowerCase() === js.A1) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 100;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 100;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }  
    }     
    });
});
$(document).ready(function(){
    $('.two-hundred-2').click(function(){
        //();
    $('.two-hundred-2').empty();
        while(!jsQ2){
        var jsQ2 = prompt(js.Q2);
        if (jsQ2 === null || jsQ2 === false || jsQ2 === ""){
            jsQ2 = prompt("You must enter your answer.");     
        }
        if(jsQ2.toLowerCase() === js.A2) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        } 
    }      
    });
});
$(document).ready(function(){
    $('.three-hundred-2').click(function(){
        //();
    $('.three-hundred-2').empty();
        while(!jsQ3){
        var jsQ3 = prompt(js.Q3);
        if(jsQ3 === null || jsQ3 === false || jsQ3 === ""){
            jsQ3 = prompt("You must enter your answer."); 
        }
        if(jsQ3.toLowerCase() === js.A3) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }       
    }
    });
});
$(document).ready(function(){
    $('.four-hundred-2').click(function(){
        //();
    $('.four-hundred-2').empty();
    while (!jsQ4){
        var jsQ4 = prompt(js.Q4);
        if(jsQ4 === null || jsQ4 === false || jsQ4 === ""){
            jsQ4 = prompt("You must enter your answer."); 
        }
        if(jsQ4.toLowerCase() === js.A4) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }       
    }
    });
});
$(document).ready(function(){
    $('.five-hundred-2').click(function(){
        //();
    $('.five-hundred-2').empty();
    while (!jsQ5){
        var jsQ5 = prompt(js.Q5);
        if (jsQ5 === null || jsQ5 === false || jsQ5 === ""){
            jsQ5 = prompt("You must enter your answer."); 
        }
        if(jsQ5.toLowerCase() === js.A5) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 500;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }       
    }
    });
}); 
/*----------------------Java---------------------------------------------*/
$(document).ready(function(){
    $('.hundred-3').click(function(){
        //();
    $('.hundred-3').empty();
    while(!jvQ1){
        var jvQ1 = prompt(java.Q1);
        if(jvQ1 === null || jvQ1 === false || jvQ1 === ""){
            jvQ1 = prompt("You must enter your answer."); 
        }
        if(jvQ1.toLowerCase() === java.A1) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 100;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 100;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }   
    }    
    });
});
$(document).ready(function(){
    $('.two-hundred-3').click(function(){
        //();
    $('.two-hundred-3').empty();
    while(!jvQ2){
        var jvQ2 = prompt(java.Q2);
        if(jvQ2 === null || jvQ2 === false || jvQ2 === ""){
            jvQ2 = prompt("You must enter your answer."); 
        }
        if(jvQ2.toLowerCase() === java.A2) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore; 
            $(this).css('visibility', 'hidden');  
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }
    }       
    });
});
$(document).ready(function(){
    $('.three-hundred-3').click(function(){
        //();
    $('.three-hundred-3').empty();
    while(!jvQ3){
        var jvQ3 = prompt(java.Q3);
        if (jvQ3 === null || jvQ3 === false || jvQ3 === ""){
            jvQ3 = prompt("You must enter your answer."); 
        }
        if(jvQ3.toLowerCase() === java.A3) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }       
    }
    });
});
$(document).ready(function(){
    $('.four-hundred-3').click(function(){
        //();
    $('.four-hundred-3').empty();
        while(!jvQ4){
        var jvQ4 = prompt(java.Q4);
        if (jvQ4 === null || jvQ4 === false || jvQ4 === ""){
            jvQ4 = prompt("You must enter your answer."); 
        }
        if(jvQ4.toLowerCase() === java.A4) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        } 
    }      
    });
});
$(document).ready(function(){
    $('.five-hundred-3').click(function(){
        //();
    $('.five-hundred-3').empty();
    while(!jvQ5){
        var jvQ5 = prompt(java.Q5);
        if (jvQ5 === null || jvQ5 === false || jvQ5 === ""){
            jvQ5 = prompt("You must enter your answer."); 
        }
        if(jvQ5.toLowerCase() === java.A5) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 500;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }     
    }  
    });
});
/*----------------------PHP---------------------------------------------*/
$(document).ready(function(){
    $('.hundred-4').click(function(){
        //();
    $('.hundred-4').empty();
        while(!ppQ1){
        var ppQ1 = prompt(php.Q1);
        if (ppQ1 === null || ppQ1 === false || ppQ1 === ""){
            ppQ1 = prompt("You must enter your answer."); 
        }
        if(ppQ1.toLowerCase() === php.A1) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 100;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 100;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }  
    }     
    });
});
$(document).ready(function(){
    $('.two-hundred-4').click(function(){
        //();
    $('.two-hundred-4').empty();
    while(!ppQ2){
        var ppQ2 = prompt(php.Q2);
        if (ppQ2 === null || ppQ2 === false || ppQ2 === ""){
            ppQ2 = prompt("You must enter your answer."); 
        }
        if(ppQ2.toLowerCase() === php.A2) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden');
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }   
    }    
    });
});
$(document).ready(function(){
    $('.three-hundred-4').click(function(){
        //();
    $('.three-hundred-4').empty();
    while(!ppQ3){
        var ppQ3 = prompt(php.Q3);
        if (ppQ3 === null || ppQ3 === false || ppQ3 === ""){
            ppQ3 = prompt("You must enter your answer."); 
        }
        if(ppQ3.toLowerCase() === php.A3) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }
    }       
    });
});
$(document).ready(function(){
    $('.four-hundred-4').click(function(){
        //();
    $('.four-hundred-4').empty();
    while(!ppQ4){
        var ppQ4 = prompt(php.Q4);
        if (ppQ4 === null || ppQ4 === false || ppQ4 === ""){
            ppQ4 = prompt("You must enter your answer."); 
        }
        if(ppQ4.toLowerCase() === php.A4) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        } 
    }      
    });
});
$(document).ready(function(){
    $('.five-hundred-4').click(function(){
        //();
    $('.five-hundred-4').empty();
    while(!ppQ5){
        var ppQ5 = prompt(php.Q5);
        if (ppQ5 === null || ppQ5 === false || ppQ5 === ""){
            ppQ5 = prompt("You must enter your answer."); 
        }
        if(ppQ5.toLowerCase() === php.A5) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 500;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        } 
    }
    });
});
/*----------------------C#---------------------------------------------*/
$(document).ready(function(){
    $('.hundred-5').click(function(){
        //();
    $('.hundred-5').empty();
    while(!cQ1){
        var cQ1 = prompt(c.Q1);
        if (cQ1 === null || cQ1 === false || cQ1 === ""){
            cQ1 = prompt("You must enter your answer."); 
        }
        if(cQ1.toLowerCase() === c.A1) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 100;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 100;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }
    }       
    });
});
$(document).ready(function(){
    $('.two-hundred-5').click(function(){
        //();
    $('.two-hundred-5').empty();
    while(!cQ2){
        var cQ2 = prompt(c.Q2);
        if (cQ2 === null || cQ2 === false || cQ2 === ""){
            cQ2 = prompt("You must enter your answer."); 
        }
        if(cQ2.toLowerCase() === c.A1) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }       
    }
    });
});
$(document).ready(function(){
    $('.three-hundred-5').click(function(){
        //();
    $('.three-hundred-5').empty();
    while(!cQ3){
        var cQ3 = prompt(c.Q3);
        if (cQ3 === null || cQ3 === false || cQ3 === ""){
            cQ3 = prompt("You must enter your answer."); 
        }
        if(cQ3.toLowerCase() === c.A1) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }  
    }     
    });
});
$(document).ready(function(){
    $('.four-hundred-5').click(function(){
        //();
    $('.four-hundred-5').empty();
    while(!cQ4){
        var cQ4 = prompt(c.Q4);
        if (cQ4 === null || cQ4 === false || cQ4 === ""){
            cQ4 = prompt("You must enter your answer."); 
        }
        if(cQ4.toLowerCase() === c.A4) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
            
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        } 
    }      
    });            
});
$(document).ready(function(){
    $('.five-hundred-5').click(function(){
        //();
    $('.five-hundred-5').empty();
    while(!cQ5)
        var cQ5 = prompt(c.Q5);
        if (cQ5 === null || cQ5 === false || cQ5 === ""){
            cQ5 = prompt("You must enter your answer."); 
        }
        if(cQ5.toLowerCase() === c.A5) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
            $(this).css('visibility', 'hidden'); 
            numRight += 1;
            document.getElementById('countCorrect').innerHTML = numRight;
        
             }
        else{
            failNoise.play();   
            alert("Wrong!!!");
            playerScore -= 500;
            document.getElementById('score').innerHTML = playerScore;
            $(this).css('visibility', 'hidden'); 
            numWrong += 1;
            document.getElementById('countWrong').innerHTML = numWrong;
            
        }       
    });
});

/*
 - keep track of cash win
 - if cash win is more than 2000
 - if cash lose is more than 1000
 - then close / disable the game
 - else keep playing
*/
    /*
    When score is add , add +1 correct 
    when score is minus, add =1 wrong
    */
  
    $('#rules').click(function(){
        alert("GENERAL RULES AND CONSIDERATIONS \n1) A maximum of three teams can play in each game.\n2) There is a maximum of four players per team.\n3) Points are deducted for incorrect responses.");
    })
