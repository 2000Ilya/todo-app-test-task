import React, { useState } from "react";
import { useStore } from "../../helpers/use-store";

import "./RadioButtonsBar.scss";


const RadioButtonsBar = () => {
    const [todoState, setTodoState] = useState("все");
    const todoList = useStore();

    const selectSortingOption = (value) => {
        setTodoState(value);
        todoList.setDoneOption(value);
    }

    return (
        <React.Fragment>
            <div className="form_radio_group">
                <div className="form_radio_group-item">
                    <input
                        id="radio-1"
                        type="radio"
                        value="все"
                        checked={todoState === "все"}
                        onChange={(e) => selectSortingOption(e.target.value)}
                    />
                    <label htmlFor="radio-1">Все</label>
                </div>
                <div className="form_radio_group-item">
                    <input
                        id="radio-2"
                        type="radio"
                        value="завершенные"
                        checked={todoState === "завершенные"}
                        onChange={(e) => selectSortingOption(e.target.value)}
                    />
                    <label htmlFor="radio-2">Завершенные</label>
                </div>
                <div className="form_radio_group-item">
                    <input
                        id="radio-3"
                        type="radio"
                        value="невыполненные"
                        checked={todoState === "невыполненные"}
                        onChange={(e) => selectSortingOption(e.target.value)}
                    />
                    <label htmlFor="radio-3">Невыполненные</label>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RadioButtonsBar;