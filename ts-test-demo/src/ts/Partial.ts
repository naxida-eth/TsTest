/* 
    Partial的作用是将属性变成可选的
*/

interface Todo {
  title: string;
  name: string;
  age: number;
}

type PartialTodo = Partial<Todo>;

const partialTodo: PartialTodo = {
  title: undefined,
  name: undefined,
  age: undefined,
};

// 手写版本

type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

const myPartialTodo: MyPartial<Todo> = {
  title: undefined,
  name: undefined,
  age: undefined,
};
