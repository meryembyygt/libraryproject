import express from "express";
import { createUser, findUser, getAllUser } from "../service/user.service.js";


// @route   POST| /create/user
// @desc    Its create one users schema.
export async function createUserHandler(req, res) {
    try {
        let data = req.body
        let user = await createUser({ ...data })
        res.send(`User ${user.name} has been created.`)
    } catch (e) {
        res.status(400).json({ success: false, error: e.message })
    }
}


// @route   GET /getAll/users
// @desc    Getting user list with ids and names
export async function getAllUserHandler(req, res) {
    try {
        let users = await getAllUser()
        res.send(users)
    } catch (e) {
        res.status(400).json({ success: false, messaga: e.message })
    }
}


// @route   GET/create/borrowbooks
// @desc    Getting user list with ids and names
export async function setUserBorrowBookHandler(req, res) {
    try {
        let {book, userName} = req.body;
        let user = await findUser(userName)
        if (!user) res.status(404).send("User not found.")
        await addbook(user._id,newbook)
        res.send("OK")
    } catch (e) {
        res.status(400).json({ success: false, messaga: e.message })
    }
}