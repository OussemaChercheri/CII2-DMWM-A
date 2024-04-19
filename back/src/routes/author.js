const express = require('express');
const router = express.Router();
const Author = require('../models/author');
//const multer = require('multer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// const mystorage = multer.diskStorage({
//     destination: '/.images',
//     filename: (req, file, redirect) => {
//         const date = Date.now();
//         const file1 = date + '.' + file.mimetype.split('/')[1];
//         redirect(null, file1);
//         upload.filename = file1; // Assign to upload.filename instead of global variable
//     }
// });

//const upload = multer({ storage: mystorage });

// Create account
// router.post('/register', (req, res) => {
//     const data = req.body;
//     const author = new Author(data);
//     //author.image = upload.filename;

//     const salt = bcrypt.genSaltSync(10);
//     author.password = bcrypt.hashSync(data.password, salt);
//     author.save()
//         .then(savedAuthor => {
//             //upload.filename = ''; // Reset filename after saving
//             res.status(200).send(savedAuthor);
//         })
//         .catch(error => {
//             console.error('Error saving author:', error);
//             res.status(500).send('Internal server error');
//         });
// });
router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new Author({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    })

    const result = await user.save()

    const {password, ...data} =  result.toJSON()
    //to extracts all properties except password

    res.send(data)
    // sends the extracted data back to the client as the response
})

//Login
router.post('/login', async (req, res) => {
    try {
        const data = req.body;
        if (!data || !data.email) {
            return res.status(400).send('Invalid request email is missing');
        }
        const author = await Author.findOne({ email: data.email })//bch ntestou bl mail
        if (!author) {
            res.status(404).send('Author is not found');
        } else {
            const validpasswrd = await bcrypt.compare(data.password, author.password)
            if (!validpasswrd) {
                res.status(401).send(' invalid password');
            } else {

                //nasn3ou token bl var li feh les attributs w secret key li nverifiw bih token 
                const token = jwt.sign({ _id: author._id }, 'annestouna123');
                res.cookie('jwt',token,{
                    httpOnly:true,
                    maxAge:24*60*60*1000
                })
                
                res.send({ message:'success' })
            }
        }
    }catch(err)  {
        console.error(Error, err)
    }
});



// Get all authors
router.get('/all', (req, res) =>{
    Author.find({})
    .then(
        (authors)=>{
            res.status(200).send(authors);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    )


});

// Get author by ID
router.get('/getbyId/:id', (req, res) => {
    let id =req.params.id;
    Author.findById(id)
    .then(
        (author)=>{
            res.status(200).send(author);
        }
    ).catch(
        (err)=>{
            res.status(400).send(err);
        }
        )
}); 

// Delete author by ID
router.delete('/delete/:id', (req, res) => {
    let id =req.params.id;
    Author.findByIdAndDelete(id)
    .then(
        ()=>{
            res.status(200).send('user deleted ')
        }
    ).catch(
        (err)=>{
            res.status(400).send(err);
        }
    )
});
module.exports = router;