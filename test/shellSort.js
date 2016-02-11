(()=>{
  'use strict';
  const shellSort = require('../app/components/playground/algorithms/shellSort');
  const arrayHelper = require('../app/components/playground/algorithms/arrayHelper');
  const expect = require('chai').expect;

  describe('ShellSort algorithm test',() => {
    it('should correctly order array',() => {
      let testArray = [9,3,5,4,6,1,2,8,7,0];
      let resultArray = shellSort.sort(testArray);
      expect(resultArray).to.deep.equal([0,1,2,3,4,5,6,7,8,9]);
    });
    it('should correctly order array asynchronously', () => {
        let testArray = [9,3,5,4,6,1,2,8,7,0];
        return shellSort.sortAsync(testArray).then(resultArray=>{
          expect(resultArray).to.deep.equal([0,1,2,3,4,5,6,7,8,9]);
        });
    });
    it('should correctly order a shuffled array', () => {
      let testArray = arrayHelper.makeShuffledRangeArray(10);
      return shellSort.sortAsync(testArray).then(resultArray=>{
        expect(resultArray).to.deep.equal([0,1,2,3,4,5,6,7,8,9]);
      });
    });
  });
}());
