/**
 * Test for project.
 */
var assert = chai.assert;

describe("Main", function () {


    describe("transitionInRange", function () {
        it("Return a number in the range.", function () {
            assert.equal(transitionInRange(3, 4), 3);
        });

        it("If the number exceeds the maximum value.", function () {
            assert.equal(transitionInRange(5, 4), 1);
        });

        it("If the number exceeds the minimum value.", function () {
            assert.equal(transitionInRange(-1, 2), 1);
        });

        const length = 6;

        it("Check mixingIndex max", function () {
            assert.equal(mixingIndex(length-1, 1,length), 0);
        });

        it("Check mixingIndex min", function () {
            assert.equal(mixingIndex(0, -1,length), length-1);
        });

    });

    describe("PolubinskiSquare", function () {
        var crypt = new Cryptographer();
        it("CheckEncryptionText", function () {
            checkEncryptionText(crypt,"абв_я","ёжзгв",1);
        });
        it("CheckDecryptionText", function () {
            checkDecryptionText(crypt,"абв_я","ёжзгв",1);
        });

    });

    describe("JuliusCaesar", function () {
        var crypt = createCryptographerJuliusCaesar();

        it("CheckEncryptionText", function () {
            checkEncryptionText(crypt,"абв_я","бвга_",1);
        });
        it("CheckDecryptionText", function () {
            checkDecryptionText(crypt,"абв_я","бвга_",1);
        });

        //TODO CREATE TEST createEncryptionAlphabet.
        /*it("createEncryptionAlphabet", function () {

        });*/

    });


    //TODO Add test for EncryptionSchemeVigenere.

    function checkEncryptionText(crypt,text,textEncryption,mixed) {
        var outEncryption = crypt.encryptionText(text,mixed);
        assert.equal(outEncryption, textEncryption,"Failed Encryption text");
    }

    function checkDecryptionText(crypt,text,textEncryption,mixed) {
        var outDecryption = crypt.encryptionText(textEncryption, mixed * -1);
        assert.equal(outDecryption, text, "Failed Decryption text");
    }

});