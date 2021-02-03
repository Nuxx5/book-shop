var gTrans = {
    title: {
        en: 'Book Shop',
        he: 'חנות ספרים'
    },
    'create-book': {
        en: 'Create A New Book',
        he: 'הוסף ספר חדש',
    },
    'book-id': {
        en: 'ID',
        he: 'מק״ט',
    },
    'book-title': {
        en: 'Title',
        he: 'כותר'
    },
    'book-rating': {
        en: 'Rating',
        he: 'דירוג',
    },
    'book-price': {
        en: 'Price',
        he: 'מחיר',
    },
    'actions': {
        en: 'Actions',
        he: 'פעולות',
    },
    'new-price': {
        en: 'Enter A New Price',
        he: 'הכנס מחיר חדש',
    },
    'delete-confirm': {
        en: 'Are you sure?',
        he: 'בטוח נשמה?',
    },
    read: {
        en: 'Read',
        he: 'מידע'
    },
    update: {
        en: 'Update',
        he: 'עדכן'
    },
    delete: {
        en: 'Delete',
        he: 'מחק'
    },
    'next-page': {
        en: 'Next Page',
        he: 'לעמוד הבא'
    },
    close: {
        en: 'Close',
        he: 'סגור'
    },
    'book-description': {
        en: 'Description',
        he: 'תאור'
    },
    'prompt-price': {
        en: 'Enter Price',
        he: 'הכנס מחיר',
    },
    'prompt-name': {
        en: 'Enter Book Name',
        he: 'הכנס שם ספר',
    }
 }
var gCurrLang = 'en';

    function doTrans() {
        var els = document.querySelectorAll('[data-trans]')
    els.forEach(function (el) {
    var transKey = el.dataset.trans
    var txt = getTrans(transKey);

    if (el.nodeName === 'INPUT') {
        el.setAttribute('placeholder', txt);
    } else {
        el.innerText = txt;
    }
})
}


function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';
    var txt = keyTrans[gCurrLang];

    // if not found return en
    if (!txt) txt = keyTrans['en'];
    return txt;
}

function setLang(lang) {
    gCurrLang = lang;
}

function formatNumOlder(num) {
    return num.toLocaleString('es')
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {
    console.log(num)
    if (gCurrLang === 'en') return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
    else return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(num * 3.20);
}

function formatDate(time) {

    var options = {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
        hour12: true,
    };

    return new Intl.DateTimeFormat(gCurrLang, options).format(time);
}

function kmToMiles(km) {
    return km / 1.609;
}