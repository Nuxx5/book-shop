const KEY = 'books';
var gBooks;
// var gImages = ['1.png', '2.png', '3.png', '4.png'];
const PAGE_SIZE = 5;
var gPageIdx = 0;
var gSortBy;

_createBooks();

function getBooks() {
    var books = loadFromStorage('books');
    if (!books || !books.length) books = _createBooks(21);
    gBooks = books;
    if (gSortBy) books = getBooksSorted(books);
    var startIdx = gPageIdx * PAGE_SIZE;
    return gBooks.slice(startIdx, startIdx + PAGE_SIZE)
}

function nextPage() {
    gPageIdx++;
    if (gPageIdx * PAGE_SIZE >= gBooks.length) {
        gPageIdx = 0;
    }
}

function _createBooks() {
    var books = loadFromStorage(KEY)

    if (!books || !books.length) {
        books = []
        for (let i = 0; i < 21; i++) {
            // var image = gImages[getRandomIntInclusive(0, gImages.length - 1)]
            books.push(_createBook())
        }
    }
    gBooks = books;
    _saveBooksToStorage();
}

function _createBook(name = makeLorem(5), price = getRandomIntInclusive(10, 30)) {
    return {
        id: makeId(),
        name: name,
        rating: 0,
        price: price,
        desc: makeLorem(100)
    }
}

function rateBook(bookId, action) {
    var book = getBookById(bookId);

    if (
        (!action && book.rating <= 1) ||
        (action && book.rating > 9)
    )
        return;

    action ? book.rating++ : book.rating--;
    saveToStorage(KEY, gBooks);
}

function addBook(name, price) {
    var book = _createBook(name = prompt(getTrans('prompt-name')), price = +prompt(getTrans('prompt-price')))
    gBooks.unshift(book)
    _saveBooksToStorage();
}

function deleteBook(bookId) {
    var answer = confirm(getTrans('delete-confirm'));
    if (!answer) return;
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    // if(bookIdx === -1) return;
    gBooks.splice(bookIdx, 1)


    _saveBooksToStorage();

}

function updateBook(bookId, newPrice) {
    var book = gBooks.find(function(book){
        return book.id === bookId;
    })
    // var book = getBookById(carId)
    book.price = newPrice;
    _saveBooksToStorage();
}

function getBookById(bookId) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    return book
}

function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}

function sortBy(sortBy) {
    gSortBy = sortBy;
}

function getBooksSorted(books) {
    if (gSortBy === 'title') return _sortByTitle(books);
    return _sortByNumber(books);
}

function _sortByTitle(books) {
    return books.sort((book1, book2) => {
        return book1.title.localeCompare(book2.title);
    });
}

function _sortByNumber(books) {
    return books.sort((book1, book2) => {
        return book1[gSortBy] - book2[gSortBy];
    });
}