

let css = {
            Q1: "Which of the following defines a relative measurement for the height of a font in em spaces? hint'em'",
            A1: "em",  
            Q2: "Which of the following defines 1% of viewport width? hint: 'vh'",
            A2: "vh",
            Q3: "Which of the following property is used to set the width of anmage border? hint'border'",
            A3: "border",
            Q4: "Which of the following value of cursor shows it as the 'I' bar? hint'move'",
            A4: "move",
            Q5: "Which of the following property is used to set the text direction? hint 'direction'",
            A5: "direction"
         }
let js = { 
            Q1: "Which built-in method combines the text of two strings and returns a new string? hint 'concat()'",
            A1: "concat()",
            Q2: "Which of the following function of String object causes a string to be italic, as if it were in an <i> tag? hint'italics()'",
            A2: "italics()",
            Q3: "Which of the following function of String object extracts a section of a string and returns a new string? hint'slice()'",
            A3: "slice()",
            Q4: "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag? hint'bold()'",
            A4: "bold()",
            Q5: "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array? hint'push()'",
            A5: "push()"
}
let java ={
            Q1: "What is the size of byte variable? hint'8 bit'",
            A1: "8 bit",
            Q2: "Method Overriding is an example of - hint'Dynamic Binding'",
            A2: "Dynamic Binding",
            Q3: "Which method must be implemented by all threads? hint 'run()'",
            A3: "run()",
            Q4: "What is the default value of Boolean variable? hint 'false'",
            A4: "false",
            Q5: "What is the default value of byte variable? hint '0'",
            A5: "0"   
}
let php ={
            Q1: "Which of the following type of variables are floating-point numbers, like 3.14159 or 49.1? hint 'doubles'",
            A1: "doubles",
            Q2: "Which of the following array represents an array containing one or more arrays? hint 'Multidimentional Array'",
            A2: "Multidimentional Array",
            Q3: "Which of the following variable is used to get user's browser and operating system details in PHP? hint 'HTTP_USER_AGENT'",
            A3: "HTTP_USER_AGENT",
            Q4: "Which of the following method of Exception class returns array of the backtrace? hint 'getTrace()'",
            A4: "getTrace()",
            Q5: "Which of the following method can be used to create a MySql database using PHP? hint 'mysql_query()'",
            A5: "mysql_query()"
}
let c ={
            Q1: "Which of the following keyword is used for including the namespaces in the program in C#? hint'using'",
            A1: "using",
            Q2: "Which of the following converts a floating point or integer type to a decimal type in C#? hint 'ToDecimal'",
            A2: "ToDecimal",
            Q3: "Which of the following operator returns the type of a class in C#? hint'typeof'",
            A3: "typeof",
            Q4: "Which of the following property of Array class in C# gets a 64-bit integer, the total number of elements in all the dimensions of the Array? hint'LongLength'",
            A4: "LongLength",
            Q5: "Which of the following preprocessor directive allows you to undefine a symbol in C#? hint'undef'",
            A5: "undef"
}
let playerScore = document.getElementById('score'); //global variable
// let playerScore = $('#score'); //global variable
playerScore = parseInt('0');
let musicStart = new Audio();
musicStart.src = "sound/house_party.mp3";
let makeNoise = new Audio();
makeNoise.src = "sound/bell.mp3"; //global 
let failNoise = new Audio(); // wrong alert
failNoise.src = "sound/alert-game-lost.mp3";
let winNoise = new Audio(); //correct alert
winNoise.src = "sound/alert-game-win.mp3";
/*----------------------CSS---------------------------------------------*/
$(document).ready(function(){
    makeNoise.play();
    musicStart.play();
    $('.hundred-1').dblclick(function(){
        //();
    $('.hundred-1').empty();
    // $('.hundred-1').detach();
    // this.disabled = true;    
        while(!cssQ1){
            var cssQ1 = prompt(css.Q1);
            if(cssQ1 === null || cssQ1 === false || cssQ1 === ""){
                cssQ1 = prompt("You forgot to enter your answer.");
            } 
            if(cssQ1.toLowerCase() === css.A1) {
                winNoise.play();
                alert("correct!!!"); 
                playerScore += 100;
                document.getElementById('score').innerHTML = playerScore;      
            // function play(){
            //     var audio = document.getElementById("audio");
            //     audio.play();
            // }
            }                
            else{
                failNoise.play();
                alert("Wrong!!!");
                playerScore -= 100;
                document.getElementById('score').innerHTML = playerScore;
        }   
     }    
    });   
}); 

$(document).ready(function(){
    $('.two-hundred-1').dblclick(function(){
        //();
    $('.two-hundred-1').empty();
        while(!cssQ2){
        var cssQ2 = prompt(css.Q2);
        if(cssQ2 === null || cssQ2 === false || cssQ2 === ""){
            cssQ2 = prompt("You forget to enter your answer.");
            }
        if(cssQ2.toLowerCase() === css.A2) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
         }  
        }     
    });
});
$(document).ready(function(){
    $('.three-hundred-1').dblclick(function(){
        //()
    $('.three-hundred-1').empty();
        while(!cssQ3){
        var cssQ3 = prompt(css.Q3);
        if(cssQ3 === null || cssQ3 === false || cssQ3 === ""){
            cssQ3 = prompt("You forget to enter your answer.");            
            }
        if(cssQ3.toLowerCase() === css.A3) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
         } 
        }      
    });
});
$(document).ready(function(){
    $('.four-hundred-1').dblclick(function(){
        //();
    $('.four-hundred-1').empty();
        while(!cssQ4){
        var cssQ4 = prompt(css.Q4);
        if(cssQ4 === null || cssQ4 === false || cssQ4 === ""){
            cssQ4 = prompt("You forget to enter your answer.");            
        }
        if(cssQ4.toLowerCase() === css.A4) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
            }  
        }     
    });
});
$(document).ready(function(){
    $('.five-hundred-1').dblclick(function(){
        //();
    $('.five-hundred-1').empty();
        while(!cssQ5){
        var cssQ5 = prompt(css.Q5);
        if (cssQ5 === null || cssQ5 === false || cssQ5 === ""){
            cssQ5 = prompt("You forget to enter your answer.");            
        }
        if(cssQ5.toLowerCase() === css.A5) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 500;
            document.getElementById('score').innerHTML = playerScore;
            }   
        }    
    });
});
/*----------------------JavaScript---------------------------------------------*/
$(document).ready(function(){
    $('.hundred-2').dblclick(function(){
        //();
    $('.hundred-2').empty();
        while(!jsQ1){
        var jsQ1 = prompt(js.Q1);
        if(jsQ1 === null || jsQ1 === false || jsQ1 === ""){
            jsQ1 = prompt("You forget to enter your answer.");     
        }
        if(jsQ1.toLowerCase() === js.A1) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 100;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 100;
            document.getElementById('score').innerHTML = playerScore;
        }  
    }     
    });
});
$(document).ready(function(){
    $('.two-hundred-2').dblclick(function(){
        //();
    $('.two-hundred-2').empty();
        while(!jsQ2){
        var jsQ2 = prompt(js.Q2);
        if (jsQ2 === null || jsQ2 === false || jsQ2 === ""){
            jsQ2 = prompt("You forget to enter your answer.");     
        }
        if(jsQ2.toLowerCase() === js.A2) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
        } 
    }      
    });
});
$(document).ready(function(){
    $('.three-hundred-2').dblclick(function(){
        //();
    $('.three-hundred-2').empty();
        while(!jsQ3){
        var jsQ3 = prompt(js.Q3);
        if(jsQ3 === null || jsQ3 === false || jsQ3 === ""){
            jsQ3 = prompt("You forget to enter your answer."); 
        }
        if(jsQ3.toLowerCase() === js.A3) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
        }       
    }
    });
});
$(document).ready(function(){
    $('.four-hundred-2').dblclick(function(){
        //();
    $('.four-hundred-2').empty();
    while (!jsQ4){
        var jsQ4 = prompt(js.Q4);
        if(jsQ4 === null || jsQ4 === false || jsQ4 === ""){
            jsQ4 = prompt("You forget to enter your answer."); 
        }
        if(jsQ4.toLowerCase() === js.A4) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
        }       
    }
    });
});
$(document).ready(function(){
    $('.five-hundred-2').dblclick(function(){
        //();
    $('.five-hundred-2').empty();
    while (!jsQ5){
        var jsQ5 = prompt(js.Q5);
        if (jsQ5 === null || jsQ5 === false || jsQ5 === ""){
            jsQ5 = prompt("You forget to enter your answer."); 
        }
        if(jsQ5.toLowerCase() === js.A5) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 500;
            document.getElementById('score').innerHTML = playerScore;
        }       
    }
    });
}); 
/*----------------------Java---------------------------------------------*/
$(document).ready(function(){
    $('.hundred-3').dblclick(function(){
        //();
    $('.hundred-3').empty();
    while(!jvQ1){
        var jvQ1 = prompt(java.Q1);
        if(jvQ1 === null || jvQ1 === false || jvQ1 === ""){
            jvQ1 = prompt("You forget to enter your answer."); 
        }
        if(jvQ1.toLowerCase() === java.A1) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 100;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 100;
            document.getElementById('score').innerHTML = playerScore;
        }   
    }    
    });
});
$(document).ready(function(){
    $('.two-hundred-3').dblclick(function(){
        //();
    $('.two-hundred-3').empty();
    while(!jvQ2){
        var jvQ2 = prompt(java.Q2);
        if(jvQ2 === null || jvQ2 === false || jvQ2 === ""){
            jvQ2 = prompt("You forget to enter your answer."); 
        }
        if(jvQ2.toLowerCase() === java.A2) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
        }
    }       
    });
});
$(document).ready(function(){
    $('.three-hundred-3').dblclick(function(){
        //();
    $('.three-hundred-3').empty();
    while(!jvQ3){
        var jvQ3 = prompt(java.Q3);
        if (jvQ3 === null || jvQ3 === false || jvQ3 === ""){
            jvQ3 = prompt("You forget to enter your answer."); 
        }
        if(jvQ3.toLowerCase() === java.A3) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
        }       
    }
    });
});
$(document).ready(function(){
    $('.four-hundred-3').dblclick(function(){
        //();
    $('.four-hundred-3').empty();
        while(!jvQ4){
        var jvQ4 = prompt(java.Q4);
        if (jvQ4 === null || jvQ4 === false || jvQ4 === ""){
            jvQ4 = prompt("You forget to enter your answer."); 
        }
        if(jvQ4.toLowerCase() === java.A4) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
        } 
    }      
    });
});
$(document).ready(function(){
    $('.five-hundred-3').dblclick(function(){
        //();
    $('.five-hundred-3').empty();
    while(!jvQ5){
        var jvQ5 = prompt(java.Q5);
        if (jvQ5 === null || jvQ5 === false || jvQ5 === ""){
            jvQ5 = prompt("You forget to enter your answer."); 
        }
        if(jvQ5.toLowerCase() === java.A5) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 500;
            document.getElementById('score').innerHTML = playerScore;
        }     
    }  
    });
});
/*----------------------PHP---------------------------------------------*/
$(document).ready(function(){
    $('.hundred-4').dblclick(function(){
        //();
    $('.hundred-4').empty();
        while(!ppQ1){
        var ppQ1 = prompt(php.Q1);
        if (ppQ1 === null || ppQ1 === false || ppQ1 === ""){
            ppQ1 = prompt("You forget to enter your answer."); 
        }
        if(ppQ1.toLowerCase() === php.A1) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 100;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 100;
            document.getElementById('score').innerHTML = playerScore;
        }  
    }     
    });
});
$(document).ready(function(){
    $('.two-hundred-4').dblclick(function(){
        //();
    $('.two-hundred-4').empty();
    while(!ppQ2){
        var ppQ2 = prompt(php.Q2);
        if (ppQ2 === null || ppQ2 === false || ppQ2 === ""){
            ppQ2 = prompt("You forget to enter your answer."); 
        }
        if(ppQ2.toLowerCase() === php.A2) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
        }   
    }    
    });
});
$(document).ready(function(){
    $('.three-hundred-4').dblclick(function(){
        //();
    $('.three-hundred-4').empty();
    while(!ppQ3){
        var ppQ3 = prompt(php.Q3);
        if (ppQ3 === null || ppQ3 === false || ppQ3 === ""){
            ppQ3 = prompt("You forget to enter your answer."); 
        }
        if(ppQ3.toLowerCase() === php.A3) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
        }
    }       
    });
});
$(document).ready(function(){
    $('.four-hundred-4').dblclick(function(){
        //();
    $('.four-hundred-4').empty();
    while(!ppQ4){
        var ppQ4 = prompt(php.Q4);
        if (ppQ4 === null || ppQ4 === false || ppQ4 === ""){
            ppQ4 = prompt("You forget to enter your answer."); 
        }
        if(ppQ4.toLowerCase() === php.A4) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
        } 
    }      
    });
});
$(document).ready(function(){
    $('.five-hundred-4').dblclick(function(){
        //();
    $('.five-hundred-4').empty();
    while(!ppQ5){
        var ppQ5 = prompt(php.Q5);
        if (ppQ5 === null || ppQ5 === false || ppQ5 === ""){
            ppQ5 = prompt("You forget to enter your answer."); 
        }
        if(ppQ5.toLowerCase() === php.A5) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 500;
            document.getElementById('score').innerHTML = playerScore;
        } 
    }
    });
});
/*----------------------C#---------------------------------------------*/
$(document).ready(function(){
    $('.hundred-5').dblclick(function(){
        //();
    $('.hundred-5').empty();
    while(!cQ1){
        var cQ1 = prompt(c.Q1);
        if (cQ1 === null || cQ1 === false || cQ1 === ""){
            cQ1 = prompt("You forget to enter your answer."); 
        }
        if(cQ1.toLowerCase() === c.A1) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 100;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 100;
            document.getElementById('score').innerHTML = playerScore;
        }
    }       
    });
});
$(document).ready(function(){
    $('.two-hundred-5').dblclick(function(){
        //();
    $('.two-hundred-5').empty();
    while(!cQ2){
        var cQ2 = prompt(c.Q2);
        if (cQ2 === null || cQ2 === false || cQ2 === ""){
            cQ2 = prompt("You forget to enter your answer."); 
        }
        if(cQ2.toLowerCase() === c.A1) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
        }       
    }
    });
});
$(document).ready(function(){
    $('.three-hundred-5').dblclick(function(){
        //();
    $('.three-hundred-5').empty();
    while(!cQ3){
        var cQ3 = prompt(c.Q3);
        if (cQ3 === null || cQ3 === false || cQ3 === ""){
            cQ3 = prompt("You forget to enter your answer."); 
        }
        if(cQ3.toLowerCase() === c.A1) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
        }  
    }     
    });
});
$(document).ready(function(){
    $('.four-hundred-5').dblclick(function(){
        //();
    $('.four-hundred-5').empty();
    while(!cQ4){
        var cQ4 = prompt(c.Q4);
        if (cQ4 === null || cQ4 === false || cQ4 === ""){
            cQ4 = prompt("You forget to enter your answer."); 
        }
        if(cQ4.toLowerCase() === c.A4) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
        } 
    }      
    });            
});
$(document).ready(function(){
    $('.five-hundred-5').dblclick(function(){
        //();
    $('.five-hundred-5').empty();
    while(!cQ5)
        var cQ5 = prompt(c.Q5);
        if (cQ5 === null || cQ5 === false || cQ5 === ""){
            cQ5 = prompt("You forget to enter your answer."); 
        }
        if(cQ5.toLowerCase() === c.A5) {
            winNoise.play();
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            failNoise.play();   
            alert("Wrong!!!");
            playerScore -= 500;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
// window.onload = function(){
//     let user = prompt("Please enter your name");
//     if(user != null){
//         document.getElementById('playerName').innerHTML = user + " Score:";
//     } else if( user = null){
//         alert("You forget to enter your name")
//     }
// };