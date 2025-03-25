import { add } from "../src/stringCalculator"; 

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself when a single number is provided", () => {
    expect(add("1")).toBe(1);
});
  
test("should return the sum of two comma-separated numbers", () => {
expect(add("1,5")).toBe(6);
});
  
test("should return sum of multiple numbers separated by a comma", () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("4,5,6,7")).toBe(22);
    expect(add("10,20,30,40,50")).toBe(150);
});
  