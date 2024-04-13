export const createArray = (n: number, start = 0) => Array.from({length: n}, (_, i) => i + start)
 
export const isLastElement = <T>(arr: T[], index: number) => arr.length - 1 === index;

export const isEmptyArray = <T>(arr: T[]) => arr.length === 0;