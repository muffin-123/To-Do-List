import React from 'react';

export default function TaskRow({ task, onEdit, onDelete }) {
  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.status}</td>
      <td>{new Date(task.deadline).toLocaleString()}</td>
      <td>
        <button className="btn btn-sm btn-primary" onClick={() => onEdit(task)}>Edit</button>{' '}
        <button className="btn btn-sm btn-danger"  onClick={() => onDelete(task._id)}>Delete</button>
      </td>
    </tr>
  );
}
