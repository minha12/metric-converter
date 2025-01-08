

function ConvertHandler() {
  const splitReg = /[\d\.\/]+|[a-zA-Z]+/g;
  const units = ["gal", "l", "lbs", "kg", "mi", "km"]; // only lowercase

  this.getNum = function(input) {
    // Normalize input for the "no numerical input" scenario
    const normalizedInput = input.toLowerCase();

    // Return 1 if only unit is provided (e.g. "L", "l")
    if (units.includes(normalizedInput)) {
      return 1;
    }

    const splitedInput = input.match(splitReg);
    if (splitedInput && splitedInput.length > 0) {
      const number = splitedInput[0];
      if (number.includes('/')) {
        const parts = number.split('/');
        if (parts.length > 2) return null; // invalid double fraction
        
        const numerator = parseFloat(parts[0]);
        const denominator = parseFloat(parts[1]);
        
        if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
          return null;
        }
        return Number((numerator / denominator).toFixed(5));
      }
      
      const validNumber = parseFloat(number);
      return isNaN(validNumber) ? null : validNumber;
    }
    
    return null;
  };

  this.getUnit = function(input) {
    const splitedInput = input.match(splitReg);
    
    if (!splitedInput) return null;
    
    let unit;
    if (splitedInput.length === 1) {
      unit = input;
    } else {
      unit = splitedInput[1];
    }
    
    // Always normalize to lowercase
    unit = unit.toLowerCase();
    
    return units.includes(unit) ? unit : null;
  };

  this.getReturnUnit = function(initUnit) {
    const mapUnits = {
      'gal': 'l',    // Always use lowercase 'l'
      'l': 'gal',    // Handle lowercase 'l'
      'lbs': 'kg',
      'kg': 'lbs',
      'mi': 'km',
      'km': 'mi'
    }
    return mapUnits[initUnit.toLowerCase()];
  };

  this.spellOutUnit = function(unit) {
    const spellMappings = {
      'gal': 'gallons',
      'l': 'liters',    // Only need lowercase mapping
      'lbs': 'pounds',
      'kg': 'kilograms',
      'mi': 'miles',
      'km': 'kilometers'
    }
    return spellMappings[unit.toLowerCase()];
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    // Normalize to lowercase for switch statement
    const unit = initUnit.toLowerCase();
    
    switch(unit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        return undefined;
    }

    return Number(result.toFixed(5));
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    

    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
