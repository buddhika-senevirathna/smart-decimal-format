# smart-decimal-format

[![npm version](https://img.shields.io/npm/v/smart-decimal-format.svg)](https://www.npmjs.com/package/smart-decimal-format)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A smart number formatting utility that automatically formats numbers to a specified number of decimal places and intelligently switches to scientific notation when values are too small to display meaningfully.

## Features

✨ **Smart Formatting**: Automatically formats numbers with precision  
🔬 **Scientific Notation**: Converts very small numbers to scientific notation  
📊 **Handles Edge Cases**: Properly handles zero, negative numbers, and scientific input  
🎯 **Type-Safe**: Written in TypeScript with full type definitions  
⚡ **Lightweight**: Zero dependencies  

## Installation

```bash
npm install smart-decimal-format
```

or using yarn:

```bash
yarn add smart-decimal-format
```

## Usage

### Basic Example

```typescript
import { formatNumberToScientific } from 'smart-decimal-format';

// Format regular numbers
formatNumberToScientific(123.456789, 2);  // 123.46

// Small numbers automatically convert to scientific notation
formatNumberToScientific(0.00000012445423423, 6);  // 1.244542e-7

// Handle negative numbers
formatNumberToScientific(-0.000345, 2);  // -3.45e-4

// Zero handling
formatNumberToScientific(0, 2);  // 0.00
```

### JavaScript (CommonJS)

```javascript
const { formatNumberToScientific } = require('smart-decimal-format');

const result = formatNumberToScientific(0.00056789, 3);
console.log(result);  // 5.679e-4
```

## API Reference

### `formatNumberToScientific(value, position)`

Formats a number to the specified decimal places and automatically switches to scientific notation when appropriate.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `number` | The number to format |
| `position` | `number` | The number of decimal places to use |

#### Returns

- **Type**: `number`
- **Description**: The formatted number, either in decimal or scientific notation

#### Behavior

- **Zero values**: Returns `0.00`
- **Small positive values** (0 < value < 1): 
  - Converts to scientific notation if there are leading zeros matching the precision
  - Otherwise formats to specified decimal places
- **Negative values**: Converts to scientific notation with specified precision
- **Large values**: Formats to specified decimal places

## Examples

### Positive Numbers

```typescript
formatNumberToScientific(123456789, 2);     // 123456789.00
formatNumberToScientific(0.012345, 4);      // 0.0123
formatNumberToScientific(10, 2);            // 10.00
formatNumberToScientific(0.234254, 1);      // 0.2
```

### Very Small Numbers

```typescript
formatNumberToScientific(0.00000012445423423, 6);  // 1.244542e-7
formatNumberToScientific(0.00056789, 3);           // 5.679e-4
```

### Negative Numbers

```typescript
formatNumberToScientific(-0.000345, 2);      // -3.45e-4
formatNumberToScientific(-123456, 3);        // -1.235e+5
formatNumberToScientific(-0.0789, 2);        // -7.89e-2
formatNumberToScientific(-98765.4321, 4);    // -9.8765e+4
```

## Use Cases

This package is particularly useful for:

- 📈 Scientific calculations and data visualization
- 💰 Financial applications with varying decimal precision
- 🔬 Laboratory data presentation
- 📊 Dashboard and reporting tools
- 🧮 Mathematical computations requiring smart number formatting

## Development

### Prerequisites

- Node.js >= 14
- TypeScript >= 5.0

### Setup

```bash
# Clone the repository
git clone https://github.com/buddhika-senevirathna/smart-decimal-format.git

# Install dependencies
npm install

# Run tests
npm test

# Build the project
npm run build
```

### Running Tests

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

**Buddhika Senevirathna**  
📧 Email: wmbjss85@gmail.com  
🔗 GitHub: [@buddhika-senevirathna](https://github.com/buddhika-senevirathna)

## Issues

If you encounter any problems or have suggestions, please [open an issue](https://github.com/buddhika-senevirathna/smart-decimal-format/issues) on GitHub.

## Changelog

### v1.0.1
- Initial release
- Smart decimal formatting
- Automatic scientific notation conversion
- TypeScript support
- Comprehensive test coverage

---

Made with ❤️ by Buddhika Senevirathna