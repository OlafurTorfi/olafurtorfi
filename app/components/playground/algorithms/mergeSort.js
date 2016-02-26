(function () {
	'use strict';
	const _ = require('underscore');
	const mergeFunc = (array, aux, lo, mid, hi) => {
		aux = array.slice();
		var i = lo;
		var j = mid + 1;
		for (var k = lo; k <= hi; k++) {
			if (i > mid) array[k] = aux[j++];
			else if (j > hi) array[k] = aux[i++];
			else if (aux[j] < aux[i]) array[k] = aux[j++];
			else array[k] = aux[i++];
		}
	};
	const sortFunc = (array, aux, lo, hi) => {
		if (hi <= lo) return;
		var mid = Math.floor(lo + (hi - lo) / 2);
		sortFunc(array, aux, lo, mid);
		sortFunc(array, aux, mid + 1, hi);
		mergeFunc(array, aux, lo, mid, hi);
	};
	const mergeSort = {
		sort: input => {
			let array = input.slice();
			let aux = input.slice();
			sortFunc(array, aux, 0, array.length - 1);
			return array;
		},
		sortBottomUp: input => {
			let array = input.slice();
			let aux = input.slice();
			let N = array.length;
			for (var sz = 1; sz < N; sz = sz + sz) {
				for (var lo = 0; lo < N - sz; lo += sz + sz) {
					mergeFunc(array, aux, lo, lo + sz - 1, (lo + sz + sz - 1 < N - 1) ? lo + sz + sz - 1: N-1);
				}
			}
			return array;
		},
		sortAsync: inputArray => {
			return new Promise(resolve => {
				resolve(mergeSort.sort(inputArray));
			});
		},
		sortBottomUpAsync: inputArray => {
			return new Promise(resolve => {
				resolve(mergeSort.sortBottomUp(inputArray));
			});
		}
	};
	module.exports = mergeSort;
}());
