// 实现一个First<T>泛型，它接受一个数组T并返回它的第一个元素的类型。

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type First<T extends readonly PropertyKey[]> = T[0];

type head1 = First<arr1>; // 应推导出 'a'
type head2 = First<arr2>; // 应推导出 3

const head: head1 = "a";
