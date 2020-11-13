import Jupiter from '../src/js/jupiter.js'

describe('Jupiter', () => {
  let reuseableJupiter;

  beforeEach(() => {
    reuseableJupiter = new Jupiter(30);
  });

  test('should correctly create a Jupiter object', () => {
    expect(reuseableJupiter.age).toEqual(30);
  });
  test('should correctly calculate the users age on Jupiter', () => {
    expect(reuseableJupiter.jupiterAge()).toBeCloseTo(2.529);
  });
  test('should correctly calculate the users life expectancy on Jupiter', () => {
    expect(reuseableJupiter.jupiterLifeExpectancy()).toBeCloseTo(6.745);
  });
  // test('should correctly calculate the users time left on Mars', () => {
  //   expect(reuseableMars.timeLeftOnMars()).toBeCloseTo(26.596);
  // });
});