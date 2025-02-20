export function numberLiterals<T extends number>(...args: T[]): T[] {
  return args;
}

export function stringLiterals<T extends string>(...args: T[]): T[] {
  return args;
}

export type ElementLiteralsType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;
