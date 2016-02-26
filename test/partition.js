(()=>{
  'use strict';
  const partition = require('../app/components/playground/algorithms/partition');
  const expect = require('chai').expect;

  describe('partition algorithm test',() => {
    it('should correctly order array',() => {
      let testArray = [6,3,5,4,9,1,2,8,7,0];
      let index = partition.twoWay(testArray);
      expect(testArray).to.deep.equal([2,3,5,4,0,1,6,7,8,9]);
      expect(index).to.equal(6);
    });
    it('should correctly order part of the array',() => {
      let testArray = [6,3,5,4,9,1,2,8,7,0];
      let index = partition.twoWay(testArray,3,6);
      expect(testArray).to.deep.equal([6,3,5,1,2,4,9,8,7,0]);
      expect(index).to.equal(5);
    });
    it('should correctly order array asynchronously', () => {
        let testArray = [6,3,5,4,9,1,2,8,7,0];
        return partition.twoWayAsync(testArray).then(result=>{
          expect(testArray).to.deep.equal([2,3,5,4,0,1,6,7,8,9]);
          expect(result).to.equal(6);
        });
    });
    it('should correctly dijkstra partition array',() => {
      let testArray = [6,3,5,4,9,1,2,8,7,0];
      let bounds = partition.dijkstra(testArray);
      expect(testArray).to.deep.equal([3,5,4,0,1,2,6,7,8,9]);
      expect(bounds).to.deep.equal({upper:6,lower:6});
    });
    it('should correctly dijkstra partition part of array',() => {
      let testArray = [6,3,5,4,9,1,2,8,7,0];
      let bounds = partition.dijkstra(testArray,3,6);
      expect(testArray).to.deep.equal([6,3,5,2,1,4,9,8,7,0]);
      expect(bounds).to.deep.equal({upper:5,lower:5});
    });
    it('should correctly order array asynchronously', () => {
        let testArray = [6,3,5,4,9,1,2,8,7,0];
        return partition.dijkstraAsync(testArray).then(result=>{
          expect(testArray).to.deep.equal([3,5,4,0,1,2,6,7,8,9]);
          expect(result).to.deep.equal({upper:6,lower:6});
        });
    });
  });
}());
