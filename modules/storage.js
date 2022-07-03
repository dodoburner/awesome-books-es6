import StorageAvailable from './storage-available.js';
import addBooktoHTML from './add-to-html.js';

const getStorage = () => {
  if (new StorageAvailable('localStorage')) {
    const dataFromStorage = JSON.parse(localStorage.getItem('storageBooks'));
    let books = (dataFromStorage === null) ? [] : dataFromStorage;
    if (books !== null) {
      books.forEach((book) => {
        addBooktoHTML(book.title, book.author);
      });
    }
  }
};

export default getStorage;