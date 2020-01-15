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
    if (units.includes(input)) {
      return 1;
    } else {
      if (splitedInput.length === 2) {
        const number = splitedInput[0];
        const isValidNumberReg = /^\d*\.?\d*\/?\d*$/;
        console.log(number);
        console.log(!isValidNumberReg.test(number));
        if (!isValidNumberReg.test(number)) {
          return "invalid number";
        } else {
          //console.log(eval(number).toFixed(5))
          return eval(number).toFixed(5);
        }
      }
    }
  };

  this.getUnit = function(input) {
    const splitedInput = input.match(splitReg);
    console.log(splitedInput);
    if (splitedInput.length === 1) {
      if (units.includes(input)) {
        //console.log(input)
        return input;
      } else {
        console.log("invalid unit");
        return "invalid unit";
      }
    } else {
      const unit = splitedInput[1];
      if (units.includes(unit)) {
        console.log(unit);
        return unit;
      } else {
        console.log("invaid unit");
        return "invalid unit";
      }
    }
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
    var result;
    switch(initUnit) {
      case 'gal':
        result = initNum * galToL
        break
      case 'l':
        result = initNum / galToL
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'kg':
        result = initNum / lbsToKg
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'km':
        result = initNum / miToKm
        break
    }

    return result.toFixed(5);
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    

    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
