const deleteItem = document.querySelectorAll('.del')
const markCompleted =  document.querySelectorAll('span.not')
const unMarkCompleted =  document.querySelectorAll('span.completed')


Array.from(deleteItem).forEach(element => {
    element.addEventListener('click', deleteTodo)
})

Array.from(markCompleted).forEach(element => {
    element.addEventListener('click', markTodo)
})

Array.from(unMarkCompleted).forEach(element => {
    element.addEventListener('click', markIncomplete )
} )


async function deleteTodo(){
    try {
        const item = this.parentNode.dataset.id

        const response =  await fetch('/todos/deleteTodo', {
            method : 'delete',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                'itemTodo' : item
            })
        })

        const data = response.json()
        console.log(data)
        location.reload()
        
    } catch (error) {
       console.error(error) 
    }
}


async function markTodo(){
    try {
        const item = this.parentNode.dataset.id

        const response =  await fetch('/todos/markTodo', {
            method : 'put',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                'itemTodo' : item
            })
        })

        const data = response.json()
        console.log(data)
        location.reload()
        
    } catch (error) {
       console.error(error) 
    }
}

async function markIncomplete(){
    try {
        const item = this.parentNode.dataset.id

        const response =  await fetch('/todos/unMarkTodo', {
            method : 'put',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                'itemTodo' : item
            })
        })

        const data = response.json()
        console.log(data)
        location.reload()
        
    } catch (error) {
       console.error(error) 
    }
}