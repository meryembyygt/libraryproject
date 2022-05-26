import express from "express";
import { createReturnbook, getAllReturnbook } from "../service/returnbook.service.js";


// @route   POST| /create/returnbook
// @desc    Its create one returnbooks schema.
export async function createReturnbookHandler(req, res) {
    try {
        let data = req.body
        let returnbook = await createReturnbook({ ...data })
        res.send(`Returnbook ${returnbook.name} has been created.`)
    } catch (e) {
        res.status(400).json({ success: false, error: e.message })
    }
}


// @route   GET /getAll/returnbooks
// @desc    Getting returnbook list with ids and names
export async function getAllReturnbookHandler(req, res) {
    try {
        let returnbooks = await getAllReturnbook()
        res.send(returnbooks)
    } catch (e) {
        res.status(400).json({ success: false, messaga: e.message })
    }
}
