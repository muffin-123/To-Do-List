import React from 'react';
import TaskRow from './TaskRow';

export default function TodoList({ tasks, onEdit, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Task</th><th>Status</th><th>Deadline</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(t => (
          <TaskRow key={t._id} task={t} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}
