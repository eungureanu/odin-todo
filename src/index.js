class Todo {
    constructor (id, title, description, duedate, priority, category){
        this.id = id;
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.category = "To Do";
        this.isDone = false;
    }
}

let categories = ["To Do", "Shopping", "Vacation"];
const priority = [1, 2, 3];
let allTodos = [];
let id = 1;


    // {
    //     title: "Finish Project Proposal",
    //     description: "Complete the project proposal and submit it to the supervisor.",
    //     duedate: "2023-08-15",
    //     priority: "High",
    //     category: "To Do",
    //     isDone: false
    // },
    // {
    //     title: "Buy Groceries",
    //     description: "Purchase vegetables, fruits, and other essentials for the week.",
    //     duedate: "2023-08-10",
    //     priority: "Medium",
    //     category: "To Do",
    //     isDone: false
    // },
    // {
    //     title: "Prepare Presentation",
    //     description: "Create slides for the upcoming team meeting.",
    //     duedate: "2023-08-20",
    //     priority: "High",
    //     category: "To Do",
    //     isDone: false
    // },
    // {
    //     title: "Pay Utility Bills",
    //     description: "Settle electricity, water, and internet bills for the month.",
    //     duedate: "2023-08-25",
    //     priority: "Medium",
    //     category: "To Do",
    //     isDone: false
    // },
    // {
    //     title: "Read Book",
    //     description: "Finish reading 'The Power of Habit' by Charles Duhigg.",
    //     duedate: "2023-08-31",
    //     priority: "Low",
    //     category: "To Do",
    //     isDone: false
    // },
    // {
    //     title: "Exercise",
    //     description: "Go for a jog in the park or do a home workout.",
    //     duedate: "2023-08-08",
    //     priority: "Medium",
    //     category: "To Do",
    //     isDone: false
    // },
    // {
    //     title: "Plan Vacation",
    //     description: "Research and plan a vacation trip to a tropical destination.",
    //     duedate: "2023-09-15",
    //     priority: "High",
    //     category: "To Do",
    //     isDone: false
    // },
    // {
    //     title: "Call Parents",
    //     description: "Give parents a call to catch up and check on their well-being.",
    //     duedate: "2023-08-12",
    //     priority: "Low",
    //     category: "To Do",
    //     isDone: false
    // },
    // {
    //     title: "Write Blog Post",
    //     description: "Create a blog post on a recent technology trend.",
    //     duedate: "2023-08-18",
    //     priority: "Medium",
    //     category: "To Do",
    //     isDone: false
    // },
    // {
    //     title: "Organize Desk",
    //     description: "Clean up and organize the office desk for better productivity.",
    //     duedate: "2023-08-09",
    //     priority: "Low",
    //     category: "To Do",
    //     isDone: false
    // }

function createTodo(title, description, duedate, priority, category){
    allTodos.push(new Todo(id, title, description, duedate, priority, category));
    id++;
    return allTodos;
}

function changeProperty(id, propertyToChange, newValue){
    allTodos.map(object => {
        if(object.id == id){
            object[propertyToChange] = newValue;
        }
    });
    return allTodos;
}

function deleteTodo(id){
    allTodos = allTodos.filter(object => object.id !== id);
    return allTodos;
}

function toggleStatus(id){
    allTodos.map(object => {
        if(object.id == id){
            if(object.isDone){
                object.isDone = false;
            } else {
                object.isDone = true;
            }
        }
    });
    return allTodos;
}


function createCategory(newCategory){
    categories.push(newCategory);
    return categories;
}

function editCategory(existingCategory){
    //code for editing name of existing category
}

function deleteCategory(existingCategory){
    //code for deleting existign category
}
