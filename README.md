# Metric Converter API 🔄

A professional full-stack application that provides precise metric/imperial unit conversions with extensive testing and validation.

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.17+-blue.svg)](https://expressjs.com/)
[![Testing](https://img.shields.io/badge/Testing-Mocha%20%2B%20Chai-yellow.svg)](https://mochajs.org/)

## 🌟 Features

- Precise conversion between metric and imperial units
- Support for fractions and decimal inputs
- RESTful API with extensive error handling
- Comprehensive test suite with both unit and functional tests
- Modern, responsive front-end interface
- Clear API documentation

## 🔧 Supported Conversions

| From/To | Conversion Rate |
|---------|----------------|
| Gallons (gal) ↔ Liters (L) | 1 gal = 3.78541 L |
| Pounds (lbs) ↔ Kilograms (kg) | 1 lbs = 0.453592 kg |
| Miles (mi) ↔ Kilometers (km) | 1 mi = 1.60934 km |

## 🏗️ Project Structure

```
metric-converter/
├── controllers/
│   └── convertHandler.js     # Conversion logic and validation
├── routes/
│   ├── api.js               # API endpoint definitions
│   └── fcctesting.js        # Testing routes
├── public/
│   └── style.css            # Frontend styling
├── tests/
│   ├── 1_unit-tests.js      # Unit tests
│   └── 2_functional-tests.js # API endpoint tests
├── views/
│   └── index.html           # Frontend interface
├── server.js                # Express application setup
└── package.json            # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/metric-converter.git
   cd metric-converter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

## 🧪 Testing

### Running Tests

Set up the testing environment:
```bash
export NODE_ENV=test
```

Run all tests:
```bash
npm test
```

### Test Cases Overview

#### Unit Tests (16 cases)

1. **Number Parsing**
   - Whole number inputs
   - Decimal inputs
   - Fractional inputs
   - Fractional inputs with decimals
   - Invalid number detection
   - No numerical input handling

2. **Unit Validation**
   - Valid unit recognition
   - Case insensitivity
   - Invalid unit detection
   - Unit spelling verification

3. **Conversion Logic**
   - Accurate conversion calculations
   - Proper rounding to 5 decimals
   - Error handling for invalid inputs

#### Functional Tests (5 cases)

1. **API Endpoint Testing**
   - Valid conversions
   - Invalid number handling
   - Invalid unit handling
   - Combined invalid inputs
   - Default value handling

### Example Test Outputs

```javascript
// Valid conversion test
GET /api/convert?input=10L
{
  "initNum": 10,
  "initUnit": "L",
  "returnNum": 2.64172,
  "returnUnit": "gal",
  "string": "10 liters converts to 2.64172 gallons"
}

// Invalid input test
GET /api/convert?input=3/7.2/4kg
{
  "error": "invalid number"
}
```

## 📚 API Documentation

### Endpoint

```
GET /api/convert?input={value}
```

### Parameters

- `input`: String containing number and unit (e.g., "3.1mi", "2.5kg", "5gal")

### Response Format

```javascript
{
  "initNum": number,      // Initial number provided
  "initUnit": string,     // Initial unit provided
  "returnNum": number,    // Converted number
  "returnUnit": string,   // Converted unit
  "string": string        // Human-readable conversion result
}
```

### Error Responses

```javascript
{ "error": "invalid number" }
{ "error": "invalid unit" }
{ "error": "invalid number and unit" }
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔍 Quality Assurance

- All 16 unit tests passing
- All 5 functional tests passing
- Cross-browser compatibility verified
- Mobile responsiveness ensured
- Security measures implemented:
  - XSS protection
  - MIME type sniffing prevention
  - Input validation


