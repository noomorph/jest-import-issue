test('should import yargs/yargs Parser', () => {
  expect(require('yargs/yargs').Parser).toBeInstanceOf(Function);
});
