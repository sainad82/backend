/* eslint-disable no-undef */
const todoList = require("../todo_closure");

const { all, markAsComplete, add } = todoList();

describe("TodoList Test Suite", () => {
  test("Should add todo", () => {
    expect(all.length).toBe(0);
    add({
      title: "Shopping",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(1);
  });
  test("marking as Complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
