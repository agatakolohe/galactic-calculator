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
    expect(reuseableVenus.venusAge()).toBeCloseTo(48.387);
  });
  test('should correctly calculate the users life expectancy on Mercury', () => {
    expect(reuseableVenus.venusLifeExpectancy()).toBeCloseTo(129.032);
  });
});