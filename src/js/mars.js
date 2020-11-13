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
    return (this.marsLifeExpectancy() - this.marsAge());
  }
};
