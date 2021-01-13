import { action, observable, makeObservable } from "mobx";

export default class TodoItem {

    constructor(todo) {
        this.content = todo.content;
        this.difficulty = todo.difficulty;
        this.isDone = todo.isDone;
        this.content = todo.content;
        this.difficulty = todo.difficulty;
        this.isDone = todo.isDone;
        this.id = todo.id;
        makeObservable(this, {
            isDone: observable,
            toggleIsDone: action,
        });
    }

    toggleIsDone = () => {
        let list = JSON.parse(localStorage.getItem("todos") || "[]");
        list = list.map((todo) => {
            if (todo.id === this.id) {
                todo.isDone = !todo.isDone;
            }
            return todo;
        });
        this.isDone = !this.isDone;
        localStorage.setItem("todos", JSON.stringify(list));
    }
}