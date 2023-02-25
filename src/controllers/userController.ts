import express, { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

// @description     Get Users
// @route           GET api/users
// @access          Private
const getUsers = asyncHandler(async (req: any, res: Response) => {
    res.status(200).json({ message: "Get Users" })
})

// @description     Create User
// @route           POST api/users
// @access          Private
const createUser = asyncHandler(async (req: Request, res: Response) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: "Create Users" })
})

// @description     Update User
// @route           PUT api/users/:id
// @access          Private
const updateUser = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: `Update User ${req.params.id}` })
})

// @description     Delete User
// @route           DELETE api/users/:id
// @access          Private
const deleteUser = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: `Delete User ${req.params.id}` })
})

module.exports = {
    getUsers, 
    createUser, 
    updateUser, 
    deleteUser
}