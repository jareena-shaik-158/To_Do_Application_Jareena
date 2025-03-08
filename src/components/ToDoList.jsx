import ToDoItem from "./ToDoItem";
import './ToDoList.css';
function ToDoList({ tasks, toggleComplete, deleteTask, editTask }) {
    return (
        <div className="todo-container">
            <h2>Pending Tasks</h2>
            <div className="task-list">
                {tasks.filter(task => !task.completed).length === 0 ? <p>No pending tasks</p> :
                    tasks.filter(task => !task.completed).map(task => (
                        <ToDoItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
                    ))
                }
            </div>

            <h2>Completed Tasks</h2>
            <div className="task-list">
                {tasks.filter(task => task.completed).length === 0 ? <p>No completed tasks</p> :
                    tasks.filter(task => task.completed).map(task => (
                        <ToDoItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
                    ))
                }
            </div>
        </div>
    );
}

export default ToDoList;
