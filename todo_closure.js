/* eslint-disable no-const-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    const overDue = []
    for (let i = 0; i < all.length; i++) {
      if (todos.all[i].dueDate == 'yesterday') {
        overDue.push(todos.all[i])
      }
    }
    return overDue
  }

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    const dtoday = []
    for (let i = 0; i < all.length; i++) {
      if (todos.all[i].dueDate == 'today') {
        dtoday.push(todos.all[i])
      }
    }
    return dtoday
  }

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    const dueLat = []
    for (let i = 0; i < all.length; i++) {
      if (todos.all[i].dueDate == 'tomorrow') {
        dueLat.push(todos.all[i])
      }
    }
    return dueLat
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
    const str = ''
    for (let j = 0; j < list.length; j++) {
      if (list[j].dueDate == 'yesterday') {
        str += '[ ] ' + list[j].title + ' ' + list[j].dueDate + '\n'
      } else if (list[j].dueDate == 'today') {
        if (list[j].completed) {
          str += '[x] ' + list[j].title + ' ' + list[j].dueDate + '\n'
        } else {
          str += '[ ]' + list[j].title + ' ' + list[j].dueDate + '\n'
        }
      } else {
        str += '[ ] ' + list[j].title + ' ' + list[j].dueDate + '\n'
      }
    }
    return str
  }

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList }
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList()

const formattedDate = d => {
  return d.toISOString().split('T')[0]
}

const dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log('My Todo-list\n\n')

console.log('Overdue')
const overdues = todos.overdue()
const formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log('\n\n')

console.log('Due Today')
const itemsDueToday = todos.dueToday()
const formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log('\n\n')

console.log('Due Later')
const itemsDueLater = todos.dueLater()
const formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log('\n\n')
