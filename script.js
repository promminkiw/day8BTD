function showTextfill() {
    let inputText = document.getElementById("inputText").value;
    let displayText = document.createElement("p");
    displayText.innerText = inputText;
    let results = document.getElementById("displayText");
    results.appendChild(displayText);
    document.getElementById("inputText").value = "";
}
