const express = require('express');
const router = express.Router();
const categoryController = require('../controller/category.controller');

router.post('/', categoryController.createCategory);

router.get('/', categoryController.getCategories);

router.get('/:id', categoryController.getCategoryById);

module.exports = router;
