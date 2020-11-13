import Venus from '../src/js/venus.js'

describe('Venus', () => {
  let reuseableVenus;

  beforeEach(() => {
    reuseableVenus = new Venus(30);
  });

  test('should correctly create a Venus object', () => {
    expect(reuseableVenus.age).toEqual(30);
  });
  test('should correctly calculate the users age on Venus', () => {
    expect(reuseableVenus.venusAge()).toBeGreaterThanOrEqual(48.38);
  });
  test('should correctly calculate the users life expectancy on Venus', () => {
    expect(reuseableVenus.venusLifeExpectancy()).toBeGreaterThanOrEqual(129.03);
  });
  test('should correctly calculate the users time left on Venus', () => {
    expect(reuseableVenus.timeLeftOnVenus()).toBeGreaterThanOrEqual(80.64);
  });
});