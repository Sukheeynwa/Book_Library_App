const addBookBtn = document.getElementById('addBook');
const addDialog = document.getElementById('dialog');
const closeBtn = document.getElementById('closeBtn');
const form = document.getElementById('form');
const libraryContainer = document.getElementById('libraryContainer');

const library = [];

addBookBtn.addEventListener('click', ()=> {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
    form.reset();
});

const Book = function(author, title, pages, isRead) {
    this.author = author,
    this.title = title,
    this.pages = pages,
    this.isRead = isRead
};

const bookAuthor = document.getElementById('bookAuthor');
const bookTitle = document.getElementById('bookTitle');
const bookPages = document.getElementById('bookPages');
const bookIsRead = document.getElementById('bookIsRead');
const submitBookBtn = document.getElementById('submitBook');

submitBookBtn.addEventListener('click', ()=> {
    const book = new Book(bookAuthor.value, bookTitle.value, bookPages.value, bookIsRead.value === 'on' ? true : false);

    library.push(book);
    renderLibrary();
    console.log(library);
    dialog.close();
    form.reset();
});

function renderLibrary() {
    libraryContainer.innerHTML = '';

    for (const book of library) {
        const bookContainer = document.createElement('div')
        bookContainer.id = "bookContainer";
        libraryContainer.appendChild(bookContainer);

        const bookAuthorText = document.createElement('p');
        bookAuthorText.textContent = "Book Author:" + book.author;
        bookContainer.appendChild(bookAuthorText);

        const bookTitleText = document.createElement('p');
        bookTitleText.textContent = "Book Title:" + book.title;
        bookContainer.appendChild(bookTitleText);

        const bookPagesText = document.createElement('p');
        bookPagesText.textContent = "Book Pages:" + book.pages;
        bookContainer.appendChild(bookPagesText);

        const bookIsReadText = document.createElement('p');
        bookIsReadText.textContent = "Book is Read:" + book.isRead;
        bookContainer.appendChild(bookIsReadText);
    }
}