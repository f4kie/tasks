const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Criar tarefa
router.post('/', async (req, res) => {
  const newTask = new Task(req.body);
  try {
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Obter todas as tarefas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Atualizar tarefa
router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Deletar tarefa
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
