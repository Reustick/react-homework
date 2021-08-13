export type ScalarOperationType = (first: number, second: number) => number;
export type FunctionOperationType = (value: number) => number;

export const mul: ScalarOperationType = (first, second) => first * second;

export const div: ScalarOperationType = (first, second) => first / second;

export const add: ScalarOperationType = (first, second) => first + second;

export const minus: ScalarOperationType = (first, second) => first - second;

export const pow: ScalarOperationType = (first, second) =>
  Math.pow(first, second);

export const factorial: FunctionOperationType = (first) =>
  first ? first * factorial(first - 1) : 1;

export type ScalarOperator = "*" | "/" | "+" | "-" | "^" | "!";

export const scalarOperators: {
  [key in ScalarOperator]: ScalarOperationType;
} = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
  "!": factorial,
};

export type MathOperator = ScalarOperator;

export const mathOperators: {
  [key in MathOperator]: ScalarOperationType | FunctionOperationType;
} = {
  ...scalarOperators,
};

export const mathPriorities: number[] = [0, 1, 2, 3, 4];

const [zero, first, second, third, fourth] = mathPriorities;

export const MathPrioritiesList = {
  zero,
  first,
  second,
  third,
  fourth,
};

export const mathOperatorsPriorities: {
  [key in MathOperator]: number;
} = {
  "!": zero,
  "^": first,
  "*": third,
  "/": third,
  "+": fourth,
  "-": fourth,
};
