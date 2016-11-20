/**
 * Created by Nikita on 18.11.2016.
 * Шифрует информацию по методу Юлия Цезаря.
 */

var alphabet = "а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п,р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,ю,э,я, ";
var ARR = alphabet.split(',');


function coding(text, int) {
    var arrText = text.split('');
    var out = "";

    for (var i = 0; i < text.length; i++) {
        var index = ARR.indexOf(arrText[i]);
        out = out + ARR[extractedIndex(index,int)];
    }
    return out;
}

function extractedIndex(index,int) {
    var length = ARR.length;
    index += int;
    while (index >= length)
        index -= length;

    while (index <= -1)
        index += length;
    return index;
}
