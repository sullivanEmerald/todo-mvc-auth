
const Todo = require('../model/todos')

module.exports = {
    getPost :  async (req, res) => {
        try {
            const item =  await Todo.find({userId : req.user.id})
            const remainItem  = await Todo.countDocuments({userId : req.user.id,  completed : false})
            res.render('todos.ejs', { item , remainItem, userId : req.user})
        } catch (error) {
          console.error(error)  
        }
    },

    createPost : async (req, res) => {
        try {
          await Todo.create({
            task : req.body.task,
            completed : false,
            userId : req.user.id
          })
          
          console.log('item added to the database')
          res.redirect('/todos')
                    
        } catch (error) {
            console.error(error)  
        }
    },

    deletePost: async (req, res) => {
        try {
            await Todo.findOneAndDelete({ _id : req.body.itemTodo})
            console.log('item have been deleted')
            res.json('item have been deleted')
        } catch (error) {
            console.error(error) 
        }
    },  

    markPost : async (req, res) => {
        try {
            await Todo.findOneAndUpdate({_id : req.body.itemTodo}, {
                completed : true
            })
            console.log('Todo Update')
            res.json('todo done')

        } catch (error) {
            console.error(error) 
        }
    },

    markIncomplete : async (req, res) => {
        try {

            await Todo.findOneAndUpdate({ _id : req.body.itemTodo}, {
                completed : false
            })
            console.log('reverse update others')
            res.json('reverse update done')
        } catch (error) {
            console.error(error)   
        }
    }

    


}




