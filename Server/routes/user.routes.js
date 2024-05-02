const express = require('express');
const { deleteUser,
        getUser,
        getUsers,
        signout,
        test,
        updateUser, } = require('../controllers/user.controller');
const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', updateUser);
router.delete('/delete/:userId', deleteUser);
router.post('/signout', signout);
router.get('/getusers', getUsers);
router.get('/:userId', getUser);

module.exports = router;