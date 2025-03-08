import { useState } from "react";
import "./TaskModal.css";

function TaskModal({ closeModal, addTask }) {
    const [task, setTask] = useState({
        text: "",
        description: "",
        startDate: "",
        endDate: ""
    });

    const handleSubmit = () => {
        if (task.text.trim() !== "") {
            addTask(task);
            closeModal();
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add Task</h2>
                <input type="text" placeholder="Task Name" value={task.text} onChange={(e) => setTask({ ...task, text: e.target.value })} />
                <textarea placeholder="Task Description" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })}></textarea>
                <input type="date" value={task.startDate} onChange={(e) => setTask({ ...task, startDate: e.target.value })} />
                <input type="date" value={task.endDate} onChange={(e) => setTask({ ...task, endDate: e.target.value })} />

                <div className="modal-buttons">
                    <button onClick={handleSubmit}>Add Task</button>
                    <button className="cancel" onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default TaskModal;
