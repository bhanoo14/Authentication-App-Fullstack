import mongoose from "mongoose";

const usermodel = mongoose.Schema({
    username: {
        type : String,
        require: true
    },
    email: {
        type : String,
        require: true,
        unique: true
    },
    password: {
        type : String,
        require: true
    },
})

const User = mongoose.model('usermodel', usermodel)
export default User