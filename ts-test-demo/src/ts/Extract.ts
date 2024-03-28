/* 
Extract 可以将传入的属性保留，其他属性排除
*/

interface ExtractTodo {
  age: number;
}

const extractTodo: {
  [K in Extract<keyof Todo, keyof ExtractTodo>]: Todo[K];
} = {
  age: 0,
};

type MyExtract<
  T extends string | number | symbol,
  U extends string | number | symbol
> = T extends U ? T : never;

const myExtractTodo: {
  [K in MyExtract<keyof Todo, keyof ExtractTodo>]: Todo[K];
} = {
  age: 0,
};
