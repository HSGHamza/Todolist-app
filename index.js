function addTask() {
    var taskInput = document.getElementById("todo");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTaskItem = document.createElement("li");
        newTaskItem.textContent = taskText;

        // Apply the 'task-item' class to the created li element
        newTaskItem.classList.add("task-item");

        taskList.appendChild(newTaskItem);

        // Clear the input field
        taskInput.value = "";
    }
}

document.getElementById("todo").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});
