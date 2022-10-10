// const inputTask = document.querySelector('.contain__input input')
// let todos = JSON.parse(localStorage.getItem('storedTask'))
// function showtodo() {
//     todos.forEach((todo,id)=> {
        
//     });
// }
// inputTask.addEventListener('keyup', e =>{
//    let UserTask = inputTask.value
//    if (e.key == 'enter' && userTask) {
//      if (!todos) {
//         todos = []
//      }
//      inputTask.value = ""
//      let taskInfo ={ name: userTask, status: "pending"}
//      todos.push(taskInfo)
//      localStorage.setItem('storedTask', JSON.stringify(todos))
//      showtodo()
//    }
// })







const addTask = document.getElementsByClassName('add')[0]
const addContainer = document.getElementById('task__contain')[0]
const inputTask = document.getElementsByClassName('tas')[0]

addTask.addEventListener('click', () => {
    if (inputTask.value === "") {
        alert('Enter Your Task')
    }else{
        let getItems = JSON.parse(localStorage.getItem('storedTask'))
        if (getItems === null) {
            tasklist =[]
        } else{
            tasklist = getItems
        }
        tasklist.push(inputTask.value)
        localStorage.setItem('storedTask', JSON.stringify(tasklist))
    }
    
    showTask() 
    inputTask.value =""

 })
 function showTask() {
    let output = '';
    let addContainer = document.querySelector('.contain')
    let getItems = JSON.parse(localStorage.getItem('storedTask'))
    if (getItems === null) {
        tasklist =[]
    } else{
        tasklist = getItems
    }
    tasklist.forEach((data, index) => {
        output += `
            <div class="task" id="task">
             
               <button class="checkedTask" onclick ="strike(this)"><i class="fa fa-check"></i></button>
               <button class="delete" onclick ="deleteItem(${index})"><i class="bi bi-trash-fill"></i></button>
               <p id="li">${data}</p>
               </div>    
               <p class="date"></p>
               `
    });
    addContainer.innerHTML = output;
 }
 showTask()

 function deleteItem(index){
    let getItems = JSON.parse(localStorage.getItem('storedTask'))
    tasklist.splice(index, 1)
    localStorage.setItem('storedTask', JSON.stringify(tasklist))
    showTask()
    task.classList.toggle('activate')
}
function strike (selectedTask) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if(selectedTask) {
       taskName.classList.toggle('checked');
    }
   }



// function strike(index) {
//     let getItems = JSON.parse(localStorage.getItem('storedTask'))
//     localStorage.setItem('storedTask', JSON.stringify(tasklist))

//     list = document.getElementsByClassName('li')
//      todo = list[index].innerText
//      ele = `<strike>${todo}</strike>`
//     list[index].innerHTML = ele  
// }    
// showTask()

        

//  buttonChecked.addEventListener('click', strike)
// function strike() {
// }    list = document.getElementsByClassName('li')
// todo = list[index].innerText
// ele = `<strike>${todo}</strike>`
// list[index].innerHTML = ele   

// tasklist.forEach((e, i, checked) => {
// let liEl = document.querySelector(".li")
//     liEl.classList[i].toggle("liel")
// })

// for (let i = 0; i < tasklist.length; i++) {
//     const element = array[i];
    
// }