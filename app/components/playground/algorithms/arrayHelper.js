(function(){
  'use strict';
  module.exports = {
    makeRandomizedArray: size => {
      let array = [];
      for (let i = 0; i < size; i++) {
        array.push(Math.round(Math.random() * size));
      }
      return array;
    }
  };
}());
