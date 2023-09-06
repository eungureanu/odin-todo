import { TodoList } from "./todoList";

export class Dashboard {
    constructor(){
        this.todoListInstance = new TodoList;

        this.todoList = document.getElementById("todo-list");
        this.addTodoButton = document.getElementById("add-todo-button");
        this.modal = document.getElementById("modal");
        this.overlay = document.getElementById("overlay");
        this.submitTodo = document.getElementById("submit-todo");
        this.cancel = document.getElementById("cancel");

        this.formNewTodo = document.getElementById("form-body");

        /* Inside the event handler functions, 'this' refers to the element that triggered the event, not the Dashboard instance. 
        Another option is to bind the methods to the class instance e.g. add this in the constructor 'this.openModal = this.openModal.bind(this)'; */
        this.addTodoButton.addEventListener("click", () => this.openModal());
        this.cancel.addEventListener("click", () => this.closeModal());
        this.submitTodo.addEventListener("click", () => {
            this.formTitle = document.getElementById("title").value;
            this.formDetails = document.getElementById("description").value;
            this.formDueDate = document.getElementById("due-date").value;
            this.formPriority = document.getElementById("prio").value;
            this.formCategory = document.getElementById("category").value;
            this.currentTodos = this.todoListInstance.createTodo(this.formTitle, this.formDetails, this.formDueDate, this.formPriority, this.formCategory);
            this.renderDashboard(this.currentTodos);
            this.closeModal();
        })
    }

    openModal(){
        this.modal.classList.add("active");
        this.overlay.classList.add("active");
    }

    closeModal() {
        this.formNewTodo.reset();
        this.modal.classList.remove("active");
        this.overlay.classList.remove("active");
    }

    createCard(object){

        this.todoCard = document.createElement("div");

        this.todoStatus = document.createElement("input");

        this.todoTitle = document.createElement("div");
        this.todoDetails = document.createElement("div");
        this.todoDue = document.createElement("div");
        this.todoPrio = document.createElement("div");
        
        this.todoEdit = document.createElement("button");

        this.todoDelete = document.createElement("button");
        this.todoDelete.addEventListener("click", (event) => { this.deleteCard(event); })


        this.todoList.appendChild(this.todoCard);
        this.todoCard.append(this.todoStatus, this.todoTitle, this.todoDetails, this.todoDue, this.todoPrio, this.todoEdit, this.todoDelete);
        this.todoCard.classList.add("item-card");
        this.todoCard.setAttribute("data-itemid", object.id);

        this.todoStatus.type = "checkbox";

        this.todoTitle.classList.add("todo-title");
        this.todoTitle.innerText = object.title;

        this.todoDetails.classList.add("todo-details");
        this.todoDetails.innerText = object.details;

        this.todoDue.classList.add("todo-due");
        this.todoDue.innerText = "Due date: " + object.duedate;

        this.todoPrio.classList.add("todo-prio");
        this.todoPrio.innerText = "Priority: " + object.priority;

        this.todoEdit.classList.add("todo-edit");
        this.todoEdit.innerText = "Edit";

        this.todoDelete.classList.add("todo-delete");
        this.todoDelete.innerText = "Delete";

        return this.todoCard;
    }

    deleteCard(event){
        if (event.target.className == "todo-delete"){
            const parentCard = event.target.closest(".item-card");
            const itemID = parentCard.dataset.itemid;
            const todoArray = this.currentTodos;

            todoArray.forEach(object => {
                if (object.id == itemID){
                    this.todoList.removeChild(parentCard);
                    this.currentTodos = this.todoListInstance.deleteTodo(object.id);
                }        
            })
        }
        this.renderDashboard(this.currentTodos);
    }

    renderDashboard(todoArray){
        this.todoList.innerHTML = ""; // Clear existing content 
        todoArray.forEach(object => {
            this.todoCard = this.createCard(object);
            this.todoList.appendChild(this.todoCard);
        });
    }
}

/* Using regular variables and functions

export {openModal, closeModal, createCard, renderDashboard};

const todoListInstance = new TodoList;

const todoList = document.getElementById("todo-list");
const addTodoButton = document.getElementById("add-todo-button");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const submitTodo = document.getElementById("submit-todo");
const cancel = document.getElementById("cancel");

const formNewTodo = document.getElementById("form-body");

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
*/