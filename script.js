
var clock = 90;
var pos = 0; 
var test;
var test_status;
var question;
var choice;
var choices;
var chA;
var chB;
var chC;
var correct = 5;
var questions = [
  ["What is the correct place to insert a javascript?", "body", "head", "div", "footer", "B"],
  ["How do you create a function in javascript?", "function:NewFunction()", "function.Newfunction()", "function NewFunction()", "function = NewFunction()", "C"],
  ["How do you declare a variable in javascript?", "var New", "Var = New", "variable New", "v New", "A"],
  ["Which operator is used to assign a value to a variable?", "-", "+", "#", "=", "D"],
  ["What is the correct HTML element to place a javascript?", "script", "javascript", "js", "java", "A"]
  ];
// this get function is short for the getElementById function 
function get(x){
  return document.getElementById(x);
} 

var timer = setInterval(function() {
  if (timeLeft >= 0) {
     var secs = Math.floor((t % (1000 * 60)) / 1000);
     document.getElementsByClassName("#countdown").innerHTML = ("0"+secs).slice(-2) +
     "<span class='label'>SEC(S)</span>";
 } else {
     document.getElementById("#countdown").innerHTML = "Time up!";
 }  
}, 1000);

function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>Your score was "+clock+"!</h2>";
    get("test_status").innerHTML = "Finshed!";
    get("intials").innerHTML = "<input class= 'form-control initialsInput' type= 'text' placeholder= 'Enter your initials'>";
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  chD = questions[pos][4];
  test.innerHTML = "<h3>"+question+"</h3>";
  // write each question to the html as a button
  test.innerHTML += "<button type='button' class='btn btn-primary btn-lg choices' value='A' onclick='checkAnswer()'>"+chA+"</button><br>";
  test.innerHTML += "<button type='button' class='btn btn-primary btn-lg choices' value='B' onclick='checkAnswer()'>"+chB+"</button><br>";
  test.innerHTML += "<button type='button' class='btn btn-primary btn-lg choices' value='C' onclick='checkAnswer()'>"+chC+"</button><br>";
  test.innerHTML += "<button type='button' class='btn btn-primary btn-lg choices' value='D' onclick='checkAnswer()'>"+chD+"</button><br>";
}
function checkAnswer(){
  choices = document.getElementsByClassName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].click){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos][5]){
    //each time there is a correct answer this value increases
    correct++;
  }
  else {
    clock = clock - 10;
  }
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);