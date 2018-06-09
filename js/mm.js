//ui values
const memoSub = document.querySelector("#memoSubmit");
const memoVal = document.querySelector("#memoInput");
const memoMSG = document.querySelector("#memoMessage");
const memoP = document.querySelector(".memoPlace");
const colors = ["blue","gold","red","pink","grey","green","orange","violet","yellow","purple"];

memoSub.addEventListener("click", function(){
    val = parseInt(memoVal.value);
    if(isNaN(val)||val>10||val<2){
        memoMSG.textContent = "Write number between 2 and 10.";
        memoMSG.style.color = "red";
    }
    else{

        colorsX = colors.slice(0,val);
        for(var i =0;i<val;i++){
            colorsX.push(colorsX[i]);
        }
        colorsX.sort(function() { return 0.5 - Math.random() })
        console.log(colorsX);
        memoP.innerHTML="";
        memoMSG.textContent = "";
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
        var cards = Array.prototype.slice.call(document.querySelectorAll(".memoC"));
        
        cards.forEach(function(item, index){
            item.classList = colorsX[index];
            //item.style.backgroundColor = item.classList[0];
            index++;
        })
        console.log(cards);

        cards.forEach(function(x){
            x.addEventListener("click", function(){
                x.style.backgroundColor = x.classList[0];

            })
        })

    }
})