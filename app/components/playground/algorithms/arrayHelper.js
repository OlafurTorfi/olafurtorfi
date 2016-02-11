(function(){
  'use strict';
  module.exports = {
    makeRandomizedArray: size => {
      let array = [];
      for (let i = 0; i < size; i++) {
        array.push(Math.round(Math.random() * size));
      }
      return array;
    },
    makeShuffledRangeArray: size =>{
      let array = Array.from(new Array(size).keys());
      let random;
      array.forEach((item,index) => {
        random = Math.floor(Math.random() * (index+1));
        array[index] = array[random];
        array[random] = item;
      });
      return array;
    }
  };
}());
