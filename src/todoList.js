import { Todo } from './todo.js';

export class TodoList {
    constructor(){
        this.todoList = [];
        this.id=1;
        this.owner = "Emma";
    }

    createTodo(title, details, duedate, prio, category){
        this.todoList.push(new Todo(this.id, title, details, duedate, prio, category));
        this.id++;
        return this.todoList;
    }
    
    updateTodo(id, propertyToChange, newValue) {
        this.todoList.map(object => {
            if (object.id == id) {
                object[propertyToChange] = newValue;
            }
        });
        return this.todoList;
    }

    deleteTodo(id){
        this.todoList = this.todoList.filter(object => object.id !== id);
        return this.todoList;
    }
}