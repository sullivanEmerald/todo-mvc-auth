const express = require('express')
const router =  express.Router()
const { ensureAuth } =  require('../middleware/auth')
const todoContoller =  require('../controllers/todos')

router.get('/', ensureAuth, todoContoller.getPost)
router.post('/createTodo', todoContoller.createPost)
router.delete('/deleteTodo', todoContoller.deletePost)
router.put('/markTodo', todoContoller.markPost)
router.put('/unMarkTodo', todoContoller.markIncomplete)


module.exports =  router