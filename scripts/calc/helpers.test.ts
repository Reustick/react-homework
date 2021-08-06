import { checkMathOperatorsPriorities } from "./helpers";
import { MathPrioritiesList } from "./mathOperators";

describe("Helpers", () => {
  describe("checkMathOperatorsPriorities", () => {
    it("checkMathOperatorsPriorities detect priority zero", () => {
      expect(checkMathOperatorsPriorities("!", MathPrioritiesList.zero)).toBe(
        true
      );
    });
    it("checkMathOperatorsPriorities detect priority zero false case", () => {
      expect(checkMathOperatorsPriorities("+", MathPrioritiesList.zero)).toBe(
        false
      );
    });
  });
});
