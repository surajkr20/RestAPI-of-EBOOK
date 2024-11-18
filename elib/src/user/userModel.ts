
import mongoose from "mongoose";
import {User} from "./UserTypes"

const userSchema = new mongoose.Schema<User>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

// creation of user model (and if you overwrite this, so you can pass another argument who called collection name)
export default mongoose.model<User>('User',userSchema, 'authors');