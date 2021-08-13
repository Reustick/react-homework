import { random } from "faker";

import {
  mul,
  div,
  add,
  minus,
  pow,
  factorial,
} from "./mathOperators";

describe("mathOperators test cases", () => {
  const number1 = random.number();
  const number2 = random.number();

  const resultOfMultiplication = number1 * number2;
  it(`mul ${number1} * ${number2} to equal ${resultOfMultiplication}`, () => {
    expect(mul(number1, number2)).toBe(resultOfMultiplication);
  });

  const resultOfDivision = number1 / number2;
  it(`div ${number1} / ${number2} to equal ${resultOfDivision}`, () => {
    expect(div(number1, number2)).toBe(resultOfDivision);
  });

  const resultOfSum = number1 + number2;
  it(`add ${number1} + ${number1} to equal ${resultOfSum}`, () => {
    expect(add(number1, number2)).toBe(resultOfSum);
  });

  const resultOfSubstraction = number1 - number2;
  it(`minus ${number1} - ${number2} to equal ${resultOfSubstraction}`, () => {
    expect(minus(number1, number2)).toBe(resultOfSubstraction);
  });

  const power = 2;
  const resultOfPow = Math.pow(number1, power);
  it(`pow ${number1} ^ ${power} to equal ${resultOfPow}`, () => {
    expect(pow(number1, power)).toBe(resultOfPow);
  });

  it("3! to equal 6", () => {
    expect(factorial(3)).toBe(6);
  });
});
