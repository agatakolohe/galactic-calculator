import Mars from '../src/js/mars.js'

describe('Mars', () => {
  let reuseableMars;
  let youDead;

  beforeEach(() => {
    reuseableMars = new Mars(30);
    youDead = new Mars(200);
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
  test('should correctly check if the user is dead on Mars', () => {
    expect(youDead.timeLeftOnMars()).toEqual(`Congratulations, technology has sufficiently advanced and you have surpassed the time projected, -500 years, for you to survive on Mars. Or it didn't, and you have been dead for -500 years.`);
  });
});
