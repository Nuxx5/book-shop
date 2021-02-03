'use strict';

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var wordsEng = ['The sky', 'above', 'the port', 'was', 'tuned', 'to', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var wordsHeb = ['השמיים', 'מעל', 'הנמל', 'דרך', 'הקשב', 'לי', '.', 'כל', 'זה קרה', 'פחות או יותר', '.', 'אני', 'היה', 'הסיפור', 'צעד צעד', 'אנשים שונים', 'אהבה', 'בדרך כלל', 'קורה', 'במקרים מסויימים', 'כל פעם', 'בוא', 'עבור', 'סיפור', 'על', 'זה', 'היה', 'תענוג', 'גם', 'עושה']
    var txt = '';
    while (size > 0) {
        size--;
        if (gCurrLang === 'en') txt += wordsEng[Math.floor(Math.random() * wordsEng.length)] + ' ';
        else txt += wordsHeb[Math.floor(Math.random() * wordsHeb.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
