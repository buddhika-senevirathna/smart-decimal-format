import { formatNumberToScientific } from '../src/index';

describe('formatNumberToScientific function', () => {
  describe('Zero values', () => {
    test('should format zero as 0.00', () => {
      expect(formatNumberToScientific(0, 2)).toBe(0);
      expect(formatNumberToScientific(0, 4)).toBe(0);
    });
  });

  describe('Positive numbers', () => {
    test('should format large numbers with specified decimal places', () => {
      expect(formatNumberToScientific(123456789, 2)).toBe(123456789);
      expect(formatNumberToScientific(987654321, 2)).toBe(987654321);
      expect(formatNumberToScientific(10, 2)).toBe(10);
    });

    test('should format small numbers without leading zeros', () => {
      expect(formatNumberToScientific(0.012345, 4)).toBe(0.0123);
      expect(formatNumberToScientific(0.234254, 1)).toBe(0.2);
    });

    test('should convert very small numbers to scientific notation', () => {
      expect(formatNumberToScientific(0.00000012445423423, 6)).toBe(1.244542e-7);
      expect(formatNumberToScientific(0.00006485024300466282, 5)).toBe(0.00006);
      expect(formatNumberToScientific(0.000016103466422456256, 5)).toBe(0.00001);
      expect(formatNumberToScientific(0.00056789, 3)).toBe(5.679e-4);
    });
  });

  describe('Negative numbers', () => {
    test('should format negative numbers in scientific notation', () => {
      expect(formatNumberToScientific(-0.000345, 2)).toBe(-3.45e-4);
      expect(formatNumberToScientific(-123456, 3)).toBe(-1.235e+5);
      expect(formatNumberToScientific(-0.0789, 2)).toBe(-7.89e-2);
      expect(formatNumberToScientific(-98765.4321, 4)).toBe(-9.8765e+4);
      expect(formatNumberToScientific(-0.04321, 1)).toBe(-4.3e-2);
    });
  });

  describe('Edge cases', () => {
    test('should handle different decimal precisions', () => {
      expect(formatNumberToScientific(3.14159265, 2)).toBe(3.14);
      expect(formatNumberToScientific(3.14159265, 4)).toBe(3.1416);
      expect(formatNumberToScientific(3.14159265, 6)).toBe(3.141593);
    });

    test('should handle numbers already in scientific notation', () => {
      expect(formatNumberToScientific(1.5e-8, 2)).toBe(1.5e-8);
      expect(formatNumberToScientific(2.5e10, 3)).toBe(25000000000);
    });
  });
});