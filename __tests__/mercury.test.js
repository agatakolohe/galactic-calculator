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
    expect(reuseableMercury.mercuryAge()).toBeCloseTo(124);
  });
});