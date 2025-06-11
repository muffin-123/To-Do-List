const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title:    { type: String, required: true },
  status:   { type: String, enum: ['Pending','Ongoing','Completed'], default: 'Pending' },
  deadline: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
