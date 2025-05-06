function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    let li = document.createElement("li");
    li.textContent = taskText;
  
    // Mark as done on click
    li.onclick = function() {
      li.classList.toggle("done");
    };
  
    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function(event) {
      event.stopPropagation(); // prevent marking as done when clicking delete
      li.remove();
    };
  
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
  
    taskInput.value = "";
  }
  