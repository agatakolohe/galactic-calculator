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
    return (this.jupiterLifeExpectancy() - this.jupiterAge());
  }
  youMayBeDead() {
    if (this.timeLeftOnJupiter() <= 0){
      return `Congratulations, technology has sufficiently advanced and you have surpassed the time projected for you to survive on Jupiter. Or it didn't, and you dead.`;
    } else if(this.timeLeftOnJupiter() >= 0) {
      return `Congratulations, somehow you are still alive on Jupiter.`;
    }
  }
}

