/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      
      var input = req.query.input;
      if(!input) {
        console.log('failed!')
        res.send('invalid unit and number')
      } else {
        var initNum = convertHandler.getNum(input);
        var initUnit = convertHandler.getUnit(input);
        if(initNum === 'invalid number' && initUnit === 'invalid unit') res.send('invalid unit and number')
        else if(initNum === 'invalid number') res.send('invalid number')
        else if(initUnit === 'invalid unit') res.send('invalid unit')
        else {
          var returnNum = convertHandler.convert(initNum, initUnit);
          var returnUnit = convertHandler.getReturnUnit(initUnit);
          var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
          var result = {
            initNum: initNum,
            initUnit: initUnit,
            returnNum: returnNum,
            returnUnit: returnUnit,
            string: toString
          }
          res.json(result)
        }
        
      }
      
      
      //res.json
    });
    
};
