const express = require('express');
const router = express.Router();
const Author = require('../models/author');
const multer = require('multer');
const bcrypt = require('bcrypt');
const author = require('../models/author');

const mystorage = multer.diskStorage({
    destination: '.images',
    filename: (req, file, redirect) => {
        const date = Date.now();
        const file1 = date + '.' + file.mimetype.split('/')[1];
        redirect(null, file1);
        upload.filename = file1; // Assign to upload.filename instead of global variable
    }
});

const upload = multer({ storage: mystorage });

// Create account
router.post('/register', upload.any('image'), (req, res) => {
    const data = req.body;
    const author = new Author(data);
    author.image = upload.filename;

    const salt = bcrypt.genSaltSync(10);
    author.password = bcrypt.hashSync(data.password, salt);
    author.save()
        .then(savedAuthor => {
            upload.filename = ''; // Reset filename after saving
            res.status(200).send(savedAuthor);
        })
        .catch(error => {
            console.error('Error saving author:', error);
            res.status(500).send('Internal server error');
        });
});

// Login
router.post('/login', (req, res) => {
    Author.findOne({email:data.email})//bch ntestou bl mail
    .then()
    .catch(
        (err)=>{
            console.error("Error",err)
        }
    )
});

// Get all authors
router.get('/all', (req, res) => {
    // Implement logic to fetch all authors
});

// Get author by ID
router.get('/getbyId/:id', (req, res) => {
});

// Delete author by ID
router.delete('/delete/:id', (req, res) => {
});

// Update author by ID
router.put('/update/:id', (req, res) => {
});

module.exports = router;
