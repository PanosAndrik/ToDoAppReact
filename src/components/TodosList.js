import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ list, setList }) => {
  return (
    <ul>
      {list.map((todo, index) => (
        <li key={todo.textToDo+index}>
          <TodoItem isChecked={todo.isChecked} textToDo={todo.textToDo} index={index} setList={setList}/>
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
