// Create the button
const copyBtn = document.createElement("button");
copyBtn.textContent = "Copy Emergency Number";
copyBtn.style.padding = "10px 20px";
copyBtn.style.fontSize = "16px";
copyBtn.style.cursor = "pointer";

// Define the click handler
copyBtn.onclick = function () {
  const tempInput = document.createElement("input");
  tempInput.value = "999";
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  document.execCommand("copy");
  document.body.removeChild(tempInput);

  alert("Emergency number copied: 999");
};

// Add the button to the page
document.body.appendChild(copyBtn);
