// random value generated
  var y = Math.floor(Math.random() * 10 + 1);
  var guess = 1;


player_name = localStorage.getItem("ls_player_name") ;


//play sound


// function for number guessed by user     

function submit() {
  var x = document.getElementById("guessField").value;
  
  // made for correct Guess
  if(x == y)
  {
    var snd = new Audio('success-sound-effect.mp3');
        snd.play();
        setTimeout(function(){alert("CONGRATULATIONS!!!  " + player_name + "  YOU GUESSED IT RIGHT IN " + guess + " ATTEMPT(S)")},1000);

   
  }
  // counting the number of guesses
  else if(x > y)
  {
    guess++;
    var snd1 = new Audio('fail-buzzer-02.mp3');
        snd1.play();
        setTimeout(function(){alert("OOPS SORRY!! TRY A SMALLER NUMBER")},1000);
    
    
  }
  else
  {
    guess++;
    var snd2 = new Audio('fail-buzzer-02.mp3');
        snd2.play();
        setTimeout(function(){alert("OOPS SORRY!! TRY A GREATER NUMBER")},1000);
   
    
  }
}

function playAgain(){
  y = Math.floor(Math.random() * 10 + 1);
  document.getElementById("guessField").value = "";
  guess = 1;
}