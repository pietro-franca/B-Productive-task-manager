let lists = []

// List = { id, title, tasks }

const listModel = {
  getAllLists()
  {
    return lists
  },

  getListById(id)
  {
    return lists.find(list => list.id === id)
  },

  createList(title, tasks = []) //passa um valor padrão
  {
    const list = {
      id: Date.now().toString(),
      title: title,
      tasks: tasks
    }
    lists.unshift(list)
    return list
  },

  deleteList(id)
  {
    const index = lists.findIndex(list => list.id === id)
    if (index !== -1) lists.splice(index, 1)
  },

  createTask(listId, taskContent)
  {
    const task = {
      id: Date.now().toString(),
      content: taskContent,
      completed: false
    }
    const list = lists.find(list => list.id === listId)
    if(list) list.tasks.unshift(task)
  },

  updateTask(taskId, listId)
  {
    const list = lists.find(list => list.id === listId)
    if (!list) return

    const index = list.tasks.findIndex(task => task.id === taskId)
    if(index !== -1) list.tasks[index].completed = true
  }
}

module.exports = listModel