const Author = require('../models/author');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AuthorController = {
    register: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            const newAuthor = new Author({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            });

            const savedAuthor = await newAuthor.save();
            const { password, ...data } = savedAuthor.toJSON();
            res.status(200).send(data);
        } catch (error) {
            console.error('Error saving author:', error);
            res.status(500).send('Internal server error');
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).send('Invalid request. Email or password is missing.');
            }

            const author = await Author.findOne({ email });
            if (!author) {
                return res.status(404).send('Author not found.');
            }

            const validPassword = await bcrypt.compare(password, author.password);
            if (!validPassword) {
                return res.status(401).send('Invalid password.');
            }

            const token = jwt.sign({ _id: author._id }, 'your_secret_key_here');
            res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
            res.send({ message: 'Login successful.' });
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).send('Internal server error');
        }
    },

    getAllAuthors: async (req, res) => {
        try {
            const authors = await Author.find({});
            res.status(200).send(authors);
        } catch (error) {
            console.error('Error fetching authors:', error);
            res.status(500).send('Internal server error');
        }
    },

    getAuthorById: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id);
            if (!author) {
                return res.status(404).send('Author not found.');
            }
            res.status(200).send(author);
        } catch (error) {
            console.error('Error fetching author by ID:', error);
            res.status(500).send('Internal server error');
        }
    },

    deleteAuthorById: async (req, res) => {
        try {
            const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
            if (!deletedAuthor) {
                return res.status(404).send('Author not found.');
            }
            res.status(200).send('Author deleted successfully.');
        } catch (error) {
            console.error('Error deleting author:', error);
            res.status(500).send('Internal server error');
        }
    }
};

module.exports = AuthorController;
