/* eslint-disable no-unused-vars */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async addTask(params) {
      return await Todo.create(params);
    }
    static async showList() {
      console.log("My Todo list \n");

      console.log("Overdue");
      // FILL IN HERE
      console.log("\n");

      console.log("Due Today");
      // FILL IN HERE
      console.log("\n");

      console.log("Due Later");
      // FILL IN HERE
    }

    static async overdue() {
      // FILL IN HERE TO RETURN OVERDUE ITEMS
      
      var pastDate = new Date(Date.now() - 864e5);
      const duedate = pastDate.toISOString().split("T")[0];
      const overdueTodoList = await Todo.findAll({
        where:{
          dueDate : duedate
        }
      });
      const overdueTodos = overdueTodoList.map((eachTodo) => eachTodo.displayableString().join("\n"));
      console.log(overdueTodos);
    }

    static async dueToday() {
      // FILL IN HERE TO RETURN ITEMS DUE tODAY
      var presentDate = new Date();
      const duedate = presentDate.toISOString().split("T")[0];
      const duetodayTodoList = await Todo.findAll({
        where:{
          dueDate : duedate
        }
      });
      const duetodayTodos = duetodayTodoList.map((eachTodo) => eachTodo.displayableString().join("\n"));
      console.log(duetodayTodos);

    }

    static async dueLater() {
      // FILL IN HERE TO RETURN ITEMS DUE LATER
      var presentDate = new Date();
      presentDate.setDate(presentDate.getDate()+1);
      var duedate = presentDate.toISOString().split("T")[0];
      const duetomorrowTodoList = await Todo.findAll({
        where:{
          dueDate : duedate
        }
      });
      const duetomorrowTodos = duetomorrowTodoList.map((eachTodo) => eachTodo.displayableString().join("\n"));
      console.log(duetomorrowTodos);
    }

    static async markAsComplete(id) {
      // FILL IN HERE TO MARK AN ITEM AS COMPLETE
      const todo = await Todo.update(
        {completed:true},
        {
          where: {
            id: id,
          },
        }
      );
      console.log(todo.displayableString());

    }

    static associate(models) {
      // define association here
    }
    displayableString() {
      let checkbox = this.completed ? "[x]" : "[ ]";
      return `${this.id}. ${checkbox} ${this.title} ${this.dueDate}`;
    }
  }
  Todo.init({
    title: DataTypes.STRING,
    dueDate: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};