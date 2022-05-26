import Borrowbook from "../model/borrowbook.model.js";


export function createBorrowbook(input) {
    return Borrowbook.create(input)
}


export function getAllBorrowbook() {
    return Borrowbook.find()
}


export function findBorrowbookSchema(id) {
    return Borrowbook.findOne({ _id: id })
}
