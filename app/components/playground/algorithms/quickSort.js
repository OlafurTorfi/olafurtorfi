(function() {
	'use strict';
  const _ = require('underscore');
	const partition = require('./partition');
	const shuffle = require('./arrayHelper').shuffleInPlace;
	const sort = (array,lo,hi) => {
		if(lo >= hi) return;
		let correct = partition.twoWay(array,lo,hi);
		sort(array,lo,correct-1);
		sort(array,correct+1,hi);
	};
	const dijkstraQuick = (array,lo,hi) => {
		if(lo >= hi) return;
		let bounds = partition.dijkstra(array,lo,hi);
		dijkstraQuick(array,lo,bounds.lower-1);
		dijkstraQuick(array,bounds.upper+1,hi);
	};
	const quickSort = {
		sort: inputArray => {
			let array = inputArray.slice();
			shuffle(array);
			sort(array,0,array.length-1);
      return array;
		},
		dijkstraSort: inputArray => {
			let array = inputArray.slice();
			shuffle(array);
			dijkstraQuick(array,0,array.length-1);
      return array;
		},
		dijkstraSortAsync: inputArray => {
			return new Promise(resolve=>{
				resolve(quickSort.sort(inputArray));
			});
		},
		sortAsync: inputArray => {
			return new Promise(resolve=>{
				resolve(quickSort.sort(inputArray));
			});
		}
	};
	module.exports = quickSort;
}());
