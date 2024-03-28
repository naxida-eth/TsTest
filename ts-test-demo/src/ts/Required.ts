/* 
    Required的作用是将属性变成必选的
*/

interface TodoRequired {
  title?: string;
  name?: string;
  age?: number;
}

type TodoRequiredTodo = Required<TodoRequired>;

const requiredTodo: TodoRequiredTodo = {
  title: "",
  name: "",
  age: 0,
};
