(function() {
	'use strict';
  const _ = require('underscore');
	const insertionSort = {
		sort: inputArray => {
			let array = inputArray.slice();
			let temp;
			const arraySize = array.length;
      for(let i = 1; i<arraySize; i++){
        for(let j = i; j>0; j--){
					if(array[j]<array[j-1]){
						temp = array[j];
						array[j] = array[j-1];
						array[j-1] = temp;
					}
					else {
						break;
					}
        }
      }
      return array;
		},
		sortAsync: inputArray => {
			return new Promise(resolve=>{
				resolve(insertionSort.sort(inputArray));
			});
		}
	};
	module.exports = insertionSort;
}());
