
const add = require("./app");

test ("2 + 3 to be 5", () => {
  expect(add(2,3)).toBe(5);
});
