import { formatNumberToScientific } from '../src/index';

describe('formatNumberToScientific function', () => {
  test('Number are positive', () => {
    expect(formatNumberToScientific(0, 2)).toBeGreaterThanOrEqual(0.00);
    expect(formatNumberToScientific(0.00000012445423423, 6)).toBeLessThanOrEqual(1.244542e-7);
    expect(formatNumberToScientific(123456789, 2)).toBeLessThanOrEqual(123456789);
    expect(formatNumberToScientific(0.012345, 4)).toBeGreaterThanOrEqual(0.0123);
    expect(formatNumberToScientific(0.00056789, 3)).toBeLessThanOrEqual(5.679e-4);
    expect(formatNumberToScientific(987654321, 2)).toBeLessThanOrEqual(9.88e+8);
    expect(formatNumberToScientific(0.234254, 1)).toBeLessThanOrEqual(0.2);
    expect(formatNumberToScientific(10, 2)).toBeLessThanOrEqual(1.00e+1);
  });

  test('Number is a minus number', () => {
    expect(formatNumberToScientific(-0.000345, 2)).toBeLessThanOrEqual(-3.45e-4);
    expect(formatNumberToScientific(-123456, 3)).toBeLessThanOrEqual(-1.235e+5);
    expect(formatNumberToScientific(-0.0789, 2)).toBeLessThanOrEqual(-7.89e-2);
    expect(formatNumberToScientific(-98765.4321, 4)).toBeLessThanOrEqual(-9.8765e+4);
    expect(formatNumberToScientific(-0.04321, 1)).toBeLessThanOrEqual(-4.3e-2);
  });

  // Add more test cases as needed
});