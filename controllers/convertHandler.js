/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  const splitReg = /[\d./]+|[a-zA-Z]+/;
  this.getNum = function(input) {
    
    if(!input) {
      return 'invalid number and unit'
    } else{
      const number = input.match(splitReg)[0];
      const isValidNumberReg = /^\d*\.?\d*\/?\d*\.?\d*$/
      console.log(number);
      if(!isValidNumberReg.test(number)) {
        return 'invalid number'
      } else {
        return eval(number)
      }
      
    }
    
  };

  this.getUnit = function(input) {
    var result;

    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;

    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };
}

module.exports = ConvertHandler;
