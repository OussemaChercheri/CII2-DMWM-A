const express = require('express');
const router = express.Router();
const AuthorController = require('../controller/authorController');

// Register a new author
router.post('/register', AuthorController.register);

// Login route
router.post('/login', AuthorController.login);

// Get all authors
router.get('/all', AuthorController.getAllAuthors);

// Get author by ID
router.get('/getById/:id', AuthorController.getAuthorById);

// Delete author by ID
router.delete('/delete/:id', AuthorController.deleteAuthorById);

module.exports = router;
