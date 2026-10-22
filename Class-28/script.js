
const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");
const emptyMessage = document.getElementById("emptyMessage");

const filterButtons = document.querySelectorAll(".filter-btn");

// Browser se saved tasks load karo
let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

let currentFilter = "all";

// Task add karna
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);

    saveTasks();
    renderTasks();

    taskInput.value = "";
    taskInput.focus();
});

// Tasks browser mein save karna
function saveTasks() {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// Tasks display karna
function renderTasks() {
    taskList.innerHTML = "";

    const filteredTasks = tasks.filter(function (task) {
        if (currentFilter === "pending") {
            return !task.completed;
        }

        if (currentFilter === "completed") {
            return task.completed;
        }

        return true;
    });

    filteredTasks.forEach(function (task) {
        const li = document.createElement("li");
        li.className = "task-item";

        if (task.completed) {
            li.classList.add("completed");
        }

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("aria-label", "Complete task");

        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;

            saveTasks();
            renderTasks();
        });

        // Task ka text
        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = task.text;

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.setAttribute("aria-label", "Delete task");

        deleteBtn.addEventListener("click", function () {
            tasks = tasks.filter(function (item) {
                return item.id !== task.id;
            });

            saveTasks();
            renderTasks();
        });

        li.append(checkbox, span, deleteBtn);
        taskList.appendChild(li);
    });

    // Statistics update karna
    totalTasks.textContent = tasks.length;

    const completedCount = tasks.filter(function (task) {
        return task.completed;
    }).length;

    completedTasks.textContent = completedCount;
    pendingTasks.textContent = tasks.length - completedCount;

    // Empty message show/hide karna
    emptyMessage.style.display =
        filteredTasks.length === 0 ? "block" : "none";
}

// Filters
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        renderTasks();
    });
});

// Page load hone par saved tasks show karo
renderTasks();
