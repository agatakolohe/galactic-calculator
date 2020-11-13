import Mars from '../src/js/mars.js'

describe('Mars', () => {
  let reuseableMars;

  beforeEach(() => {
    reuseableMars = new Mars(30);
  });

  test('should correctly create a Mars object', () => {
    expect(reuseableMars.age).toEqual(30);
  });
  test('should correctly calculate the users age on Mars', () => {
    expect(reuseableMars.marsAge()).toBeCloseTo(15.957);
  });
  test('should correctly calculate the users life expectancy on Mars', () => {
    expect(reuseableMars.marsLifeExpectancy()).toBeCloseTo(42.553);
  });
  // test('should correctly calculate the users time left on Mars', () => {
  //   expect(reuseableMars.timeLeftOnMars()).toBeCloseTo(80.645);
  // });
});