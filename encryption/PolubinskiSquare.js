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
                return this.alphabet[this.mixingIndex(i, mixing)][index];
            }
        }
        throw "Failed find char in alphabetText.";
    };

    /**
     * Get index for mixed alphabetText.
     * @param index not mixed index.
     * @param mixing on much want mixing.
     * @returns {int} Mixing index.
     */
    this.mixingIndex = function (index, mixing) {
        var length = this.alphabet.length;
        index += mixing;
        return transitionInRange(index, length);
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