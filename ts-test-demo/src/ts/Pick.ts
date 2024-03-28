/* 
Pick的作用是 指定那些属性为一个新的类型
*/

interface Todo {
  title: string;
  name: string;
  age: number;
}

// {
//     title: string;
// }
type PickTodo = Pick<Todo, "age" | "name">;

const pickTodo: PickTodo = {
  age: 0,
  name: "",
};

// 手写版本

type MyPick<T, P extends keyof T> = {
  [K in T extends P ? never : P]: T[P];
};

const todoMyPick: MyPick<Todo, "age" | "name"> = {
  age: "",
  name: "",
};
