const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    image: {
        type: String,
        default: null
    },
    user_type: {
        type: String,
        default: 'user'
    },
    status: {
        type: Number,
        default: 0
    },
    verify_code: {
        type: String,
        default: null
    },
    email_verified: {
        type: Number,
        default: 0
    },
    provider: String,
    forget_code: {
        type: String,
        default: null
    },
    token: String,
    salt: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
