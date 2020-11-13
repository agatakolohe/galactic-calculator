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
  timeLeftOnVenys () {
    return (this.venusLifeExpectancy() - this.venusAge());
  }
}