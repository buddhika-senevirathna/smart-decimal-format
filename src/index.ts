export const formatNumberToScientific = (
  original_value: number,
  positions: number,
): number => {
  const value = Number(original_value ?? 0);

  let formattedValue: number;
  if (value === 0) {
    formattedValue = 0.00;
  } else {
    //const formattedValue = value.toExponential(positions);
    if (value > 0 && value < 1) {
      //check the number of leading zeros after decimal point, if the number is 000, we want to convert the number to scientific notation
      let leadingZeros = positions > 1 ? "0".repeat(positions - 2) : "0";
      if (value.toFixed(positions).substring(2, positions) === leadingZeros) {       
        formattedValue = parseFloat(value.toExponential(positions));
        console.log("formatted value in scientific notation", formattedValue);
        } else {
        formattedValue = parseFloat(value.toFixed(positions));
      }
    } else if (value < 0) {
        console.log("negative value less than 1", value);
        const decimalNumber = scientificToDecimal(value);
        formattedValue = parseFloat(Number(decimalNumber).toExponential(positions));
    } else {
        console.log("positive value greater than 1", value);
        formattedValue = parseFloat(value.toFixed(positions));
      }
    }
  console.log("final formatted value", formattedValue);
  return formattedValue;
};

/*
 * Convert scientific notation to decimal string
 * If the number is a minus(-) other wise always return 0
 */
function scientificToDecimal(scientificNumber: number): string {
  console.log("scientific number input", scientificNumber);
  const str = String(scientificNumber);

  // If it's not in scientific notation, just return as is
  if (!str.toLowerCase().includes('e')) return str;

  // Split into coefficient and exponent
  const [coefficient = '', exponent = '0'] = str.toLowerCase().split('e');
  // const exp = parseInt(exponent, 10);
  const exp = parseInt(exponent, 10);

  // let [intPart, fracPart = ''] = coefficient.replace('-', '').split('.');
  let [intPart, fracPart = ''] = coefficient.replace('-', '').split('.');

  if (exp > 0) {
    // Move decimal to the right
    fracPart = fracPart.padEnd(exp, '0');
    const result =
      intPart +
      fracPart.slice(0, exp) +
      (fracPart.slice(exp) ? '.' + fracPart.slice(exp) : '');
    return (coefficient.startsWith('-') ? '-' : '') + result;
  } else {
    // Move decimal to the left
    const zeros = '0'.repeat(Math.abs(exp) - 1);
    const result = '0.' + zeros + intPart + fracPart;
    return (coefficient.startsWith('-') ? '-' : '') + result;
  }
}
