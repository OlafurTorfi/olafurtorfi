(function() {
	'use strict';
  const _ = require('underscore');
	module.exports = {
		sort: array => {
			const splitFunc = inputArray =>
				inputArray.length === 1 ?
				inputArray :
        mergeFunc(splitFunc(inputArray.splice(0, Math.ceil(inputArray.length / 2))), (splitFunc(inputArray)),[]);
			const mergeFunc = (arr1, arr2, res) => {
				if (arr1.length > 0 && arr2.length > 0) {
					if (arr1[0] > arr2[0]) {
						return mergeFunc(arr1, arr2, res.concat(arr2.splice(0, 1)[0]));
					}
					return mergeFunc(arr1, arr2, res.concat(arr1.splice(0, 1)[0]));
				} else if (arr1.length > 0) {
					return res.concat(arr1);
				} else {
					return res.concat(arr2);
				}
			};
			return splitFunc(array);
		}
	};

}());
