/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  const splitReg = /[\d\.\/]+|[a-zA-Z]+/g;
  const units = ["gal", "L", "lbs", "kg", "mi", "km"];

  this.getNum = function(input) {
    const splitedInput = input.match(splitReg);
    
    // Return 1 if only unit is provided
    if (units.includes(input)) {
      return 1;
    }

    if (splitedInput && splitedInput.length > 0) {
      const number = splitedInput[0];
      
      // Handle fractions
      if(number.includes('/')) {
        const parts = number.split('/');
        if(parts.length > 2) return null; // Invalid double fraction
        
        const numerator = parseFloat(parts[0]);
        const denominator = parseFloat(parts[1]);
        
        if(isNaN(numerator) || isNaN(denominator) || denominator === 0) {
          return null;
        }
        
        return Number((numerator / denominator).toFixed(5));
      }
      
      // Handle regular numbers
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
    
    // Normalize unit case (special handling for 'L')
    unit = unit === 'L' ? 'L' : unit.toLowerCase();
    
    return units.includes(unit) ? unit : null;
  };

  this.getReturnUnit = function(initUnit) {
    
    const mapUnits = {
      gal: 'l',
      l: 'gal',
      lbs: 'kg',
      kg: 'lbs',
      mi: 'km',
      km: 'mi'
    }

    return mapUnits[initUnit];
  };

  this.spellOutUnit = function(unit) {
    const spellMappings={
      'gal':'gallons',
      'l':'liters',
      'lbs':'pounds',
      'kg':'kilograms',
      'mi':'miles',
      'km':'kilometers'
    }
    return spellMappings[unit];
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    // Normalize unit case for comparison
    const unit = initUnit === 'L' ? 'l' : initUnit.toLowerCase();
    
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
