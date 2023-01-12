const express = require('express');
const { getAllTodo, createTodo, deleteItem, } = require('../controllers/itemController');

const router = express.Router();


router.route('/').post(createTodo).get(getAllTodo);
router.route('/:id').delete(deleteItem);

module.exports = router;