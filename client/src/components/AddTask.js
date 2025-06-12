import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function AddTask({ onSave, editingTask, cancelEdit }) {
  const [title, setTitle]       = useState('');
  const [status, setStatus]     = useState('Pending');
  const [deadline, setDeadline] = useState(new Date());

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setStatus(editingTask.status);
      setDeadline(new Date(editingTask.deadline));
    }
  }, [editingTask]);

  const handleSubmit = e => {
    e.preventDefault();
    onSave({ title, status, deadline });
    setTitle('');
    setStatus('Pending');
    setDeadline(new Date());
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3">
      <h5>{editingTask ? 'Edit Task' : 'Add Task'}</h5>

      <div className="form-group">
        <label htmlFor="title">Task</label>
        <input
          id="title"
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          className="form-select"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option>Pending</option>
          <option>Ongoing</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="deadline">Deadline</label>
        <div className="react-datepicker-wrapper">
          <DatePicker
            id="deadline"
            selected={deadline}
            onChange={date => setDeadline(date)}
            showTimeSelect
            dateFormat="Pp"
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group buttons">
        <button className="btn btn-success" type="submit">
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
        {editingTask && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
