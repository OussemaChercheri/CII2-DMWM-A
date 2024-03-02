const express = require('express');
const router = express.Router();
const Author = require('../models/author');
const multer = require('multer');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');

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

//Login
router.post('/login', (req, res) => {
    let data=req.body;
    
   
    if (!data || !data.email) {
        return res.status(400).send('Invalid request email is missing');
    }
    Author.findOne({email:data.email})//bch ntestou bl mail
    .then(
        (author)=>{
            if(!author)
            {
                res.status(404).send('Author is not found');
            }else{
                let valid=bcrypt.compareSync(data.password, author.password)
                if (!valid){
                    res.status(401).send('email or password invalid');
                }else{
                   
                    let payload = {
                        _id:author._id,
                        email:author.email,
                        fullname:author.name + '' + author.lastName
                    }
                    //nasn3ou token bl var li feh les attributs w secret key li nverifiw bih token 
                    let token=jwt.sign(payload,'annestouna123');
                    res.send({mytokentoken})
                }
            }
        })
    .catch(
        (err)=>{
            console.error(Error,err)
        }
    )
});



// Get all authors
router.get('/all', (req, res) => {
   
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
