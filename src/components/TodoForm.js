import React, { useRef } from "react";

const TodoForm = ({ setList }) => {
  const inputRef = useRef(null);
  const addTask = () => {
    console.log(inputRef.current.value);
    if (inputRef.current.value) {
      setList((list) => [
        ...list,
        { isChecked: false, textToDo: inputRef.current.value },
      ]);
    } else {
      alert("Please enter a task");
    }
  };

  return (
    <div>
      <input placeholder="Please enter a task" ref={inputRef} type="text" />
      <button onClick={() => addTask()}>Add a task</button>
    </div>
  );
};

export default TodoForm;
