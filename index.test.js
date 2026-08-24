const { add } = require('./index');

test('2 + 3 fait 5', () => {
  expect(add(2, 3)).toBe(6);
});
