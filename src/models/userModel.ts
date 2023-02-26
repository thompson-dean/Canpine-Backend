import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    text: {
        // id: String,
        type: String,
        // location: String,
        // status: String,
        // beverage: String,
        // stars: Number,
        required: [true, 'please add a text value']
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