

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