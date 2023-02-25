import express, { Request, Response } from 'express'
const router = express.Router()
const { 
    getUsers, 
    createUser, 
    updateUser, 
    deleteUser 
} = require('../controllers/userController')

router.route('/').get(getUsers).post(createUser)
router.route('/:id').put(updateUser).delete(deleteUser)

module.exports = router