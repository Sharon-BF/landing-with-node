//url's de la aplicacion del servidor

const { Router } = require('express');
const router = Router();

const {getUsers, createUsers, getUserById, updateUser, deleteUser} = require('../controllers/customerController')

//router.get('/users', getUsers);
//router.get('/users/:id', getUserById);
router.post('/users', createUsers);
//router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;