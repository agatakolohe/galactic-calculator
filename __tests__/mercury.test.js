import Mercury from './../src/js/mercury.js'

describe('Mercury', () => {
  let reuseableMercury;
  let youDead;

  beforeEach(() => {
    reuseableMercury = new Mercury(30);
    youDead = new Mercury(200);
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
  test('should correctly check if the user is dead on Mercury', () => {
    expect(youDead.timeLeftOnMercury()).toEqual(`Congratulations, technology has sufficiently advanced and you have surpassed the time projected, -500 years, for you to survive on Mercury. Or it didn't, and you have been dead for -500 years.`);
  });
  test('should correctly check if alive on Mercury', () => {
    expect(reuseableMercury.timeLeftOnMercury()).toEqual(`You have 80.64516129032258 years left to live on Mercury. Treat yo self!`);
  });
});