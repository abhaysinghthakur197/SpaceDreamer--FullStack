const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        // required: true
    },
    profileImageURL: {
        type: String,
        default: './public/default.png',
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    }
    
}, { timestamps: true});

const User = model('user',userSchema);

module.exports = User;