import Jupiter from './../src/js/jupiter.js'

describe('Jupiter', () => {
  let reuseableJupiter;
  let youDead;

  beforeEach(() => {
    reuseableJupiter = new Jupiter(30);
    youDead = new Jupiter(200);
  });

  test('should correctly create a Jupiter object', () => {
    expect(reuseableJupiter.age).toEqual(30);
  });
  test('should correctly calculate the users age on Jupiter', () => {
    expect(reuseableJupiter.jupiterAge()).toBeGreaterThanOrEqual(2.52);
  });
  test('should correctly calculate the users life expectancy on Jupiter', () => {
    expect(reuseableJupiter.jupiterLifeExpectancy()).toBeGreaterThanOrEqual(6.74);
  });
  test('should correctly check if the user is dead on Jupiter', () => {
    expect(youDead.timeLeftOnJupiter()).toEqual(`Congratulations, technology has sufficiently advanced and you have surpassed the time projected, -10.11804384485666 years, for you to survive on Jupiter. Or it didn't, and you have been dead for -10.11804384485666 years.`);
  });
});