/* 
    Exclude的作用是排除掉相同的属性
*/

type ExcludeTodo = {
  age: number;
};

const excludeTodo: {
  [K in Exclude<keyof Todo, keyof ExcludeTodo>]: Todo[K];
} = {
  title: "",
  name: "",
};

type MyExclude<
  T extends PropertyKey,
  U extends PropertyKey
> = T extends U ? never : T;

const myExcludeTodo: {
  [K in Exclude<keyof Todo, keyof ExcludeTodo>]: Todo[K];
} = {
  title: "",
  name: "",
};
