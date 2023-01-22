/* eslint-disable no-undef */
const db = require("../models");

describe("Todolist Test Suite", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  test("Should add new todo", async () => {
    const todoItemsCount = await db.Todo.count();
    await db.Todo.addTask({
      title: "Test todo",
      completed: false,
      dueDate: new Date(),
    });
    const newTodoItemsCount = await db.Todo.count();
    expect(newTodoItemsCount).toBe(todoItemsCount + 1);
  });
});



//


// const todoList = require('../todo_closure')

// const { all, markAsComplete, add } = todoList()

// describe('TodoList Test Suite', () => {
//   beforeAll(() => {
//     add({
//       title: 'Shopping',
//       completed: false,
//       dueDate: new Date().toLocaleDateString('en-CA')
//     })

//   })
//   test('Should add todo', () => {
//     const todoCount = all.length;
//     add({
//       title: 'Cricket',
//       completed: false,
//       dueDate: new Date().toLocaleDateString('en-CA')
//     })
//     expect(all.length).toBe(todoCount+1)
//   })
//   test('marking as Complete', () => {
//     expect(all[0].completed).toBe(false);
//     markAsComplete(0);
//     expect(all[0].completed).toBe(true)
//   });
//   test('checking overdue elements', () => {
//     all.forEach(element => {
//       if(element.dueDate==yesterday){
//         expect(element.dueDate).toBe(yesterday)
//       }
//     }); 
//   })
//   test('checking due today elements', () => {
//     all.forEach(element => {
//       if(element.dueDate==today){
//         expect(element.dueDate).toBe(today)
//       }
//     }); 
//   })
//   test('checking due Later elements', () => {
//     all.forEach(element => {
//       if(element.dueDate==tomorrow){
//         expect(element.dueDate).toBe(tomorrow)
//       }
//     }); 
//   })
// })
