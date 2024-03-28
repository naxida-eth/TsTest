/* 
    Readonly的作用是将类型变成只读的
*/

interface Todo {
  title: string;
  name: string;
  age: number;
}

const readonlyTodo: Readonly<Todo> = {
  title: "",
  name: "",
  age: 0,
};

// 无法为“age”赋值，因为它是只读属性。
// readonlyTodo.age = 2

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

const myReadonlyTodo: MyReadonly<Todo> = {
  title: "",
  name: "",
  age: 0,
};

// 无法为“title”赋值，因为它是只读属性。
// myReadonlyTodo.title = '不能改'
