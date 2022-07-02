import storageAvailable from "./storage-available.js";
import addBooktoHTML from "./add-to-html.js";
export let books = [];

const setStorage = () => {
  if (new storageAvailable('localStorage')) {
    let dataFromStorage = JSON.parse(localStorage.getItem('storageBooks'));
    books = (dataFromStorage === null) ? [] : dataFromStorage
    if (books !== null) {
      books.forEach((book) => {
        addBooktoHTML(book.title, book.author)
      })
    }
  }
}

export default setStorage