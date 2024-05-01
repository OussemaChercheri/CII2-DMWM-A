
const userController = require('../controllers/user.controller');

const express= require('express');

const verifyToken = require('../utils/verifyToken')



const router = express.Router()

const {getAllUsers, getOneUser, updateUser, deleteUser, userName } = userController;

const  {checkToken, checkUser}  = verifyToken;




//users

router.get('/userName',checkToken, userName)
router.get('/users',  getAllUsers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser)




module.exports = router
