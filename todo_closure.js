/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    const overDue = [];
    for (let i = 0; i < all.length; i++) {
      if (todos.all[i].dueDate == "yesterday") {
        overDue.push(todos.all[i]);
      }
    }
    return overDue;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    const dtoday = [];
    for (let i = 0; i < all.length; i++) {
      if (todos.all[i].dueDate == "today") {
        dtoday.push(todos.all[i]);
      }
    }
    return dtoday;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    const dueLat = [];
    for (let i = 0; i < all.length; i++) {
      if (todos.all[i].dueDate == "tomorrow") {
        dueLat.push(todos.all[i]);
      }
    }
    return dueLat;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
    const str = "";
    for (let j = 0; j < list.length; j++) {
      if (list[j].dueDate == "yesterday") {
        str += "[ ] " + list[j].title + " " + list[j].dueDate + "\n";
      } else if (list[j].dueDate == "today") {
        if (list[j].completed) {
          str += "[x] " + list[j].title + " " + list[j].dueDate + "\n";
        } else {
          str += "[ ]" + list[j].title + " " + list[j].dueDate + "\n";
        }
      } else {
        str += "[ ] " + list[j].title + " " + list[j].dueDate + "\n";
      }
    }
    return str;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
