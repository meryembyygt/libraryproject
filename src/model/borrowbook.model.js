import mongoose from "mongoose"

export const BorrowbookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    score: {type:Number, required:true}
}, { timestamps: true });

const Borrowbook = mongoose.model("Borrowbook", BorrowbookSchema);
export default Borrowbook;