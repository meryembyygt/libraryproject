import User from "../model/user.model.js";


export function createUser(input) {
    return User.create(input)
}


export function getAllUser() {
    return User.find()
}


export function findUser(data) {
    return User.findOne({ name: data })
}

