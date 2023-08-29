import { TodoList } from "./todoList";
export {openModal, closeModal, createCard, renderDashboard};

const todoListInstance = new TodoList;

const todoList = document.getElementById("todo-list");
const addTodoButton = document.getElementById("add-todo-button");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const submitTodo = document.getElementById("submit-todo");
const cancel = document.getElementById("cancel");

const formNewTodo = document.getElementById("form-body");

todoList.addEventListener("click", function(event){
    if (event.target.type == "checkbox"){
        console.log("You are my tralala");
    }
})

addTodoButton.addEventListener("click", openModal);
cancel.addEventListener("click", closeModal);
submitTodo.addEventListener("click", () => {
    const formTitle = document.getElementById("title").value;
    const formDetails = document.getElementById("description").value;
    const formDueDate = document.getElementById("due-date").value;
    const formPriority = document.getElementById("prio").value;
    const formCategory = document.getElementById("category").value;
    let currentTodos = todoListInstance.createTodo(formTitle, formDetails, formDueDate, formPriority, formCategory);
    renderDashboard(currentTodos);
    closeModal();
    });

function openModal(){
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal() {
    formNewTodo.reset();
    modal.classList.remove("active");
    overlay.classList.remove("active");
}

function createCard(object){

    const todoCard = document.createElement("div");

    const todoStatus = document.createElement("input");
    const todoTitle = document.createElement("div");
    const todoDetails = document.createElement("div");
    const todoDue = document.createElement("div");
    const todoPrio = document.createElement("div");
    const todoEdit = document.createElement("button");
    const todoDelete = document.createElement("button");

    todoList.appendChild(todoCard);
    todoCard.append(todoStatus, todoTitle, todoDetails, todoDue, todoPrio, todoEdit, todoDelete);
    todoCard.classList.add("item-card");
    todoCard.setAttribute("id", object.id);

    todoStatus.type = "checkbox";

    todoTitle.classList.add("todo-title");
    todoTitle.innerText = object.title;

    todoDetails.classList.add("todo-details");
    todoDetails.innerText = object.details;

    todoDue.classList.add("todo-due");
    todoDue.innerText = "Due date: " + object.duedate;

    todoPrio.classList.add("todo-prio");
    todoPrio.innerText = "Priority: " + object.priority;

    todoEdit.classList.add("todo-edit");
    todoEdit.innerText = "Edit";

    todoDelete.classList.add("todo-delete");
    todoDelete.innerText = "Delete";

    return todoCard;
}

function renderDashboard(todoArray){
    todoList.innerHTML = ""; // Clear existing content 
    todoArray.forEach(object => {
        const todoCard = createCard(object);
        todoList.appendChild(todoCard);
    });
}



// Event listener functions
function handleCheckboxClick(event) {
    const checkbox = event.target;
    const itemCard = checkbox.closest('.item-card'); // Find the nearest parent with class "item-card"
    
    if (itemCard) {
        const cardId = itemCard.id; // Get the ID of the parent item-card
        // Use the cardId to identify the corresponding object from your data
        // Add your logic here
        console.log("Checkbox clicked for item with ID:", cardId);
    }
    
    // Rest of the handling logic
}

function handleDeleteClick(event) {
    const deleteButton = event.target;
    const itemCard = deleteButton.closest('.item-card'); // Find the nearest parent with class "item-card"
    
    if (itemCard) {
        const cardId = itemCard.id; // Get the ID of the parent item-card
        // Use the cardId to identify the corresponding object from your data
        // Add your logic here
        console.log("Delete button clicked for item with ID:", cardId);
    }
    
    // Rest of the handling logic
}

function changeStatus(){
    document.getElementById("myLI").onclick = function(e){
        alert(e.target.parentNode.id);
      }
}

// import { Todo } from "./todo";
// import { TodoList } from "./todoList";

// export class Dashboard {
//     constructor(){

//         this.allTodos = new TodoList;

//         this.todoList = document.getElementById("todo-list");
//         this.addTodoButton = document.getElementById("add-todo-button");
//         this.modal = document.getElementById("modal");
//         this.overlay = document.getElementById("overlay");
//         this.submitTodo = document.getElementById("submit-todo");
//         this.cancel = document.getElementById("cancel");

//         this.formNewTodo = document.getElementById("form-body");

//         this.addTodoButton.addEventListener("click", () => this.openModal()); // Inside the event handler functions, 'this' refers to the element that triggered the event, not the Dashboard instance. Another option is to bind the methods to the class instance e.g. add this in the constructor 'this.openModal = this.openModal.bind(this)';
//         this.cancel.addEventListener("click", () => this.closeModal());
//         this.submitTodo.addEventListener("click", () => {this.renderDashboard(this.allTodos.todoList), this.closeModal()});
//     }
 
//     openModal(){
//         this.modal.classList.add("active");
//         this.overlay.classList.add("active");
//     }

//     closeModal() {
//         this.formNewTodo.reset();
//         this.modal.classList.remove("active");
//         this.overlay.classList.remove("active");
//     }

//     createCard(object){

//         this.todoCard = document.createElement("div");
    
//         this.todoStatus = document.createElement("input");
//         this.todoTitle = document.createElement("div");
//         this.todoDetails = document.createElement("div");
//         this.todoDue = document.createElement("div");
//         this.todoPrio = document.createElement("div");
//         this.todoEdit = document.createElement("button");
//         this.todoDelete = document.createElement("button");

//         this.formTitle = document.getElementById("title").value;
//         this.formDetails = document.getElementById("description").value;
//         this.formDueDate = document.getElementById("due-date").value;
//         this.formPriority = document.getElementById("prio").value;
//         this.formCategory = document.getElementById("category").value;
    
//         this.todoList.appendChild(this.todoCard);
//         this.todoCard.append(this.todoStatus, this.todoTitle, this.todoDetails, this.todoDue, this.todoPrio, this.todoEdit, this.todoDelete);
//         this.todoCard.classList.add("item-card");
     
//         this.todoStatus.type = "checkbox";
    
//         this.todoTitle.classList.add("todo-title");
//         this.todoTitle.innerText = this.formTitle;
    
//         this.todoDetails.classList.add("todo-details");
//         this.todoDetails.innerText = this.formDetails;
    
//         this.todoDue.classList.add("todo-due");
//         this.todoDue.innerText = "Due date: " + this.formDueDate;
    
//         this.todoPrio.classList.add("todo-prio");
//         this.todoPrio.innerText = "Priority: " + this.formPriority;
    
//         this.todoEdit.classList.add("todo-edit");
//         this.todoEdit.innerText = "Edit";
    
//         this.todoDelete.classList.add("todo-delete");
//         this.todoDelete.innerText = "Delete";
        
//         return this.todoCard;
//     }


//     renderDashboard(currentTodos){
//         const newTodo = this.allTodos.createTodo(this.formTitle, this.formDetails, this.formDueDate, this.formPriority, this.formCategory);
//         this.todoList.innerHTML = ""; // Clear existing content 
//         currentTodos.forEach(object => {
//             this.todoCard = this.createCard(object);
//             this.todoList.appendChild(this.todoCard);
//         });
//     }
// }


// class GameView {
//     renderBoard(gameState) {
//         for (i = 0...)
//             for (j =...) {
//             }
//     }

//     onCellClick() {
//         // dispatch cellclick event 
//     }
// }

// class GameController() {
//     onPlayerMove(idx, symbol) {
//         //validate and update 
//         if (this.moveIsValid()) {
//             this.updateGameState()
//             this.gameView.renderBoard(gameState);
//         }
//     }
// }

// gameState = [
//     {
//         symbol: 'x' // or 0 // or '' 
//     },
//     {
//         symbol: '0' // or 0 // or '' 
//     },
//     {
//         symbol: 'x' // or 0 // or '' 
//     },
// ]

 