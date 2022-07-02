import Book from "./book-constructor.js";
import addBooktoHTML from "./add-to-html.js";
import { books as newBooks } from "./storage.js"
import remove from "./removing.js"

const addBtn = document.querySelector('.add-btn');
const title = document.getElementById('title');
const author = document.getElementById('author');

export default () => {addBtn.addEventListener('click', () => {
  if (title.value !== '' && author.value !== '') {
    const newBook = new Book(title.value, author.value);
    newBooks.push(newBook);
    localStorage.setItem('storageBooks', JSON.stringify(newBooks));
    addBooktoHTML(title.value, author.value)
  }
})}
