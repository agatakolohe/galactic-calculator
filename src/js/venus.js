export default class Venus {
  constructor(age) {
    this.age = age;
  }
  venusAge() {
    return this.age / .62;
  }
  venusLifeExpectancy() {
    return 80/.62;
  }
  timeLeftOnVenus () {
    let result = (this.venusLifeExpectancy() - this.venusAge());
    if (result < 0) {
      return `Congratulations, technology has sufficiently advanced and you have surpassed the time projected, ${result} years, for you to survive on Venus. Or it didn't, and you have been dead for ${result} years.`;
    } else {
      return `You have ${result} years left to live on Venus. Treat yo self!`;
    }
  }
}