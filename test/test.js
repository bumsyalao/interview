// import { assert } from 'chai';

import { sum, factorial } from '../src/functions';
const assert = require('chai').assert;

describe('my Functions', function(){
  describe('sum', function(){
    it('should return 4 when 2 is passed', function(){
      assert.deepEqual(sum(2), 4);
    });
  });

  describe('factorial', function() {
    it('should do factorial', function(){
      assert.deepEqual(factorial(8), 40320);
      assert.deepEqual(factorial(10), 3628800);
    });
  });
});

// describe('Factorial', function() {
//   it('should do factorial', () => {
//     expect(factorial(8).toEqual(40320));
//     expect(factorial(10).toEqual(3628800));
//   })
// });
