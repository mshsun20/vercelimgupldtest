const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:'config.env'})
const url = process.env.CONN_URL

const conn = async () => {
    try {
        const result = await mongoose.connect(url)
        if (result) {
            console.log(`DB Successfully Connected...`)
        }
    } catch (error) {
        console.error(error)
    }
}
conn()