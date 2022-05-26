import mongoose from "mongoose"

export const BookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    score: {type:Number, required:true}
}, { timestamps: true });

const Book = mongoose.model("Book", BookSchema);
export default Book;