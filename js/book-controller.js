'use strict'

function init() {

    renderBooks()
    // renderImages();
}

function renderBooks() {
    var books = getBooks();
    
    var strHTMLs = books.map(function (book) {
        return `<tr>
        <td>${book.id}</td>
        <td>${book.name}</td>
        <td>${book.rating}</td>
        <td>${formatCurrency(+book.price)}</td>
        <td><button class="blue" onclick="onRead('${book.id}')">${getTrans('read')}</button></td>
        <td><button class="yellow" onclick="onUpdate('${book.id}')">${getTrans('update')}</button></td>
        <td><button class="red" onclick="onDelete('${book.id}')">${getTrans('delete')}</button></td>
        </tr>`
    })
    document.querySelector('tbody').innerHTML = strHTMLs.join('')
}

function renderRating(bookId, rating) {
    var strHTMLs = `<td class="rating">   
        <button onclick="onRate('${bookId}',true)">+</button>
        <span>${rating}</span>
        <button onclick="onRate('${bookId}',false)">-</button>
    </td>
    `;
    document.querySelector('rating').innerHTML = strHTMLs.join('')
}

function onAddBook() {
    addBook();
    renderBooks();
}

function onDelete(bookId) {
    deleteBook(bookId)
    renderBooks()
}

function onUpdate(bookId) {
    var newPrice = +prompt(getTrans('new-price'));
    updateBook(bookId, newPrice);
    renderBooks();
}

function onRead(bookId) {
    var book = getBookById(bookId);
    book.desc = makeLorem(100)
    console.log(book.price);
    var elModal = document.querySelector('.modal')
    elModal.querySelector('h5').innerText = '📚 '+ `${getTrans('book-title')}` + ': ' + book.name
    elModal.querySelector('h6').innerText = `${getTrans('book-price')}` + ': ' + formatCurrency(+book.price)
    elModal.querySelector('.desc').innerText = `${getTrans('book-description')}` + ': ' + book.desc
    elModal.querySelector('.rating').innerHTML = `<button onclick="onRate('${bookId}',true)">+</button>
    <span class="rating-value">${book.rating}</span><button onclick="onRate('${bookId}',false)">-</button>`
    elModal.hidden = false;


}

function onCloseModal() {
    document.querySelector('.modal').hidden = true
}

function onNextPage() {
    nextPage();
    renderBooks();
}

function onRate(bookId, isPlus) {
    rateBook(bookId, isPlus);
    renderBooks();
    var elModal = document.querySelector('.rating-value')
    document.querySelector('.rating-value').innerText = getBookById(bookId).rating
  }
  
  function onSetLang(lang) {
    setLang(lang);
    // TODO: if lang is hebrew add RTL class to document.body
    if(lang === 'he') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
    doTrans();
    renderBooks();
}

function onSortBy(argument) {
    sortBy(argument);
    renderBooks();
}