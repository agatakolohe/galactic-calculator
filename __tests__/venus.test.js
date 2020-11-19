import Venus from './../src/js/venus.js'

describe('Venus', () => {
  let reuseableVenus;
  let youDead;

  beforeEach(() => {
    reuseableVenus = new Venus(30);
    youDead = new Venus(200);
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
  test('should correctly check if the user is dead on Venus', () => {
    expect(youDead.timeLeftOnVenus()).toEqual(`Congratulations, technology has sufficiently advanced and you have surpassed the time projected, -193.54838709677418 years, for you to survive on Venus. Or it didn't, and you have been dead for -193.54838709677418 years.`);
  });
});