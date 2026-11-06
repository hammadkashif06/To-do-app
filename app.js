let addTaskIcon = document.querySelector(".plus_icon");
let allTasks = document.querySelector(".all_tasks");
let taskIntention = document.querySelector(".task_input");
let completedTasks = document.querySelector(".completed-option");
let remainingTasks = document.querySelector(".remaining-option");
let allOption = document.querySelector(".all-option");
let optionInnerCircle = document.querySelector(".option_inner_circle");
let optionCircle = document.querySelectorAll(".option-circle");
let menuIcon = document.querySelector(".menu_icon");
let leftMenu = document.querySelector(".left_menu");
let mainContent = document.querySelector(".main_content");
let tasksArr = [];

function taskCompleted(task, taskCheckCircle, obj) {
    task.classList.add("task_completion");
    taskCheckCircle.disabled = true;
    obj.isCompleted = true;
}
function displayRemainingTasks(tasksArr){
    for (let obj of tasksArr){
        if(obj.isCompleted === true){
            document.getElementById(obj.id).classList.add("display_tasks");
        }else{
            document.getElementById(obj.id).classList.remove("display_tasks");
        }
    }
}
function displayCompletedTasks(tasksArr) {
    for (let obj of tasksArr) {
        if (obj.isCompleted === false) {
            document.getElementById(obj.id).classList.add("display_tasks");
        }else{
            document.getElementById(obj.id).classList.remove("display_tasks");
        }
    }
}
function displayAllTasks(tasksArr){
    for (let obj of tasksArr){
        document.getElementById(obj.id).classList.remove("display_tasks");
    }
}
function displayTasks(obj) {
    var task = document.createElement("div");
    task.classList.add("tasks");
    task.id = obj.id;
    var taskCheckCircle = document.createElement("button");
    taskCheckCircle.classList.add("task_check_circle");
    var taskIntention = document.createElement("span");
    taskIntention.classList.add("task_intention");
    taskIntention.innerText = obj.title;
    task.append(taskCheckCircle, taskIntention);
    allTasks.append(task);
    taskCheckCircle.addEventListener("click", () => {
        taskCompleted(task, taskCheckCircle, obj);
    });
}
function addTask() {
    if (taskIntention.value === "") {
        return;
    } else {
        const obj = {
            title: taskIntention.value,
            isCompleted: false,
            id: Date.now()
        }
        tasksArr.push(obj);
        displayTasks(obj);
        taskIntention.value = "";
    }

}

addTaskIcon.addEventListener("click", () => {
    addTask();
});
taskIntention.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
completedTasks.addEventListener("click", () => {
    displayCompletedTasks(tasksArr);
    completedTasks.classList.add("display_tasks_css");
    remainingTasks.classList.remove("display_tasks_css");
    allOption.classList.remove("display_tasks_css");
    optionCircle[1].classList.add("display_tasks_circle");
    optionCircle[0].classList.remove("display_tasks_circle");
    optionCircle[2].classList.remove("display_tasks_circle");
});
remainingTasks.addEventListener("click", () =>{
    displayRemainingTasks(tasksArr);
    remainingTasks.classList.add("display_tasks_css");
    completedTasks.classList.remove("display_tasks_css");
    allOption.classList.remove("display_tasks_css");
    optionCircle[2].classList.add("display_tasks_circle");
    optionCircle[0].classList.remove("display_tasks_circle");
    optionCircle[1].classList.remove("display_tasks_circle");
});
allOption.addEventListener("click", () => {
    displayAllTasks(tasksArr);
    allOption.classList.add("display_tasks_css");
    remainingTasks.classList.remove("display_tasks_css");
    completedTasks.classList.remove("display_tasks_css");
    optionCircle[0].classList.add("display_tasks_circle");
    optionCircle[1].classList.remove("display_tasks_circle");
    optionCircle[2].classList.remove("display_tasks_circle");
})
menuIcon.addEventListener("click", ()=>{
    leftMenu.classList.add("left_menu_open");
    mainContent.classList.add("main_opacity");
    mainContent.addEventListener("click", ()=>{
        leftMenu.classList.remove("left_menu_open");
        mainContent.classList.remove("main_opacity");
    });
    completedTasks.addEventListener("click", () =>{
        leftMenu.classList.remove("left_menu_open");
        mainContent.classList.remove("main_opacity");
    });
    remainingTasks.addEventListener("click", () =>{
        leftMenu.classList.remove("left_menu_open");
        mainContent.classList.remove("main_opacity");
    });
    allOption.addEventListener("click", () =>{
        leftMenu.classList.remove("left_menu_open");
        mainContent.classList.remove("main_opacity");
    })
});