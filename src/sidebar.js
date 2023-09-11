import { Category, CategoryList } from "./category_management";

export class Sidebar{
    constructor(){
        this.CategoryListInstance = new Category;

        this.categoryList = ocument.getElementById("category-list");
        this.addCategoryButton = document.getElementById("add-category");

    }

    addNewCategory(){
        ...
    }

    removeCategory(){
        ...
    }

    renderCategories(){
        ...
    }
}