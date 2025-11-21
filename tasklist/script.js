
const taskList = document.getElementById("taskList")
const completeTask = document.getElementById("completeTask")
const taskForm = document.getElementById("taskForm")
const button = document.getElementById("button")
const error = document.getElementById("error")
let state = 'incomplete'
let nameTaken = []
let tasks = []



function nameCheck(name) {
    const existingName = name.trim().toLowerCase()
    if (!existingName) return false

    if (nameTaken.includes(existingName)) {
        return true
    } else {
        nameTaken.push(existingName)
        return false
    }
}

function createTask(name, state) {

    const li = document.createElement('li')

    const taskContent = document.createElement('span')
    taskContent.textContent = name
    li.appendChild(taskContent)

    const taskBtn = document.createElement('div')
    li.appendChild(taskBtn)

    const editBtn = document.createElement('button')
    editBtn.textContent = 'Modifier'
    taskBtn.appendChild(editBtn)

    const doneBtn = document.createElement('button')
    doneBtn.textContent = 'Valider'
    taskBtn.appendChild(doneBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Supprimer'
    taskBtn.appendChild(deleteBtn)



    deleteBtn.addEventListener('click', function deleteTask() {
        if (state === 'complete') {
            completeTask.removeChild(li)
        } else {
            taskList.removeChild(li)
        }
        const index = nameTaken.indexOf(name.trim().toLowerCase())
        if (index > -1) {
            nameTaken.splice(index, 1)
        }
    })

    doneBtn.addEventListener('click', function () {
        if (state === 'complete') {
            state = 'incomplete'
            doneBtn.textContent = 'Valider'
            taskList.appendChild(li)
        } else {
            state = 'complete'
            doneBtn.textContent = 'En cours'
            completeTask.appendChild(li)
        }
    })

    editBtn.addEventListener('click', function () {
        const newName = prompt("Modifier le nom de la tâche :", name)
        if (newName && !nameCheck(newName)) {
            const index = nameTaken.indexOf(name.trim().toLowerCase())
            if (index > -1) {
                nameTaken.splice(index, 1)
            }
            name = newName
            taskContent.textContent = newName
        } else if (newName) {
            alert("Le nom de la tâche est déjà pris.")
        }
    })

    taskList.appendChild(li)
    tasks.push({ name: name, state: state })

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    saveTasks()
}

button.addEventListener('click', function () {
    let taskName = taskForm.value
    if (nameCheck(taskName)) {
        error.textContent = "Le nom de la tâche est déjà pris."

    } else if (taskName == '') {
        error.textContent = "Le nom de la tâche ne peut pas être vide."
    } else {
        createTask(taskName)
        error.textContent = ""
        console.log(nameTaken);
    }
})

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
        tasks = JSON.parse(savedTasks)
        if (tasks.length === 0) return
        else {
            const loadedTask = tasks[0]
            createTask(loadedTask.name, loadedTask.state)
        }
    }
}
loadTasks()