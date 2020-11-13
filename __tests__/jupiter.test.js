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
    expect(reuseableJupiter.jupiterAge()).toBeGreaterThanOrEqual(2.52);
  });
  test('should correctly calculate the users life expectancy on Jupiter', () => {
    expect(reuseableJupiter.jupiterLifeExpectancy()).toBeCloseTo(6.745);
  });
  test('should correctly calculate the users time left on Jupiter', () => {
    expect(reuseableJupiter.timeLeftOnJupiter()).toBeGreaterThanOrEqual(4.21);
  });
  test('should correctly let the user know if they are still alive', () => {
    expect(reuseableJupiter.youMayBeDead()).toBe(`Congratulations, somehow you are still alive on Jupiter.`);
  });
});

describe('Jupiter if user lives past life expectancy', () => {
  test('should correctly let the user know if they are dead', () => {
    let maybeDead = new Jupiter(90);
    expect(maybeDead.youMayBeDead()).toBe(`Congratulations, technology has sufficiently advanced and you have surpassed the time projected for you to survive on Jupiter. Or it didn't, and you dead.`);
  });
});