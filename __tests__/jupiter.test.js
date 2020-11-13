import Jupiter from '../src/js/jupiter.js'

describe('Jupiter', () => {
  let reuseableJupiter;

  beforeEach(() => {
    reuseableJupiter = new Jupiter(30);
  });

  test('should correctly create a Jupiter object', () => {
    expect(reuseableJupiter.age).toEqual(30);
  });
  test('should correctly calculate the users age on Mars', () => {
    expect(reuseableJupiter.jupiterAge()).toBeCloseTo(15.957);
  });
  // test('should correctly calculate the users life expectancy on Mars', () => {
  //   expect(reuseableMars.marsLifeExpectancy()).toBeCloseTo(42.553);
  // });
  // test('should correctly calculate the users time left on Mars', () => {
  //   expect(reuseableMars.timeLeftOnMars()).toBeCloseTo(26.596);
  // });
});