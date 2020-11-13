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
    expect(reuseableVenus.venusAge()).toBeCloseTo(48);
  });
});