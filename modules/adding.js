import Book from './book-constructor.js';
import addBooktoHTML from './add-to-html.js';

const dataFromStorage = JSON.parse(localStorage.getItem('storageBooks'));
const books = (dataFromStorage === null) ? [] : dataFromStorage;
const addBtn = document.querySelector('.add-btn');
const title = document.getElementById('title');
const author = document.getElementById('author');

export default () => {
  addBtn.addEventListener('click', () => {
    if (title.value !== '' && author.value !== '') {
      const newBook = new Book(title.value, author.value);
      books.push(newBook);
      localStorage.setItem('storageBooks', JSON.stringify(books));
      addBooktoHTML(title.value, author.value);
      title.value = '';
      author.value = '';
    }
  });
};
