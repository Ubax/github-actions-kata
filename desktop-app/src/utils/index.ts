// @ts-ignore
export function sum(a: number, b: number, c: number | undefined = undefined) {
  if(c)
    return a+ b +c;
  else
    return a + b;
}
