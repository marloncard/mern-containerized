import mongoose, { mongo } from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email: String
});

export const User = mongoose.model("User", userSchema);
