const express =  require('express')
const app = express()
const connectDB = require('./config/database')
const mainRoute = require('./routes/mainRoute')
const todosRoute =  require('./routes/todosRoute')

require('dotenv').config({ path : './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.use('/', mainRoute)
app.use('/todos', todosRoute)

app.listen(process.env.PORT, () => {
    console.log('connected to a local server')
})