import Returnbook from "../model/returnbook.model.js";


export function createReturnbook(input) {
    return Returnbook.create(input)
}


export function getAllReturnbook() {
    return Returnbook.find()
}


export function findReturnbookSchema(id) {
    return Returnbook.findOne({ _id: id })
}
