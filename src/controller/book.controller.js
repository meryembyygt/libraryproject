import express from "express";
import { createBook, getAllBook } from "../service/book.service.js";


// @route   POST| /create/book
// @desc    Its create one books schema.
export async function createBookHandler(req, res) {
    try {
        let data = req.body
        let book = await createBook({ ...data })
        res.send(`Book ${book.name} has been created.`)
    } catch (e) {
        res.status(400).json({ success: false, error: e.message })
    }
  
}


// @route   GET /getAll/books
// @desc    Getting book list with ids and names
export async function getAllBookHandler(req, res) {
    try {
        let books = await getAllBook()
        res.send(books)
    } catch (e) {
        res.status(400).json({ success: false, messaga: e.message })
    }
}
