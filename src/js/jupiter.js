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
}

