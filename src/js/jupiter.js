export default class Jupiter {
  constructor(age) {
    this.age = age;
  }
  jupiterAge() {
    return this.age / 11.86;
  }
  jupiterLifeExpectancy() {
    return 80/11.86;
  }
  timeLeftOnJupiter () {
    let result = (this.jupiterLifeExpectancy() - this.jupiterAge());
    if (result < 0) {
      return `Congratulations, technology has sufficiently advanced and you have surpassed the time projected, ${result} years, for you to survive on Jupiter. Or it didn't, and you have been dead for ${result} years.`;
    } else {
      return `You have ${result} years left to live on Jupiter. Treat yo self!`;
    }
  }
}

