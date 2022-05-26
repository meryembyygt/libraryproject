import mongoose from "mongoose"

export const ReturnbookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    score: {type:Number, required:true}
}, { timestamps: true });

const Returnbook = mongoose.model("Returnbook", ReturnbookSchema);
export default Returnbook;