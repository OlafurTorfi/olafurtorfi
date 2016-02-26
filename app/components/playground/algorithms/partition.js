(function() {
	'use strict';
  const _ = require('underscore');
	const swap = require('./arrayHelper').swap;

	const partition = {
		twoWay: (array,lo,hi) => {
			lo = lo || 0;
			let i = lo;
			let j = hi || array.length-1;
			while(j>i){
				if(array[i+1]>array[lo]){
					swap(array,i+1,j);
					j--;
				}
				else{
					i++;
				}
			}
			swap(array,lo,j);
			return j;
		},
		twoWayAsync: array => {
			return new Promise(resolve=>{
				resolve(partition.twoWay(array));
			});
		},
		dijkstra: (array,lo,hi) => {
			let i = lo || 0;
			let gt = hi || array.length-1;
			let lt = lo || 0;
			while(lt<gt){
				if(array[i]<array[lt]){
					swap(array,lt,i);
					i++;
					lt++;
				}
				else if(array[i]>array[lt]) {
					swap(array,gt,i);
					gt--;
				}
				else{
					i++;
				}
			}
			return {
				lower:lt,
				upper:gt
			};
		},
		dijkstraAsync: array => {
			return new Promise(resolve=>{
				resolve(partition.dijkstra(array));
			});
		}
	};
	module.exports = partition;
}());
