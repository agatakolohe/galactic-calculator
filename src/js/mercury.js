export default class Mercury {
  constructor(age) {
    this.age = age;
  }
  mercuryAge() {
    return this.age / .24;
  }
  mercuryLifeExpectancy() {
    return 80/.24;
  }
  timeLeftOnMercury () {
    let result = (this.mercuryLifeExpectancy() - this.mercuryAge());
    if (result < 0) {
      return `Congratulations, technology has sufficiently advanced and you have surpassed the time projected, ${result} years, for you to survive on Mercury. Or it didn't, and you have been dead for ${result} years.`;
    } else {
      return `You have ${result} years left to live on Mercury. Treat yo self!`;
    }
  }
}