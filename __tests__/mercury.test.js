import Mercury from '../src/js/mercury.js'

describe('Mercury', () => {
  let reuseableMercury;

  beforeEach(() => {
    reuseableMercury = new Mercury(30);
  });

  test('should correctly create a Mercury object', () => {
    expect(reuseableMercury.age).toEqual(30);
  });
  test('should correctly calculate the users age on Mercury', () => {
    expect(reuseableMercury.mercuryAge()).toBeGreaterThanOrEqual(125);
  });
  test('should correctly calculate the users life expectancy on Mercury', () => {
    expect(reuseableMercury.mercuryLifeExpectancy()).toBeGreaterThanOrEqual(333.33);
  });
  test('should correctly calculate the users time left on Mercury', () => {
    expect(reuseableMercury.timeLeftOnMercury()).toBeGreaterThanOrEqual(208.33);
  });
});