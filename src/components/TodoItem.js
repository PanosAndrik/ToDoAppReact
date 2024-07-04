import React, { useState } from "react";

const TodoItem = ({ isChecked, textToDo, index, setList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(textToDo);

  const toggleChecked = () => {
    setList((list) => {
      const newList = [...list];
      return newList.map((item, i) => {
        if (index === i) {
          return { ...item, isChecked: !item.isChecked };
        } else {
          return item;
        }
      });
    });
  };

  const deleteTask = () => {
    setList((list) => {
      const newList = [...list];
      newList.splice(index, 1);
      return newList;
    });
  };

  const saveEdit = () => {
    setList((list) => {
      const newList = [...list];
      newList[index].textToDo = newText;
      return newList;
    });
    setIsEditing(false);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={toggleChecked} />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{textToDo}</span>
      )}
      {isEditing ? (
        <button onClick={saveEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={deleteTask}>X</button>
    </div>
  );
};

export default TodoItem;
