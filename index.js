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
           winner();

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
    function winner() {
        if ((userScoreBoard > botScoreBoard) && (userScoreBoard <= 21 )) {
            document.getElementById("letsPlay").innerHTML= "You Win 🏆 " ;
           }  else if ((botScoreBoard > 21) && (userScoreBoard > 21)) {
            document.getElementById("letsPlay").innerHTML= "You Win 🏆 " ;
           }
             // bot winner
            else if ((userScoreBoard < botScoreBoard) && (botScoreBoard <= 21 )) {
                document.getElementById("letsPlay").innerHTML= "You Loose 😓 " ; 
            } else if (userScoreBoard > 21) {
                document.getElementById("letsPlay").innerHTML= "You Loose 😓 " ;
               } 
            //    else  (userScoreBoard == botScoreBoard) 
            //    {
            //     document.getElementById("letsPlay").innerHTML= "Draw 😇 "
            //    }
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
    document.getElementById("userScoreID").innerHTML= "You:0" ;

    document.getElementById('imageOutput1').removeChild(image1);
   
    
    
    document.getElementById("dealerScoreID").innerHTML= "Dealer:0" ;

   }