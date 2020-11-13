import { TestScheduler } from 'jest';
import GalacticCalculator from '../src/calculator.js';

describe('GalacticCalculator', () => {
  let reuseableCalculator;

  beforeEach(() => {
    reuseableCalculator = new GalacticCalculator(30);
  });

  test('should correctly create a galactic calculator object', () => {
    expect(reuseableCalculator.age).toEqual(30);
  });
  test('should correctly calculate the users age on Mercury', () => {
    expect(reuseableCalculator.mercuryAge()).toBeCloseTo(125);
  });
  test('should correctly calculate the users age on Venus', () => {
    expect(reuseableCalculator.venusAge()).toBeCloseTo(48.387);
  });
  test('should correctly calculate the users age on Mars', () => {
    expect(reuseableCalculator.marsAge()).toBeCloseTo(15.957);
  });
  test('should correctly calculate the users age on Jupiter', () => {
    expect(reuseableCalculator.jupiterAge()).toBeCloseTo(2.529);
  });
});