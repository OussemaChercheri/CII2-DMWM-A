const express= require('express');
const authorController=require('../controllers/author.controller')
const {signUpController,loginController, forgotPwd, resetPwd} = authorController
//const {checkToken} = verifyToken


const router = express.Router()


//auth

router.post('/signup', signUpController )
router.post('/login', loginController);
router.post('/forgot', forgotPwd);
router.put('/reset/:resetLink', resetPwd);


module.exports = router