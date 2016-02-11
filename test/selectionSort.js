(()=>{
  'use strict';
  const selectionSort = require('../app/components/playground/algorithms/selectionSort');
  const expect = require('chai').expect;

  describe('SelectionSort algorithm test',() => {
    it('should correctly order array',() => {
      let testArray = [9,3,5,4,6,1,2,8,7,0];
      let resultArray = selectionSort.sort(testArray);
      expect(resultArray).to.deep.equal([0,1,2,3,4,5,6,7,8,9]);
    });
    it('should correctly order array asynchronously', () => {
        let testArray = [9,3,5,4,6,1,2,8,7,0];
        return selectionSort.sortAsync(testArray).then(resultArray=>{
          expect(resultArray).to.deep.equal([0,1,2,3,4,5,6,7,8,9]);
        });
    });
  });
}());
