function addTask() {
    const taskInput = document.getElementById("todo");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const newTaskItem = document.createElement("li");
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
