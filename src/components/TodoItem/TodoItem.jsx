import React from "react";
import { useStore } from "../../helpers/use-store";

import "./TodoItem.scss";


export const TodoItem = ({todo}) => {
    const todoList = useStore();

    const getDifficultyStyle = (difficulty) => {
        if (difficulty === "простая") {
            return "#228007";
        }
        if (difficulty === "средняя") {
            return "#D97E00";
        }
        return "#CE0014";
    }
    
    return (
        <React.Fragment>
            <div className="todo-item">
                <label className="container">
                    <input type="checkbox" onChange={todo.toggleIsDone} defaultChecked={todo.isDone}></input>
                    <span className="checkmark"></span>
                </label>
                <p className="todo-item__text-content">{todo.content}</p>
                <span className="todo-item__difficulty" style={{"color": getDifficultyStyle(todo.difficulty)}}>{todo.difficulty}</span>
                <button className="todo-item__delete-button" onClick={() => {todoList.removeTodo(todo)}}></button>
            </div>
            <hr />
        </React.Fragment>
    )
};