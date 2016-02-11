(function() {
	'use strict';
  const _ = require('underscore');
	const selectionSort = {
		sort: inputArray => {
			let array = inputArray.slice();
      const arraySize = array.length;
      let min;
      let index;
      let temp;
      for(let i = 0; i<arraySize; i++){
        min = Infinity;
        for(let j = i; j<arraySize; j++){
          if(array[j]<min){
            min = array[j];
            index=j;
          }
        }
        temp = array[index];
        array[index] = array[i];
        array[i] = temp;
      }
      return array;
		},
		sortAsync: inputArray => {
			return new Promise(resolve=>{
				resolve(selectionSort.sort(inputArray));
			});
		}
	};
	module.exports = selectionSort;
}());
