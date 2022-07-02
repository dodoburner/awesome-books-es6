import storageAvailable from "./storage-available.js";
import addBooktoHTML from "./add-to-html.js";
import { books as newBooks } from "./adding.js"

const setStorage = () => {
  if (new storageAvailable('localStorage')) {
    newBooks.books = JSON.parse(localStorage.getItem('storageBooks'));
    newBooks.books.forEach((book) => {
      addBooktoHTML(book.title, book.author)
    })
  }
}

export default setStorage