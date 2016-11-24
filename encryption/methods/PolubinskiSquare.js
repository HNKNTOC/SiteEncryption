/**
 * Encrypts the information according to the method of Polubinski Square.
 */
function Cryptographer() {
    this.alphabet =
        [
            ["а", "б", "в", "г", "д", "е"],
            ["ё", "ж", "з", "и", "й", "к"],
            ["л", "м", "н", "о", "п", "р"],
            ["с", "т", "у", "ф", "х", "ц"],
            ["ч", "ш", "щ", "ъ", "ы", "ь"],
            ["э", "ю", "я", "_", "(", ")"]
        ];

    /**
     *  Encryption text.
     * @param text The text you want to encryptionText.
     * @param mixing The number you want to mixing for text encryption.
     * @returns {string} The encrypted text.
     */
    this.encryptionText = function (text, mixing) {
        var arrText = text.split('');
        var out = "";

        for (var i = 0; i < text.length; i++) {
            out += this.encryptionChar(arrText[i], mixing);
        }
        return out;
    };

    /**
     * Encryption char.
     * @param char
     * @param mixing
     * @returns {*}
     */
    this.encryptionChar = function (char, mixing) {
        var i = 0;
        for (; i < this.alphabet.length; i++) {
            var index = this.alphabet[i].indexOf(char);
            if (index != -1) {
                return this.alphabet[mixingIndex(i, mixing,this.alphabet.length)][index];
            }
        }
        throw "Failed find char in alphabetText.";
    };
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
    if (0 >= max) {
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

/**
 * Get mixedIndex.
 * Add mixing at index and transitionInRange() result.
 * @param index not mixed index.
 * @param mixing on much want mixing.
 * @param max Max size for range.
 * @returns {int} Mixing index.
 */
function mixingIndex(index, mixing,max) {
    index += mixing;
    return transitionInRange(index, max);
}