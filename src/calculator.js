export default class GalacticCalculator {
  constructor(age) {
    this.age = age;
  }
  mercuryAge() {
    return this.age / .24;
  }
  venusAge() {
    return this.age / .62;
  }
}

