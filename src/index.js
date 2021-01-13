import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {TodoList} from "./stores/todo-list";
import {StoreProvider} from "./helpers/store-provider"


const todoList = new TodoList(JSON.parse(localStorage.getItem("todos")) || []);

ReactDOM.render(
  <StoreProvider value={todoList}>
    <App/>
  </StoreProvider>,
  document.getElementById("root")
);
