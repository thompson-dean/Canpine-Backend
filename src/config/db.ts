import mongoose from 'mongoose'
mongoose.set('strictQuery', true)

const mongoURI = process.env.MONGO_URI ?? '';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI)
        
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch {
        console.log(Error);
        process.exit(1);
    }
}

module.exports = connectDB