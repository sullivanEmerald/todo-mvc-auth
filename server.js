const express =  require('express')
const app = express()
const mongoose = require('mongoose')
const passport =  require('passport')
const session =  require('express-session')
const MongoStore = require('connect-mongo')
const flash =  require('express-flash')
const logger =  require('morgan')
const connectDB = require('./config/database')
const mainRoute = require('./routes/mainRoute')
const todosRoute =  require('./routes/todosRoute')

require('dotenv').config({ path : './config/.env'})

// passport config

require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.use(logger('dev'))

app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.DB_STRING,
      })
    })
  )

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoute)
app.use('/todos', todosRoute)

app.listen(process.env.PORT, () => {
    console.log('connected to a local server')
})