
import './App.css';
import { useState } from 'react';
import { TaskItem } from './TaskItem';

function App() {

  const [tasks, setTasks] = useState([
    {
      isCompleted: true,
      name: "Learn React",
    },
    {
      isCompleted: false,
      name: "Learn Components",
    },
    {
      isCompleted: true,
      name: "Learn Logic",
    }
]);

  const [textValue, setTextValue] = useState("");
  const handleTaskchange = (index) => () => {
    const arr = [...tasks];
    arr[index].isCompleted = !arr[index].isCompleted;
    setTasks(arr);
  }

  const handleSubmitTask =(event) => {
    event.preventDefault(); 
    console.log(textValue);
    newTask(textValue);

  }

  const handleTextChange = (event) =>{
    const value = event.target.value;
    setTextValue(value);
  }

  const newTask = (textValue) => {
    const newTask = {
      isCompleted: false,
      name: textValue,
    }
    setTasks([...tasks, newTask]);
  }
  return (
    <main>
      <form onSubmit={handleSubmitTask} >
        <input value={textValue} onChange={handleTextChange} type="text" placeholder="Task name"/>
        <button> Create Task </button>
      </form>

      <ul>
        {tasks.map((task, index) =>{
          return (
            <TaskItem isChecked={task.isCompleted} 
            taskName={task.name} 
            onTaskChange={handleTaskchange (index)} />
          );
        })}
        
      </ul>

    </main>
  );
}

export default App;
