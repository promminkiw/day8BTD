function showTextfill() {
    let input = document.getElementById("inputText");
    let text = input.value;

    if (text.trim() === "") return;

    createTask(text);

    input.value = "";
}

function createTask(text) {

    let taskContainer = document.createElement("div");

    let displayText = document.createElement("p");
    displayText.innerText = text;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "ลบ";

    deleteBtn.addEventListener("click", function () {
        deletetask(taskContainer);
    });

    taskContainer.appendChild(displayText);
    taskContainer.appendChild(deleteBtn);

    document.getElementById("displayText").appendChild(taskContainer);
}

function deletetask(taskElement) {
    taskElement.remove();
}
