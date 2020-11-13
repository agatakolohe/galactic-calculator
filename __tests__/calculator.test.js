import { TestScheduler } from 'jest';
import GalacticCalculator from '../src/calculator.js';

describe('GalacticCalculator', () => {
  let reuseableCalculator;

  beforeEach(() => {
    reuseableCalculator = new GalacticCalculator(30);
  });

  test('should correctly create a galactic calculator object', () => {
    expect(reuseableCalculator.age).toEqual(30);
  })
});