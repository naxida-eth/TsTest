/* 
Omit的作用是 排除掉部分属性
*/

interface Todo {
  title: string;
  name: string;
  age: number;
}

// {
//     title: string;
// }
type OmitTodo = Omit<Todo, "age" | "name">;

// 手写版本

// type MyOmit<T, P extends keyof T> = {
//   [K in Exclude<keyof T, P>]: T[P];
// };

type MyOmit<T, P extends keyof T> = {
  [K in keyof T as K extends P ? never : K]: T[K];
};

const todoOmit: MyOmit<Todo, "age" | "name"> = {
  title: "",
};
