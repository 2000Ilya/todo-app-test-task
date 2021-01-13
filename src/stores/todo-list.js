import { action, computed, observable, makeObservable } from "mobx";
import TodoItem from "./todo-item";


export class TodoList {
    list = [];
    sortedByDifficulty = "любая сложность";
    isTodoFormShowing = false;
    doneOption = "все";

    constructor(todos) {
        todos.forEach(this.addTodo);
        this.todos = todos;
        makeObservable(this, {
            doneOption: observable,
            isTodoFormShowing: observable,
            sortedByDifficulty: observable,
            list: observable.shallow,
            setDoneOption: action,
            setTodoFormShowing: action,
            addTodo: action,
            removeTodo: action,
            setDifficulty: action,
            finishedTodos: computed,
            openTodos: computed,
            filterTodosByDifficult: computed,
        })
    }

    addTodo = (todo) => {
        this.list.push(new TodoItem(todo));
        localStorage.setItem("todos", JSON.stringify(this.list));
    }

    removeTodo = (todo) => {
        this.list.splice(this.list.indexOf(todo), 1);
        localStorage.setItem("todos", JSON.stringify(this.list));
    };

    setDifficulty = (sortedByDifficulty) => {
        this.sortedByDifficulty = sortedByDifficulty;
    };

    setTodoFormShowing = (isTodoFormShowing) => {
        this.isTodoFormShowing = isTodoFormShowing;
    };

    setDoneOption = (doneOption) => {
        this.doneOption = doneOption;
    }

    get filterTodosByDifficult() {
        return this.list.filter((todo) => {
            if (this.sortedByDifficulty === "любая сложность") {
                return true;
            } else {
                return this.sortedByDifficulty === todo.difficulty;
            }
        });
    }

    get finishedTodos() {
        return this.list
            .filter((todo) => {
                if (this.sortedByDifficulty === "любая сложность") {
                    return true;
                } else {
                    return this.sortedByDifficulty === todo.difficulty;
                }
            })
            .filter(todo => todo.isDone);
    }

    get openTodos() {
        return this.list
            .filter((todo) => {
                if (this.sortedByDifficulty === "любая сложность") {
                    return true;
                } else {
                    return this.sortedByDifficulty === todo.difficulty;
                }
            })
            .filter(todo => !todo.isDone);
    }
}