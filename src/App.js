import TodoForm from './components/TodoForm';
import { useState } from 'react';
import TodosList from './components/TodosList';
import './App.css';


function App() {
  const [list, setList] = useState([]);


  return (
    <div className="App">
      <TodoForm  setList={setList}/>
      <TodosList list={list} setList={setList}/>
    </div>
  );
}

export default App;

