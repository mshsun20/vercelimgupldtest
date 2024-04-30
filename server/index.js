const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
require('./db/dbcon')
const routes = require('./routes/route')
const session = require('express-session')
const multer = require('multer')

const app = express()
dotenv.config({path:'config.env'})

// middlewares
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3300', 'http://localhost:3600', 'https://luckydrawapp-admin.vercel.app'],
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS",
    credentials: true,
    optionsSuccessStatus: 200
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({
    secret: 'AS59S83gY6f0t1TVt1Y',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000*60*60*24*30
    }
}))
app.use(express.static('public'))
app.use('/', routes)

// env variables
// const port = process.env.PORT || 5050
// const host = process.env.HOST || 'localhost'

// app.listen(port, host, () => {
//     console.log(`Server started at http://${host}:${port}`)
// })


// image storage setup
const imgconfig = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null, 'public')
    },
    filename: (req,file,callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
})
const isImage = (req,file,callback) => {
    if (file.mimetype.startsWith('image')) {
        callback(null, true)
    }
    else {
        callback(null, Error(`Only image File is Allowed.`))
    }
}
const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
})


app.route('/').get((req, res) => {
    res.json({message:`Server is Live...`, statuscode:200})
})

app.post('/uploadimg', upload.single('imgfl'), (req, res) => {
    console.log(req.file)
})


module.exports.handler = serverless(app)