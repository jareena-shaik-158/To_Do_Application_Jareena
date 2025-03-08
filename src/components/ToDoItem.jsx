import { useState } from "react";
import './ToDoItem.css';

function ToDoItem({ task, toggleComplete, deleteTask, editTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({
        text: task.text,
        description: task.description,
        startDate: task.startDate,
        endDate: task.endDate,
    });

    const handleEdit = () => {
        editTask(task.id, editedTask);
        setIsEditing(false);
    };

    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            {isEditing ? (
                <div className="edit-fields">
                    <input type="text" value={editedTask.text} onChange={(e) => setEditedTask({ ...editedTask, text: e.target.value })} />
                    <textarea value={editedTask.description} onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}></textarea>
                    <input type="date" value={editedTask.startDate} onChange={(e) => setEditedTask({ ...editedTask, startDate: e.target.value })} />
                    <input type="date" value={editedTask.endDate} onChange={(e) => setEditedTask({ ...editedTask, endDate: e.target.value })} />
                </div>
            ) : (
                <div>
                    <strong>{task.text}</strong>
                    <p>{task.description}</p>
                    <span>{task.startDate} - {task.endDate}</span>
                </div>
            )}

            <div className="buttons">
                {isEditing ? (
                    <button onClick={handleEdit}>Save</button>
                ) : (
                    <>
                        <button onClick={() => toggleComplete(task.id)}>Done</button>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default ToDoItem;
