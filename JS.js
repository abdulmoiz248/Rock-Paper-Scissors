let paper=document.querySelector(".paper");
let rock=document.querySelector(".rock");
let scissor=document.querySelector(".scissor");
let userChoice;
let botScore=0;
let userScore=0;


paper.addEventListener("click",(e)=>{
    userChoice=1;
    play();
});

rock.addEventListener("click",(e)=>{
    userChoice=0;
    play();

});
scissor.addEventListener("click",(e)=>{
    userChoice=2;
    play();
});

function play(){
    console.log('play called');
  let compChoice=  Math.floor(Math.random()*3);
  if(compChoice==userChoice)
    {
        let result=document.querySelector("#result-text");
        result.innerText="Game Drawn..Select Again";
        result.style.backgroundColor="White";
        result.style.color="black";
    }
    else if(userChoice==1 && compChoice==2){
        let result=document.querySelector("#result-text");
        result.innerText="Bot Wins..Scissor cuts Paper!!";
        result.style.backgroundColor="Red";
        result.style.color="black";
        botScore++;
        let bot=document.querySelector("#bot-score");
        bot.innerText=botScore;


    }else if(userChoice==1 && compChoice==0){
        let result=document.querySelector("#result-text");
        result.innerText="User Wins..Paper holds Stone!!";
        result.style.backgroundColor="Green";
        result.style.color="black";
        userScore++;
        let user=document.querySelector("#user-score");
        user.innerText=userScore;
    } 
    else if(userChoice==0 && compChoice==2){
        let result=document.querySelector("#result-text");
        result.innerText="User Wins..Stone Breaks Scissors!!";
        result.style.backgroundColor="Green";
        result.style.color="black";
        userScore++;
        let user=document.querySelector("#user-score");
        user.innerText=userScore;
    }
    else if(userChoice==0 && compChoice==1){
        let result=document.querySelector("#result-text");
        result.innerText="Bot Wins..Paper holds Stone!!";
        result.style.backgroundColor="Red";
        result.style.color="black";
        botScore++;
        let bot=document.querySelector("#bot-score");
        bot.innerText=botScore;

    }else if(userChoice==2 && compChoice==1){
        let result=document.querySelector("#result-text");
        result.innerText="User Wins..Scissors cuts Paper!!";
        result.style.backgroundColor="Green";
        result.style.color="black";
        userScore++;
        let user=document.querySelector("#user-score");
        user.innerText=userScore;

    }
    else if(userChoice==2 && compChoice==0){
        let result=document.querySelector("#result-text");
        result.innerText="Bot Wins..Paper holds Stone!!";
        result.style.backgroundColor="Red";
        result.style.color="black";
        botScore++;
        let bot=document.querySelector("#bot-score");
        bot.innerText=botScore;

    }
}



