import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    user: {
        id: { type: String, required: true },
        username: { type: String, required: true },
        location: { type: String, required: true },
        status: { type: String, required: true },
        beverage: { type: String, required: true },
        stars: { type: Number, required: true },
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('User', userSchema)


//     MODEL IN SWIFT
//     let id: Int
//     let name: String
//     let place: String
//     let status: String
//     let item: String
//     let star: Int