/* eslint-disable no-unused-vars */
const { connect } = require("./connectDB.js");
const Todo = require("./todo_model.js");

const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.addTask({
      title: "Secomd Item",
      dueDate: new Date(),
      completed: false,
    });
    console.log(`Created todo with ID : ${todo.id}`);
  } catch (error) {
    console.error(error);
  }
};

const countData = async () => {
  try {
    const TotalCount = await Todo.count();
    console.log(`There are ${TotalCount} items in the table.`);
  } catch (error) {
    console.error(error);
  }
};

const totalData = async () => {
  try {
    const tableData = await Todo.findAll({
      where: {
        completed:false,
      },
      order: [
        ['id','ASC']
      ]
    })

    const todoList = tableData.map((todo) => todo.displayableString()).join("\n");
    console.log(`${todoList}.`);
  } catch (error) {
    console.error(error);
  }
};

const getSingleTodo = async () => {
  try {
    const todo = await Todo.findOne({
      where: {
        completed: false,
      },
      order: [["id", "DESC"]],
    });

    console.log(todo.displayableString());
  }catch (error) {
    console.error(error);
  }
};

const updateItem = async(id) => {
  try {
    const todo = await Todo.update(
      {completed:true},
      {
        where: {
          id: id,
        },
      }
    );

    
  } catch (error) {
    console.error(error);
  }
};

const deleteItem = async(id) => {
  try{
    const deleteRow = await Todo.destroy({
      where:{
        id : id
      }
    });
    console.log(`Deleted ${deleteRow} row`);
  }catch (error){
    console.error(error);
  }
}

(async () => {
  await totalData();
  await updateItem(8);
  await totalData();
})();


