const express = require("express")
const listsController = require("./controllers/listsController")

const router = express.Router()

router.get('/', listsController.index)
router.get('/app', listsController.showLists)
router.get('/app/nova-lista', listsController.create)
router.get('/app/:id', listsController.showTasks)

router.post('/app/delete', listsController.delete)
router.post('/app/save', listsController.save)
router.post('/app/saveTask/:id', listsController.saveTask)
router.post('/app/updateTask/:id', listsController.updateTask)

module.exports = router