import Book from "./book-constructor.js";
import addBooktoHTML from "./add-to-html.js";
const addBtn = document.querySelector('.add-btn');
const title = document.getElementById('title');
const author = document.getElementById('author');
let books = [];
let storageBooks;

export default () => {addBtn.addEventListener('click', () => {
  if (title.value !== '' && author.value !== '') {
    const newBook = new Book(title.value, author.value);
    books.push(newBook);
    localStorage.setItem('storageBooks', JSON.stringify(books));
    addBooktoHTML(title.value, author.value)
  }
})}

export {books}