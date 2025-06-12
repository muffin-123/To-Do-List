const router = require('express').Router();
const Task   = require('../models/Task');

// GET all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find().sort({ deadline: 1 });
  res.json(tasks);
});

// POST create a task
// routes/tasks.js
router.post('/', async (req, res) => {
  try {
    const { title, status, deadline } = req.body;
    console.log('Body received:', req.body);
    const task = await Task.create({ title, status, deadline });
    return res.status(201).json(task);
  } catch (err) {
    console.error('Error creating task:', err);
    return res.status(500).json({ error: err.message });
  }
});


// PUT update a task
router.put('/:id', async (req, res) => {
  const { title, status, deadline } = req.body;
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { title, status, deadline },
    { new: true }
  );
  res.json(task);
});

// DELETE a task
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
