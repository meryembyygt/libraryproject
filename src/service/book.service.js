import Book from "../model/book.model.js";


export function createBook(input) {
    return Book.create(input)
}


export function getAllBook() {
    return Book.find()
}


export function findBookSchema(id) {
    return Book.findOne({ _id: id })
}
async function addbook(userId,newbook){
    return User.updateOne({ _id: userId }, { "$push": { 'books.present': newbook } })
    }