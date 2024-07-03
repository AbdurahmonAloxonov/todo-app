
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const deleteAllBtn = document.createElement('button');


function addTask() {
    
    const taskText = taskInput.value.trim();

  
    if (taskText !== '') {
        
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        
       
        taskList.appendChild(li);

        taskInput.value = '';

       
        li.style.animation = 'fadeIn 0.5s forwards';
    }
}


function deleteTask(btn) {
   
    const li = btn.parentElement;

   
    li.style.animation = 'fadeOut 0.5s forwards';

    
    setTimeout(() => {
        taskList.removeChild(li);
    }, 500); 
}


function deleteAllTasks() {
    const allTasks = taskList.querySelectorAll('li');

  
    allTasks.forEach((task, index) => {
        task.style.animation = `fadeOut 0.5s forwards ${index * 0.1}s`;
    });

    
    setTimeout(() => {
        allTasks.forEach(task => {
            taskList.removeChild(task);
        });
    }, allTasks.length * 100); 
}


deleteAllBtn.textContent = 'Delete All';
deleteAllBtn.className = 'delete-all-btn';
deleteAllBtn.onclick = deleteAllTasks;
document.querySelector('.container').appendChild(deleteAllBtn);