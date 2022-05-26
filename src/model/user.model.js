import mongoose from "mongoose"


export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    books: {type:Object}
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;