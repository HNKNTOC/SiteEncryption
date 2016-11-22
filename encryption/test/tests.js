/**
 * Test for project.
 */
var assert = chai.assert;

describe("JuliusCaesar", function () {


    describe("transitionInRange", function () {
        it("Return a number in the range.", function () {
            assert.equal(transitionInRange(3,4), 3);
        });

        it("If the number exceeds the maximum value.", function () {
            assert.equal(transitionInRange(5, 4), 1);
        });

        it("If the number exceeds the minimum value.", function () {
            assert.equal(transitionInRange(-1, 2), 1);
        });

    });

    it("Get index for mixed alphabet.", function () {
        assert.equal(mixingIndex(33, 1), 0);
    });

    it("Encryption text.", function () {
        assert.equal(encryption("абв_я", 1), "бвга_");
    });

    it("Decryption text.", function () {
        assert.equal(encryption("бвга_", -1), "абв_я");
    });

});