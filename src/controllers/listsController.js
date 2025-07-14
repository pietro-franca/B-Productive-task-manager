const listModel = require("../models/listModel")

const listsController = {
  // GET /
  index: (req, res) => {
    res.render('index')
  },

  // GET /app
  showLists: (req, res) => {
    const lists = listModel.getAllLists()

    res.render('lists', { lists })
  },

  // POST /app/delete
  delete: (req, res) => {
    const id = req.body.deleteId
    listModel.deleteList(id)

    res.redirect('/app')
  },

  // GET /app/:id
  showTasks: (req, res) => {
    const id = req.params.id
    const list = listModel.getListById(id)
    if (!list) return res.status(404).send("Lista não encontrada")

    res.render('tasks', { list })
  },

  // POST /app/saveTask/:id
  saveTask: (req, res) => {
    const id = req.params.id
    const taskContent = req.body.task
    listModel.createTask(id, taskContent)

    res.redirect(`/app/${id}`)
  },

  // POST /app/updateTask/:id
  updateTask: (req, res) => {
    const listId = req.params.id
    const taskId = req.body.taskId
    
    listModel.updateTask(taskId, listId)

    res.redirect(`/app/${listId}`)
  },

  // GET /app/nova-lista
  create: (req, res) => {
    res.render('newList')
  },

  // POST /app/save
  save: (req, res) => {
    const { listTitle } = req.body
    listModel.createList(listTitle)

    res.redirect('/app')
  }
}

module.exports = listsController