import React from "react";
import { useStore } from "../../helpers/use-store";
import { TodoItem } from "../TodoItem/TodoItem";
import { observer } from "mobx-react-lite";

import "./TodoList.scss";


export const TodoList = observer(() => {
    const todoList = useStore();

    const fullTodoList = () => {
        return  todoList.filterTodosByDifficult.map((todo) => <TodoItem key={`${todo.id}-${todo.content}`} todo={todo}/>);
    }

    const openTasksList = () => {
        return todoList.openTodos.map((todo) => <TodoItem key={`${todo.id}-${todo.content}`} todo={todo}/>);
    }

    const finishedTasksList = () => {
        return todoList.finishedTodos.map((todo) => <TodoItem key={`${todo.id}-${todo.content}`} todo={todo}/>);
    }

    const getTodosContent = () => {
        if (todoList.doneOption === "завершенные") {
            return finishedTasksList();
        }
        if (todoList.doneOption === "невыполненные") {
            return openTasksList();
        }
        return fullTodoList();
    }

    return (
        <div className="todo-list">
            {getTodosContent()}
        </div>
    );
});
