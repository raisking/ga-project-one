


const css = [
    {cssQ1: "Which of the following defines a relative measurement for the height of a font in em spaces?"},
    {cssA1: "em"},
    {cssQ2: "Which of the following defines 1% of viewport width? hint: 'vh'"},
    {cssA2: "vh"},
    {cssQ3: "Which of the following property is used to set the width of an image border? hint'border'"},
    {cssA3: "border"},
    {cssQ4: "Which of the following value of cursor shows it as the 'I' bar? hint'move'"},
    {cssA4: "move"},
    {cssQ5: "Which of the following property is used to set the text direction? hint 'directon'"},
    {cssA4: "direction"}
]; 



// let playerScore = document.getElementById('score'); //global variable
let playerScore = $('#score'); //global variable
playerScore = parseInt('0');

//CSS
$(document).ready(function(){
    $('.hundred-1').click(function(){
    $('.hundred-1').empty();
        var cssQ1 = prompt(`${css[cssQ1]}`);
        if(cssQ1.toLowerCase() === 'em') {
            alert("correct!!!"); 
            playerScore += 100;
            document.getElementById('score').innerHTML = playerScore;  
            function play(){
                var audio = document.getElementById("audio");
                audio.play();
            }
             }
        else{
            alert("Wrong!!!");
            playerScore -= 100;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
}); 
$(document).ready(function(){
    $('.two-hundred-1').click(function(){
    $('.two-hundred-1').empty();
        var cssQ2 = prompt("Which of the following defines 1% of viewport width? hint: 'vh'");
        if(cssQ2.toLowerCase() === 'vh') {
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.three-hundred-1').click(function(){
    $('.three-hundred-1').empty();
        var cssQ3 = prompt("Which of the following property is used to set the width of an image border? hint'border'");
        if(cssQ3.toLowerCase() === 'border') {
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.four-hundred-1').click(function(){
    $('.four-hundred-1').empty();
        var cssQ4 = prompt("Which of the following value of cursor shows it as the 'I' bar? hint'move'");
        if(cssQ4.toLowerCase() === 'move') {
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.five-hundred-1').click(function(){
    $('.five-hundred-1').empty();
        var cssQ5 = prompt("Which of the following property is used to set the text direction? hint 'directon'");
        if(cssQ5.toLowerCase() === 'direction') {
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 500;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
//Javascript 
$(document).ready(function(){
    $('.hundred-2').click(function(){
    $('.hundred-2').empty();
        var jsQ1 = prompt("Which built-in method combines the text of two strings and returns a new string? hint 'concat()'");
        if(jsQ1.toLowerCase() === 'concat()') {
            alert("correct!!!"); 
            playerScore += 100;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 100;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.two-hundred-2').click(function(){
    $('.two-hundred-2').empty();
        var jsQ1 = prompt("Which of the following function of String object causes a string to be italic, as if it were in an <i> tag? hint'italics()'");
        if(jsQ1.toLowerCase() === 'italics()') {
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.three-hundred-2').click(function(){
    $('.three-hundred-2').empty();
        var jsQ1 = prompt("Which of the following function of String object extracts a section of a string and returns a new string? hint'slice()'");
        if(jsQ1.toLowerCase() === 'slice()') {
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.four-hundred-2').click(function(){
    $('.four-hundred-2').empty();
        var jsQ1 = prompt("Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag? hint'bold()'");
        if(jsQ1.toLowerCase() === 'bold()') {
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.five-hundred-2').click(function(){
    $('.five-hundred-2').empty();
        var jsQ1 = prompt("Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array? hint'push()'");
        if(jsQ1.toLowerCase() === 'push()') {
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 500;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
//Java
$(document).ready(function(){
    $('.hundred-3').click(function(){
    $('.hundred-3').empty();
        var jsQ1 = prompt("What is the size of byte variable? hint'8 bit'");
        if(jsQ1.toLowerCase() === '8 bit') {
            alert("correct!!!"); 
            playerScore += 100;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 100;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.two-hundred-3').click(function(){
    $('.two-hundred-3').empty();
        var jsQ1 = prompt("Method Overriding is an example of - hint'Dynamic Binding'");
        if(jsQ1.toLowerCase() === 'Dynamic Binding') {
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.three-hundred-3').click(function(){
    $('.three-hundred-3').empty();
        var jsQ1 = prompt("Which method must be implemented by all threads? hint 'run()'");
        if(jsQ1.toLowerCase() === 'run()') {
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.four-hundred-3').click(function(){
    $('.four-hundred-3').empty();
        var jsQ1 = prompt("What is the default value of Boolean variable? hint 'false'");
        if(jsQ1.toLowerCase() === 'false') {
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.five-hundred-3').click(function(){
    $('.five-hundred-3').empty();
        var jsQ1 = prompt("What is the default value of byte variable? hint '0'");
        if(jsQ1.toLowerCase() === '0') {
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 500;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
//PHP
$(document).ready(function(){
    $('.hundred-4').click(function(){
    $('.hundred-4').empty();
        var jsQ1 = prompt("Which of the following type of variables are floating-point numbers, like 3.14159 or 49.1? hint 'doubles'");
        if(jsQ1.toLowerCase() === 'doubles') {
            alert("correct!!!"); 
            playerScore += 100;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 100;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.two-hundred-4').click(function(){
    $('.two-hundred-4').empty();
        var jsQ1 = prompt("Which of the following array represents an array containing one or more arrays? hint 'Multidimentional Array'");
        if(jsQ1.toLowerCase() === 'Multidimentional Array') {
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.three-hundred-4').click(function(){
    $('.three-hundred-4').empty();
        var jsQ1 = prompt("Which of the following variable is used to get user's browser and operating system details in PHP? hint 'HTTP_USER_AGENT'");
        if(jsQ1.toLowerCase() === 'HTTP_USER_AGENT') {
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.four-hundred-4').click(function(){
    $('.four-hundred-4').empty();
        var jsQ1 = prompt("Which of the following method of Exception class returns array of the backtrace? hint 'getTrace()'");
        if(jsQ1.toLowerCase() === 'getTrace()') {
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.five-hundred-4').click(function(){
    $('.five-hundred-4').empty();
        var jsQ1 = prompt("Which of the following method can be used to create a MySql database using PHP? hint 'mysql_query()'");
        if(jsQ1.toLowerCase() === 'mysql_query()') {
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 500;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
//C#
$(document).ready(function(){
    $('.hundred-5').click(function(){
    $('.hundred-5').empty();
        var jsQ1 = prompt("Which of the following keyword is used for including the namespaces in the program in C#? hint'using'");
        if(jsQ1.toLowerCase() === 'using') {
            alert("correct!!!"); 
            playerScore += 100;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 100;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.two-hundred-5').click(function(){
    $('.two-hundred-5').empty();
        var jsQ1 = prompt("Which of the following converts a floating point or integer type to a decimal type in C#? hint 'ToDecimal'");
        if(jsQ1.toLowerCase() === 'ToDecimal') {
            alert("correct!!!"); 
            playerScore += 200;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 200;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.three-hundred-5').click(function(){
    $('.three-hundred-5').empty();
        var jsQ1 = prompt("Which of the following operator returns the type of a class in C#? hint'typeof'");
        if(jsQ1.toLowerCase() === 'typeof') {
            alert("correct!!!"); 
            playerScore += 300;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 300;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });
});
$(document).ready(function(){
    $('.four-hundred-5').click(function(){
    $('.four-hundred-5').empty();
        var jsQ1 = prompt("Which of the following property of Array class in C# gets a 64-bit integer, the total number of elements in all the dimensions of the Array? hint'LongLength'");
        if(jsQ1.toLowerCase() === 'LongLength') {
            alert("correct!!!"); 
            playerScore += 400;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
            alert("Wrong!!!");
            playerScore -= 400;
            document.getElementById('score').innerHTML = playerScore;
        }       
    });            
});
$(document).ready(function(){
    $('.five-hundred-5').click(function(){
    $('.five-hundred-5').empty();
        var jsQ1 = prompt("Which of the following preprocessor directive allows you to undefine a symbol in C#? hint'undef'");
        if(jsQ1.toLowerCase() === 'undef') {
            alert("correct!!!"); 
            playerScore += 500;
            document.getElementById('score').innerHTML = playerScore;  
             }
        else{
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