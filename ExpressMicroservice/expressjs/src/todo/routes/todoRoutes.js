const express = require('express');
const TodoController = require('../controller/todoController');

const router = express.Router();
const todoController = new TodoController();

router.post('/', todoController.createTodo);
router.get('/:id', todoController.getTodoById);
router.get('/', todoController.getAllTodos);
router.put('/:id', todoController.updateTodoById);
router.delete('/:id', todoController.deleteTodoById);

module.exports = router;