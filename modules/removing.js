import { books as newBooks } from "./storage.js"
const booksContainer = document.getElementById('books-container');

let remove = () => {
  document.querySelectorAll('.remove-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      let bookNodes = Array.from(booksContainer.children)
      newBooks.splice(bookNodes.indexOf(btn.parentElement), 1)
      booksContainer.removeChild(btn.parentElement)
      localStorage.setItem('storageBooks', JSON.stringify(newBooks));
    })
  })
}
export default remove
