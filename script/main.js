
let count = 0;
const Hearts = document.querySelectorAll(".heart");
const HeartCount = document.getElementById ("heart-count");

for (const Heart of Hearts) {
    Heart.addEventListener('click', function(){
        count++;
        HeartCount.innerText = count;
    })
}

// .........................................................................................

function ToCopy(buttonId, textId){
    
    
    const CopyBtn = document.getElementById(buttonId);
    const CopyElement = document.getElementById(textId); 

    if(CopyBtn && CopyElement) {
        CopyBtn.addEventListener("click", function(){
            const textToCopy = CopyElement.innerText;
            navigator.clipboard.writeText(textToCopy).then(function () {
            alert("Copied: " + textToCopy);
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


// ...........................................................................................

const TotalCoin = document.getElementById("total-coin");
const CallBtns = document.querySelectorAll(".call-btn");

let coin = parseInt(TotalCoin.innerText); // Convert to number

// Function to add to history
function addToHistory(name, number) {
  const historyList = document.getElementById("history-list");

  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const historyItem = document.createElement("div");
  
  historyItem.innerHTML = `
            <div class="">
              <h1 class="mt-3 text-xs font-bold text-start">${name}</h1>
              <p class="text-xs text-gray-500">${number}</p>
           </div>
           <div>
              <h3 class="text-xs">${time}</h3>
            </div>
  `;

  historyList.appendChild(historyItem);
}

// Handle call buttons
CallBtns.forEach(CallBtn => {
  CallBtn.addEventListener("click", function () {
    if (coin >= 20) {
      coin -= 20;
      TotalCoin.innerText = coin;

      const card = CallBtn.closest(".card");
      const name = card.querySelector(".service-name").innerText;
      const number = card.querySelector(".service-number").innerText;

      alert(`Calling ${name} at ${number}`);
      addToHistory(name, number);
    } else {
      alert("You cannot call. Not enough coins.");
    }
  });
});

// Clear history button
document.querySelector(".clear-btn").addEventListener("click", function () {
  document.getElementById("history-list").innerHTML = "";
});



