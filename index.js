function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(books => books.forEach(book => renderBooks(book)))
  // To pass the tests, don't forget to return your fetch!
}

function renderBooks(books) {

  let h2 = document.createElement('h2');
  h2.innerHTML = books.name;
  document.querySelector('main').appendChild(h2);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


function initialize() {
  fetchBooks()
}
initialize()
