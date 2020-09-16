import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';


describe("make it crash", function(){
    // @slow(200)
    it("does not crash", function () {
      i = 0;
      while (i < 100000) {
        i += 1;
      };
      //assert.strictEqual(true, false)
    });
    it("is slow", function () {
      i = 0;
      while (i < 100000000) {
        i += 1;
      };
    });
    // it("should timeout", function () {
    //   i = 0
    //   while (i < 2000000000) {
    //     i += 1;
    //   }
    // });
});