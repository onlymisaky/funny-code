export function repeatFill<T>(arr: T[], length: number): T[] {
  if (arr.length < length) {
    let n = -1;
    return new Array(length)
      .fill(0)
      .map((_, index) => {
        n++;
        if (n === arr.length) {
          n = 0;
        }
        console.log(n);
        return arr[n];
      });
  } else {
    return arr;
  }
}
