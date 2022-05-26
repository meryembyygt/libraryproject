import express from "express"
import dotenv from "dotenv"
import connect from "./db/connect.js";
import cors from "cors"
import { createUserHandler, getAllUserHandler, setUserBorrowBookHandler } from "./controller/user.controller.js";
import { createBookHandler, getAllBookHandler } from "./controller/book.controller.js";
import { createBorrowbookHandler, getAllBorrowbookHandler } from "./controller/borrowbook.controller.js";
import { createReturnbookHandler, getAllReturnbookHandler } from "./controller/returnbook.controller.js";

dotenv.config()
const app = express()
const router = express.Router()

const port = process.env.PORT
const host = process.env.HOST


// User
router.post("/users", createUserHandler)
router.get("/users", getAllUserHandler)


// Book
router.post("/books", createBookHandler)
router.get("/books", getAllBookHandler)


//Borrow Book
router.post("/borrow/users", createBorrowbookHandler)
router.get("/get/allusers", getAllBorrowbookHandler)
router.get("/setborrow/users", setUserBorrowBookHandler)


// Return Book 
router.post("/return/users", createReturnbookHandler)
router.get("/return/users", getAllReturnbookHandler)


app.use(express.json());
app.use(cors())
app.get("/test", (req,res)=> {
    res.send("Invent Task Project API");
})
app.use("/", router)

app.listen(port, host, async () => {
    await connect()
    console.log(`Server listening at http://${host}:${port}`)
})