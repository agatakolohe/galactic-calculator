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
}