import Book from "./book-constructor.js";
const addBtn = document.querySelector('.add-btn');
const title = document.getElementById('title');
const author = document.getElementById('author');
let books = [];

export default () => {addBtn.addEventListener('click', () => {
  if (title.value !== '' && author.value !== '') {
    const newBook = new Book(title.value, author.value);
    books.push(newBook);
    console.log(books)
  }
})}