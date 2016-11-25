/**
 * Encrypts the information according to the method of Julius Caesar.
 */
function createCryptographerJuliusCaesar() {
    const alphabetText =
        "а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п,р," +
        "с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,ю,э,я,_";
    const alphabet = alphabetText.split(',');

    var crypt = new Cryptographer();
    crypt.alphabet = alphabet;
    crypt.encryptionChar = encryptionChar;
    return crypt;


    /**
     * Encryption char.
     * @param char Char which you want encryption.
     * @param mixed The number you want to mixed for char encryption.
     * @returns {*} Char encrypted.
     */
    function encryptionChar(char, mixed) {
        var index = alphabet.indexOf(char);
        return alphabet[mixingIndex(index, mixed, alphabet.length)];
    }
}

/**
 * Create Encryption alphabet on a method Julius Caesar.
 * @param alphabet Source alphabet.
 * @param mixed The number you want to mixing for alphabet encryption.
 * @returns {[*]} Alphabet encrypted.
 */
function createEncryptionAlphabet(alphabet, mixed) {
    var alphabetOut = [alphabet.length];
    for (var i = 0; i < alphabet.length; i++) {
        alphabetOut[mixingIndex(i, mixed, alphabet.length)] = alphabet[i];
    }
    return alphabetOut;
}
