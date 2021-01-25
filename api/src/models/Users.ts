import mongoose, { mongo } from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    }
});

export const User = mongoose.model("User", userSchema);
