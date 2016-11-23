/**
 * Encrypts the information according to the method of Julius Caesar.
 */

const alphabet = "а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п,р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,ю,э,я,_";
const ARR = alphabet.split(',');


function createCryptographerJuliusCaesar() {
    var crypt = new Cryptographer();
    crypt.encryptionText = encryptionText;
    crypt.encryptionChar = encryptionChar;
    crypt.mixingIndex = mixingIndex;
    return crypt;

    /**
     *  Encryption text.
     * @param text The text you want to encryptionText.
     * @param mixing The number you want to mixing alphabet for encryptionText.
     * @returns {string} The encrypted text.
     */
    function encryptionText(text, mixing) {
        var arrText = text.split('');
        var out = "";

        for (var i = 0; i < text.length; i++) {
            out += encryptionChar(arrText[i], mixing);
        }
        return out;
    }

    /**
     * Encryption char.
     * @param char
     * @param mixing
     * @returns {*}
     */
    function encryptionChar(char, mixing) {
        var index = ARR.indexOf(char);
        return ARR[mixingIndex(index, mixing)];
    }

    /**
     * Get index for mixed alphabet.
     * @param index not mixed index.
     * @param mixing on much want mixing.
     * @returns {int} Mixing index.
     */
    function mixingIndex(index, mixing) {
        var length = ARR.length;
        index += mixing;
        return transitionInRange(index, length);
    }
}
