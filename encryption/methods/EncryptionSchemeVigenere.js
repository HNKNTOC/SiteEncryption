/**
 * Encrypts the information according to the method  The encryption scheme of Vigenere.
 */
function createEncryptionSchemeVigenere() {
    const alphabetText =
        "а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п," +
        "р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,ю,э,я,_";

    var crypt = new Cryptographer();
    crypt.alphabet = createAlphabetVigenere(alphabetText);
    crypt.encryptionChar = encryptionChar;
    crypt.encryptionText = encryptionText;
    crypt.key = "";
    return crypt;

    function extractedKeyArr(key) {
        const lengthKey = key.length;
        if (lengthKey == 0) throw "Key length should not equally 0";
        var keyArray = new Array(lengthKey);
        for (var i = 0; i < lengthKey; i++) {
            keyArray[i] = crypt.alphabet[0].indexOf(key[i])
        }
        return keyArray;
    }

    /**
     * Encryption char.
     * @param char Char which you want encryption.
     * @param mixed The number you want to mixing for char encryption.
     * @returns {*} Char encrypted.
     */
    //TODO MIXED USE AS KEY.
    function encryptionChar(char, mixed) {
        //const max = crypt.alphabet.length;
        const indexChar = crypt.alphabet[0].indexOf(char);
        return crypt.alphabet[indexChar][mixed];
    }

    /**
     *  Encryption text.
     * @param text The text you want to encryptionText.
     * @param mixing The number you want to mixing for text encryption.
     * @returns {string} The encrypted text.
     */
    function encryptionText(text, mixing) {
        var arrText = text.split('');
        var out = "";
        const keyArr = extractedKeyArr(crypt.key);

        if (mixing < 0) {
            for (var i = 0; i < text.length; i++) {
                var key = keyArr[mixingIndex(i, 0, keyArr.length)];
                var char = arrText[i];
                for (var i2 = 0; i2 < crypt.alphabet.length; i2++) {
                    if(crypt.alphabet[key][i2] == char){
                        out +=crypt.alphabet[0][i2];
                        break;
                    }
                }
            }
            return out;
        }

        for (var i = 0; i < text.length; i++) {
            out += this.encryptionChar(arrText[i],
                keyArr[mixingIndex(i, 0, keyArr.length)]);
        }
        return out;
    }


}

function createAlphabetVigenere(alphabetText) {
    const alphabetLine = alphabetText.split(',');
    const length = alphabetLine.length;
    var alphabetOut = createTwoDimensionalArray(length, length);

    for (var i = 0; i < length; i++) {
        alphabetOut[i] = createEncryptionAlphabet(alphabetLine, i * -1);
    }
    return alphabetOut;
}

function createTwoDimensionalArray(length1, length2) {
    var alphabetOut = new Array(length1);
    for (var i = 0; i < length1; i++) {
        alphabetOut[i] = new Array(length2);
    }
    return alphabetOut;
}