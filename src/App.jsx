import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import TaskModal from "./components/TaskModal";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add Task
  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Edit Task (Now Supports Editing Name, Description, and Dates)
  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task));
  };

  return (
    <div className="app-container">
      <Header openModal={() => setIsModalOpen(true)} />
      <ToDoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
      {isModalOpen && <TaskModal closeModal={() => setIsModalOpen(false)} addTask={addTask} />}
    </div>
  );
}

export default App;
