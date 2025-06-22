document.getElementById("addTaskButton").onclick = addtask;
document.getElementById("taskInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addtask();
    }
});

function addtask() {
    const taskInput = document.querySelector("#taskInput");
    const taskText = taskInput.value.trim();
    const errorMsg = document.getElementById("errorMsg");
    let errorMessage = "";

    if (taskText.length < 5) {
        errorMessage = "Task must be at least 5 characters long";
    } else if (!isNaN(taskText.charAt(0))) {
        errorMessage = "Task cannot start with a number";
    }
    errorMsg.textContent = "";
    errorMsg.style.display = "none";