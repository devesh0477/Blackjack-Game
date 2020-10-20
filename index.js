var r = '';
var r1 = '';
var botTotal = '' ;
var userScoreBoard = 0;
var botScoreBoard  = 0;

// ******************************** Hit Button *****************************************

function hitButton() {

    // Random Suit
    var suits = ["CLUB-" , "DIAMOND-" , "HEART-" , "SPADE-"];
    var randomSuit = Math.floor(Math.random() * 4);
    var selectSuit = suits[randomSuit]; 

    //  Random Card Number : 1-13
    var randomNumber = Math.floor(Math.random() * 13)+1;
    r = randomNumber;
    var image = document.createElement('img'); 
    var selectDiv = document.getElementById('imageOutput1');
    image.src = "deckOfCards"+"/"+selectSuit+randomNumber+".svg"; 
      selectDiv.appendChild(image);
     
    //  console.log(r);

     if (r === 11 || r === 12 || r === 13)  {
          r = 10;
          console.log(r);
     } else if (r === 1) {
         r = 11;
     }


     userScoreBoard = userScoreBoard + r; 
     console.log(userScoreBoard);


     userScore() ;
     buttonDisable();
}
// ******************************************************************************************

// ******************************* stand Button *********************************************
function standButton() {
   
           // A = 11 ; FACE CARDS = 10
     if (r1 === 11 || r1 === 12 || r1 === 13)  {
        r1 = 10;
        // console.log(randomNumber1);
   } else if (r1 === 1) {
    r1 = 11;
   }
 
        while( botScoreBoard <= 16 ){

            var suits1 = ["CLUB-" , "DIAMOND-" , "HEART-" , "SPADE-"];
            var randomSuit1 = Math.floor(Math.random() * 4);
            var selectSuit1 = suits1[randomSuit1]; 


            var randomNumber1 = Math.floor(Math.random() * 12)+1;
            r1 = randomNumber1;
            
            botScoreBoard = botScoreBoard  + r1;

            botScore();

            console.log(botScoreBoard );
            var image1 = document.createElement('img');
            var selectDiv1 = document.getElementById('imageOutput2'); 
            image1.src = "deckOfCards"+"/"+selectSuit1+r1+".svg"; 
            selectDiv1.appendChild(image1);
           }

           decideWinner();
           document.getElementById("myBtn1").disabled = true;

        }
    
   // ****************************************************************************************
    
  // ******************************* Disable Button ******************************************

    function buttonDisable() {

        if (userScoreBoard > 21) {
               document.getElementById("myBtn1").disabled = true;
            //    document.getElementById("burstText").innerHTML = "BURST";
         } else if (botScoreBoard > 21) 
         {
            document.getElementById("myBtn2").disabled = true;
            // document.getElementById("burstText").innerHTML = "BURST";
         }
         else {
             console.log("ok");
         }
    }
    // ******************************************************************************************


    // ********************************** Winner ************************************************
    function decideWinner() {
        let winner;

        if (userScoreBoard <= 21) {
            if(userScoreBoard > botScoreBoard || botScoreBoard > 21 ) {
                console.log("You win");
                document.getElementById("letsPlay").innerHTML = " You win 🏆" ;


            } else if( userScoreBoard < botScoreBoard ) {
             console.log("You loose");
             document.getElementById("letsPlay").innerHTML = "You are busted 😢" ;
        
            } 
            else if ( userScoreBoard === botScoreBoard) {
                console.log("Match Draw");
                document.getElementById("letsPlay").innerHTML = "Match Draw 🙄" ;
            }
            else if (userScoreBoard > 21 && botScoreBoard <= 21) {
                console.log("You loose");
                document.getElementById("letsPlay").innerHTML = "You are busted  😢" ;
                var audio = new Audio('sounds/loose.mp3');
                 audio.play(); 
            
            } 
            else if (userScoreBoard > 21 && botScoreBoard > 21) {
                console.log("Match Draw");
                document.getElementById("letsPlay").innerHTML = "Match Draw 🙄" ;
            }
             return winner;
        }
    }
    // ***************************************************************************************

  
    // *************************** User and bot score *****************************************
    function userScore() {
        document.getElementById("userScoreID").innerHTML= "You:" + userScoreBoard ;
    }

    function botScore() {
        document.getElementById("dealerScoreID").innerHTML= "Dealer:" + botScoreBoard ;
    }
    // ******************************************************************************************


   function dealButton() {
    let yourColumnImages = document.querySelector("#imageOutput1").querySelectorAll("img");
    for (i = 0 ; i < yourColumnImages.length ; i++) {
        yourColumnImages[i].remove();
        userScoreBoard = 0
        document.getElementById("letsPlay").innerText = "🃏 Let's Play 🃏";
        userScore();
        
    }
    document.getElementById("myBtn1").disabled = false;

    document.getElementById("dealerScoreID").innerHTML= "Dealer:0" ;
    let dealerColumnImages = document.querySelector("#imageOutput2").querySelectorAll("img");
    for (j = 0 ; j < dealerColumnImages.length ; j++) {
        dealerColumnImages[j].remove();
        botScoreBoard  = 0; 
        document.getElementById("letsPlay").innerText = "🃏 Let's Play 🃏";
        botScore();
        
    }
    document.getElementById("myBtn2").disabled = false;

}

function play() {
    var audio = new Audio('sounds/loose.mp3');
    audio.play(); 
}