/**
 * Encrypts the information according to the method  The encryption scheme of Vigenere.
 */
function createCryptographerJuliusCaesar() {
    const alphabetText =
        "а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п," +
        "р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,ю,э,я,_";

    var crypt = new Cryptographer();
    crypt.alphabet = createAlphabetVigenere(alphabetText);
    return crypt;

    function createAlphabetVigenere(alphabetText) {
        const alphabetLine = alphabetText.split(',');
        const length = alphabetLine.length;
        var alphabetOut = createTwoDimensionalArray(length,length);

        for (var i = 0; i < length; i++) {
            alphabetOut[i] = createEncryptionAlphabet(alphabetLine,i);
        }
        return alphabetOut;
    }
    
    function createTwoDimensionalArray(length1,length2) {
        var alphabetOut = new Array(length1);
        for (var i = 0; i < length1; i++) {
            alphabetOut[i] = new Array(length2);
        }
        return alphabetOut;
    }


}