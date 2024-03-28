/* 
    Record的作用是行成新的类型 以K为key T为值的 新类型
*/

interface Todo {
  title: string;
  name: string;
  age: number;
}

type RecordTodo = Record<"todo", Todo>;

const recordTodo: RecordTodo = {
  todo: {
    title: "",
    name: "",
    age: 0,
  },
};

type MyRecord<P extends string | number | symbol, T> = {
  [K in P]: T;
};

const myRecordTodo: MyRecord<"key", Todo> = {
  key: {
    title: "",
    name: "",
    age: 0,
  },
};
