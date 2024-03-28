// 实现内置的 Exclude<T, U> 类型，但不能直接使用它本身。
/**
 * 排除类型中的某些属性键
 * @template T 被检查的属性键的联合类型
 * @template U 需要排除的属性键的联合类型
 * @returns {T} 如果U不包含在T中，返回T；如果U包含在T中，返回never
 */
type MyExclude2<T extends PropertyKey, U extends PropertyKey> = U extends T
  ? never
  : T;

// 示例：从"a" | "b" | "c"中排除"a"，得到"b" | "c"
type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

