import axios from 'axios';

const base = axios.create({
  baseURL: '/api/tasks'   // ← no colon or hostname here
});

export const fetchTasks  = () => base.get('/');
export const createTask  = data => base.post('/', data);
export const updateTask  = (id, data) => base.put(`/${id}`, data);
export const deleteTask  = id => base.delete(`/${id}`);
