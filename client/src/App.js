import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchTasks, createTask, updateTask, deleteTask } from './services/api';
import TodoList from './components/TodoList';
import AddTask  from './components/AddTask';

function App() {
  const [tasks, setTasks]         = useState([]);
  const [editingTask, setEditing] = useState(null);

  const load = async () => {
    const res = await fetchTasks();
    setTasks(res.data);
  };

  useEffect(() => { load(); }, []);

  const handleSave = async data => {
    if (editingTask) {
      await updateTask(editingTask._id, data);
      setEditing(null);
    } else {
      await createTask(data);
    }
    load();
  };

  const handleDelete = async id => {
    if (window.confirm('Delete this task?')) {
      await deleteTask(id);
      load();
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">Todo List</h2>
      <div className="row">
        <div className="col-md-8">
          <TodoList tasks={tasks} onEdit={setEditing} onDelete={handleDelete} />
        </div>
        <div className="col-md-4">
          <AddTask
            onSave={handleSave}
            editingTask={editingTask}
            cancelEdit={() => setEditing(null)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
