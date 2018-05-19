let d = Math.floor(Math.random()*100+1);

//game values
let chances=0;


//ui values
const guessSub = document.querySelector("#guesserSubmit");
const guessVal = document.querySelector("#guesserInput");
const guessMSG = document.querySelector("#guesserMessage");


guessSub.addEventListener('click', function(){

    let val = parseInt(guessVal.value);
    if(val===0||isNaN(val)){
        guessMSG.textContent = "Write your guess!!";
        guessMSG.style.color="red";
    }
    else{
        guessMSG.style.color="black";
        if(val===d){
            guessMSG.textContent = "You win!! Excellent Choice!";
            guessSub.value="Play Again!";
            guessVal.disabled = true;
            guessSub.addEventListener('click', function(){
                window.location.reload(true);
            })
            chances = 0;
        }
        if(val!==d){
            chances++;
            guessMSG.textContent = `Bad choice. You have ${7-chances} guessess left.`;
            if(chances===7){
                chances = 0;
                guessMSG.textContent = `You lost...`;
                guessSub.value="Play Again!";
                guessVal.disabled = true;
                guessSub.addEventListener('click', function(){
                    window.location.reload(true);
                })
            }
        }
        guessVal.value="";
    }
})