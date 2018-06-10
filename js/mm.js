//ui values
const memoSub = document.querySelector("#memoSubmit");
const memoVal = document.querySelector("#memoInput");
const memoMSG = document.querySelector("#memoMessage");
const memoP = document.querySelector(".memoPlace");

//colors avaible (10)
const colors = ["blue","gold","red","pink","grey","green","orange","violet","yellow","purple"];

//starting button, player input number of cards
memoSub.addEventListener("click", function(){
    let val = parseInt(memoVal.value);
    //number of cards pairs on place;
    let cardsN = val;
    //simple validation of input number
    if(isNaN(val)||val>10||val<2){
        memoMSG.textContent = "Write number between 2 and 10.";
        memoMSG.style.color = "red";
    }

    else{
        //choosing number of colors equal to players input number
        colorsX = colors.slice(0,val);
        //double array
        for(var i =0;i<val;i++){
            colorsX.push(colorsX[i]);
        }
        //shuffling array
        colorsX.sort(function() { return 0.5 - Math.random() })
        //cleaning game place if there is something after last game
        memoP.innerHTML="";
        //cleaning message
        memoMSG.textContent = "";
        //doubling value - it's cards number not pairs of cards
        val*=2;
        while(val>0){
            var memoCard = document.createElement("div");
            memoCard.classList.add("memoC");
            memoCard.style.width ="100px";
            memoCard.style.height="100px";
            memoCard.style.backgroundColor= "black";
            memoCard.style.display="inline-block";
            memoCard.style.margin = "10px";
            memoP.appendChild(memoCard);
            val--
        }

        //converting nodeList to array
        var cards = Array.prototype.slice.call(document.querySelectorAll(".memoC"));
        
        //adding colors ass a class name, index taking next colors from colorX array
        cards.forEach(function(item, index){
            item.classList = colorsX[index];
        })
        console.log(cards);

        //moves - how many attempts player had
        let moves = 0;
        //state 0 - nothing was clicked, state 1 - one card is clicked, state 2 - two cards are clicked
        let state = 0;

        cards.forEach(function(x){
            x.addEventListener("click", function(e){
                //state up to 1, because one card was clicked
                state++;
                //changing color of card from black to class color
                x.style.backgroundColor = x.classList[0];
                //storing color of clicked element
                if(state===1){sessionStorage.setItem("key",e.target.classList[0]);}
                //if second clicked element have the same class as stored one
                if(e.target.classList[0]===sessionStorage.getItem("key")&&state===2){
                    //removing two cards after 400 ms, changing color to white
                    setTimeout(function(){   
                        //creating array of elements with classname same as stored one
                        var removingElements = Array.prototype.slice.call(document.getElementsByClassName(sessionStorage.getItem("key")));
                        removingElements.forEach(function(z){
                            //changing that cards visibility
                            z.style.backgroundColor = "white";
                            z.style.visibility = "hidden";
                        })
                    },400);
                    //state to 0
                    state = 0;
                    //up of attempts
                    moves++;
                    //cardsN go down
                    cardsN--;
                    //winner case info
                    if(cardsN===0){
                        memoMSG.textContent = `Excellent!! You won!! You've done ${moves} moves!`;
                        memoMSG.style.color = "blue";
                        console.log("winer!!!!!");
                    }  
                }
                //if second clicked element have different class as stored one
                else if(e.target.classList[0]!==sessionStorage.getItem("key")&&state===2){
                    // console.log("loser");
                    //everything similar as above;
                    setTimeout(function(){
                        var removingElements = Array.prototype.slice.call(document.getElementsByClassName(sessionStorage.getItem("key")));
                        removingElements.forEach(function(z){
                            z.style.backgroundColor="black";
                        })
                        e.target.style.backgroundColor = "black";
                    },400);
                    state = 0;
                    moves++;
                }  
            })
        })
    }
})