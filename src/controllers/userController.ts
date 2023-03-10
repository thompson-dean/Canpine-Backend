import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

const User = require('../models/userModel')

// @description     Get Users
// @route           GET api/users
// @access          Private
const getUsers = asyncHandler(async (req: any, res: Response) => {
    const users = await User.find()

    res.status(200).json(users)
})

// @description     Create User
// @route           POST api/users
// @access          Private
const createUser = asyncHandler(async (req: Request, res: Response) => {
  
    if (!req.body.user) {
      res.status(400);
      throw new Error('Please provide all user details');
    }
  
    const user = await User.create({
        user: req.body.user
    });
  
    res.status(201).json({ message: 'User created successfully', user });
  });

// @description     Update User
// @route           PUT api/users/:id
// @access          Private
const updateUser = asyncHandler(async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedUser)
})

// @description     Delete User
// @route           DELETE api/users/:id
// @access          Private
const deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }

    await user.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getUsers, 
    createUser, 
    updateUser, 
    deleteUser
}