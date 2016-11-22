/**
 * Encrypts the information according to the method of Julius Caesar.
 */

const alphabet = "а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п,р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,ю,э,я,_";
const ARR = alphabet.split(',');

/**
 *  Encryption text.
 * @param text The text you want to encryption.
 * @param mixing The number you want to mixing alphabet for encryption.
 * @returns {string} The encrypted text.
 */
function encryption(text, mixing) {
    var arrText = text.split('');
    var out = "";

    for (var i = 0; i < text.length; i++) {
        out += extractChar(arrText[i], mixing);
    }
    return out;
}

/**
 * Encryption char.
 * @param char
 * @param mixing
 * @returns {*}
 */
function extractChar(char, mixing) {
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

/**
 * Return a number in the range.
 * If number not included in the range adds or takes
 * is number until number will not be in the range.
 * Adds and takes number max.
 *
 * @param number Number which needs transition.
 * @param max Max range.
 * @returns {number} Which lies on range.
 */
function transitionInRange(number, max) {
    const min = -1;
    if(0 >= max){
        throw "Max must be greater than 0.";
    }
    while (min >= number || number >= max) {

        while (number >= max)
            number -= max;

        while (number <= min)
            number += max;
    }
    return number;
}
