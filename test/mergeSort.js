(()=>{
  'use strict';
  const mergeSort = require('../app/components/playground/algorithms/mergeSort');
  const expect = require('chai').expect;

  describe('MergeSort algorithm test',() => {
    it('should correctly order array',() => {
      let testArray = [9,3,5,4,6,1,2,8,7,0];
      let resultArray = mergeSort.sort(testArray);
      expect(resultArray).to.deep.equal([0,1,2,3,4,5,6,7,8,9]);
    });
    it('should correctly order array asynchronously', () => {
        let testArray = [9,3,5,4,6,1,2,8,7,0];
        return mergeSort.sortAsync(testArray).then(resultArray=>{
          expect(resultArray).to.deep.equal([0,1,2,3,4,5,6,7,8,9]);
        });
    });
  });
}());
