export function sum(a: number, b: number, c: number | undefined = undefined) {
  return a + b + (c ?? 0);
}
