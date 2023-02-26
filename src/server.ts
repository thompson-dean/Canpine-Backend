import express, { Application } from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000
const app: Application = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started running on port: ${port}`))