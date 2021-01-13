import React from "react";
import "./App.scss";
import { TodoList } from "./components/TodoList/TodoList";
import { NewTodoItemForm } from "./components/NewTodoItemForm/NewTodoItemForm";
import { MenuBar } from "./components/Menubar/MenuBar";
import { useStore } from "./helpers/use-store";
import { observer } from "mobx-react-lite";


const App = observer(() => {
    const todoList = useStore();

    return (
        <div className="App">
            {todoList.isTodoFormShowing && <NewTodoItemForm />}
            <MenuBar />
            <TodoList />
        </div>
    );
})

export default App;
