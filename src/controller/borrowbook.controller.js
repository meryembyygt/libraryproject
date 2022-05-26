import express from "express";
import { createBorrowbook, getAllBorrowbook } from "../service/borrowbook.service.js";


// @route   POST| /create/borrowbook
// @desc    Its create one borrowbooks schema.
export async function createBorrowbookHandler(req, res) {
    try {
        let data = req.body
        let borrowbook = await createBorrowbook({ ...data })
        res.send(`Borrowbook ${borrowbook.name} has been created.`)
    } catch (e) {
        res.status(400).json({ success: false, error: e.message })
    }
}


// @route   GET /getAll/borrowbooks
// @desc    Getting borrowbook list with ids and names
export async function getAllBorrowbookHandler(req, res) {
    try {
        let borrowbooks = await getAllBorrowbook()
        res.send(borrowbooks)
    } catch (e) {
        res.status(400).json({ success: false, messaga: e.message })
    }
}
