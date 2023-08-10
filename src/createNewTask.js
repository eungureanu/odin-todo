import {Todo, createTodo, changeProperty, toggleStatus, deleteTodo, categories} from './index.js';
import { allTodos } from './index.js';

const newTaskModal = {
    activeModal: document.getElementById("add-task-modal"),
    activeOverlay: document.getElementById("overlay"),
    addTask: document.getElementById("add-task-button"),
    submitTask: document.getElementById("new-task"),
    cancel: document.getElementById("cancel")
}

function openModal(){
    newTaskModal.activeModal.classList.add("active");
    newTaskModal.activeOverlay.classList.add("active");
}

function closeModal() {
    newTaskModal.activeModal.classList.remove("active");
    newTaskModal.activeOverlay.classList.remove("active");
}

newTaskModal.addTask.addEventListener("click", openModal);
newTaskModal.cancel.addEventListener("click", closeModal);
newTaskModal.submitTask.addEventListener("click", createTodo);

console.log(allTodos);