import React, { useState } from "react";
import { useStore } from "../../helpers/use-store";
import RadioButtonsBar from "../RadioButtonsBar/RadioButtonsBar";

import "./MenuBar.scss";


export const MenuBar = () => {
    const [difficulty, setDifficulty] = useState("любая сложность");
    const todoList = useStore();

    const sort = (value) => {
        setDifficulty(value);
        todoList.setDifficulty(value);
    };

    return (
        <div className="menu-bar">
            <select
                className="menu-bar__select-sort"
                value={difficulty}
                onChange={(e) => sort(e.target.value)}
            >
                <option value="любая сложность">Любая сложность</option>
                <option value="сложная">Сложная</option>
                <option value="средняя">Средняя</option>
                <option value="простая">Простая</option>
            </select>
            <RadioButtonsBar />
            <div className="menu-bar__button-container">
                <button
                    className="menu-bar__add-task-button"
                    onClick={() => todoList.setTodoFormShowing(true)}
                >
                    <div className="mobile-button-text">+</div>
                    <div className="standart-button-text">Новая задача</div>
                </button>
            </div>
        </div>
    );
}