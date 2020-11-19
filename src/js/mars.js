export default class Mars {
  constructor(age) {
    this.age = age;
  }
  marsAge() {
    return this.age / 1.88;
  }
  marsLifeExpectancy() {
    return 80/1.88;
  }
  timeLeftOnMars () {
    let result = (this.marsLifeExpectancy() - this.marsAge());
    if (result < 0) {
      return `Congratulations, technology has sufficiently advanced and you have surpassed the time projected, ${result} years, for you to survive on Mars. Or it didn't, and you have been dead for ${result} years.`
    } else {
      return `You have ${result} years left to live on Mars. Treat yo self!`
    }
  }
}