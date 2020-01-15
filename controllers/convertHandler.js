/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  const splitReg = /[\d./]+|[a-zA-Z]+/;
  const units = ['gal', 'L', 'lbs', 'kg', 'mi', 'km']
  
  this.getNum = function(input) {
    const splitedInput = input.match(splitReg);
    if(units.includes(input)) {
      return 1
    } else{
      
      if(splitedInput.length === 2) {
        const number = splitedInput[0]
        const isValidNumberReg = /^\d*\.?\d*\/?\d*\.?\d*$/
        console.log(number);
        if(!isValidNumberReg.test(number)) {
          return 'invalid number'
        } else {
          //console.log(eval(number).toFixed(5))
          return eval(number).toFixed(5)
        }
      }
      
      
    }
    
  };

  this.getUnit = function(input) {

    if(units.includes(input)) {
      //console.log(input)
      return input
    } else{
      
    }
  

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
