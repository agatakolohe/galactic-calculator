import Mars from './../src/js/mars.js'

describe('Mars', () => {
  let reuseableMars;

  beforeEach(() => {
    reuseableMars = new Mars(30);
  });

  test('should correctly create a Mars object', () => {
    expect(reuseableMars.age).toEqual(30);
  });
  test('should correctly calculate the users age on Mars', () => {
    expect(reuseableMars.marsAge()).toBeGreaterThanOrEqual(15.95);
  });
  test('should correctly calculate the users life expectancy on Mars', () => {
    expect(reuseableMars.marsLifeExpectancy()).toBeGreaterThanOrEqual(42.55);
  });
  test('should correctly calculate the users time left on Mars', () => {
    expect(reuseableMars.timeLeftOnMars()).toBeGreaterThanOrEqual(26.59);
  });
});
