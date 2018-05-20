let d = Math.floor(Math.random()*100+1);
console.log(d);

//game values
let chances=0;

//ui values
const guessSub = document.querySelector("#guesserSubmit");
const guessVal = document.querySelector("#guesserInput");
const guessMSG = document.querySelector("#guesserMessage");

guessSub.addEventListener('click', function(){
    let val = parseInt(guessVal.value);
    if(isNaN(val)||val>100||val<1){
        guessMSG.textContent = "Write your guess!! Number between 1 and 100.";
        guessMSG.style.color = "red";
    }
    else{
        guessMSG.style.color = "black";
        if(val===d){
            guessMSG.textContent = `You win!! Excellent Choice! ${d} is our number!`;
            // guessVal.style.borderColor = "green";
            guessSub.value = "Play Again!";
            guessVal.disabled = true;
            guessSub.addEventListener('click', function(){
                window.location.reload(true);
            })
            chances = 0;
        }
        if(val!==d){
            chances++;
            if(val<d){
                guessMSG.textContent = `Bad choice. Our number is higher. You have ${7-chances} guessess left.`;
            }
            if(val>d){
                guessMSG.textContent = `Bad choice. Our number is lower. You have ${7-chances} guessess left.`;
            }
            if(chances===7){
                chances = 0;
                guessMSG.textContent = `You lost...`;
                guessSub.value = "Play Again!";
                guessVal.disabled = true;
                guessSub.addEventListener('click', function(){
                    window.location.reload(true);
                })
            }
        }
        guessVal.value="";
    }
})