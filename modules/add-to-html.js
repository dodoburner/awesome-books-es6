const booksContainer = document.getElementById('books-container');

const addBooktoHTML = (title, author) => {
  const bookHTML = document.createElement('div');
  bookHTML.classList.add('book');
  // if (index % 2 === 0) {
  //   bookHTML.classList.add('gray');
  // }
  bookHTML.innerHTML = `
        <p class="title">"${title}" By</p>
        <p class="author">${author}</p>
        <button class="remove-btn">remove</button>
    `;
  booksContainer.appendChild(bookHTML);
}
export default addBooktoHTML