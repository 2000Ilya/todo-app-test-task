import React, { useState } from "react";
import { useStore } from "../../helpers/use-store";
import { onEnterPress } from "../../helpers/use-enter";

import "./NewTodoItemForm.scss";


export const NewTodoItemForm = () => {
    const [newTodo, setTodo] = useState("");
    const [todoDifficulty, setTodoDifficulty] = useState("сложная");
    const todoList = useStore();

    const addTodo = () => {
        todoList.addTodo({
            content: newTodo,
            difficulty: todoDifficulty,
            isDone: false,
            id: Date.now()
        });
        setTodo("");
        todoList.setTodoFormShowing(false);
    }

    const closeNewTodoForm = (event) => {
        if (
            event.target.className === "todo-new-form-background" ||
            event.target.className === "todo-new-form__close-button right-top"
        ) {
            todoList.setTodoFormShowing(false);
        }
    }

    return (
        <div className="todo-new-form-background" onClick={(e) => closeNewTodoForm(e)}>
            <div className="todo-new-form">
                <input
                    className="todo-new-form__input left-top"
                    type="text" placeholder={"Название задачи..."}
                    value={newTodo}
                    onKeyDown={onEnterPress(addTodo)}
                    onChange={(e) => setTodo(e.target.value)}
                    autoFocus={true}
                />
                <select
                    className="todo-new-form__select left-bottom"
                    value={todoDifficulty}
                    onKeyDown={onEnterPress(addTodo)}
                    onChange={(e) => setTodoDifficulty(e.target.value)}
                >
                    <option value="сложная">Сложная</option>
                    <option value="средняя">Средняя</option>
                    <option value="простая">Простая</option>
                </select>
                <button
                    className="todo-new-form__add-button right-bottom"
                    onClick={addTodo}
                    disabled={newTodo.trim().length === 0}
                >
                    Создать
                </button>
                <button
                    className="todo-new-form__close-button right-top"
                    onClick={closeNewTodoForm}
                >
                </button>
            </div>
        </div>
    )
};