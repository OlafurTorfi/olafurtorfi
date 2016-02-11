(function() {
	'use strict';
  const _ = require('underscore');
	const insertionSort = {
		sort: inputArray => {
			let array = inputArray.slice();
      let steps = [];
      let currentStep = 1;
      while(currentStep < array.length){
        steps.push(currentStep);
        currentStep = currentStep * 3 + 1;
      }
      steps.reverse();
			let temp;
			const arraySize = array.length;
      steps.forEach(step => {
        for(let i = 1; i<arraySize; i=i+step){
          for(let j = i; j>0; j=j-step){
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
      });
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
