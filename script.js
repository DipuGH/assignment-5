

let count = 0;
const Hearts = document.querySelectorAll(".heart");
const HeartCount = document.getElementById ("heart-count");

for (const Heart of Hearts) {
    Heart.addEventListener('click', function(){
        count++;
        HeartCount.innerText = count;
    })
}


function ToCopy(buttonId, textId){
    
    
    const CopyBtn = document.getElementById(buttonId);
    const CopyElement = document.getElementById(textId).innerText; 

    if(CopyBtn && CopyElement) {
        CopyBtn.addEventListener("click", function(){
            navigator.clipboard.writeText(CopyElement).then(function () {
            alert("Copied: " + CopyElement);
           })
        })
    }
}

ToCopy("copy-btn","copy-text");
ToCopy("copy-btn1","copy-text1");
ToCopy("copy-btn2","copy-text2");
ToCopy("copy-btn3","copy-text3");
ToCopy("copy-btn4","copy-text4");
ToCopy("copy-btn5","copy-text5");
ToCopy("copy-btn6","copy-text6");
ToCopy("copy-btn7","copy-text7");
ToCopy("copy-btn8","copy-text8");

let cnt = 0;
const CopyCount = document.getElementById("copy-count");
const CopyCountBtns = document.querySelectorAll(".copy-count-btn");

    for (const CopyCountBtn of CopyCountBtns){
        CopyCountBtn.addEventListener("click", function(){
            cnt++;
            CopyCount.innerText=cnt;
        })

    }


const TotalCoin = document.getElementById("total-coin");
const CallBtns = document.querySelectorAll(".call-btn");

let coin = TotalCoin.innerText;

for (const CallBtn of CallBtns){
    CallBtn.addEventListener("click",function(){
    if (coin >= 20){
        coin-=20;
        TotalCoin.innerText = coin;
        alert("calling....");
    }else {
    alert("You cannot call. Not enough coins.");
    }
  })
}



