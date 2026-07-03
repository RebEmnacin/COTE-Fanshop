// ============================================================
// BOOKSHOP.JS — Logic for Bookshop.html (the book detail page)
// Reads the book ID from the URL and populates the page
// ============================================================

// URLSearchParams reads the query string from the URL
// e.g. if URL is Bookshop.html?id=3, params.get('id') returns "3"
const params = new URLSearchParams(window.location.search);
const bookId = parseInt(params.get('id')); // parseInt converts "3" (string) to 3 (number)

// .find() loops through the array and returns the first item where condition is true
const book = books.find(function(b) { return b.id === bookId; });

// If a book with that ID was found, populate the page
if (book) {
  document.querySelector('.book-title').textContent  = book.title;
  document.querySelector('.book-type').textContent   = book.subtitle;
  document.querySelector('.book-image').src          = book.image;
  document.querySelector('.book-image').alt          = book.title;
  document.querySelector('.book-info p').textContent = book.description;
  document.getElementById('book-price').textContent  = `$${book.price.toFixed(2)} USD`;
} else {
  // If no book found (e.g. someone manually typed a wrong ID in the URL)
  document.getElementById('bookshop-bg').innerHTML = `
    <div id="shop-back">
      <a href="Books.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>
        Back
      </a>
    </div>
    <p style="margin: 50px; font-family: Bebas Neue;">Book not found.</p>
  `;
}

// ------------------------------------------------------------
// QUANTITY BUTTONS — + and - logic
// ------------------------------------------------------------
const qtyInput = document.querySelector('#item-qty input');
const minusBtn = document.querySelectorAll('#item-qty button')[0]; // first button = minus
const plusBtn  = document.querySelectorAll('#item-qty button')[1]; // second button = plus

minusBtn.addEventListener('click', function() {
  // parseInt reads the input's current value as a number
  let current = parseInt(qtyInput.value);
  if (current > 1) {
    qtyInput.value = current - 1;
  }
});

plusBtn.addEventListener('click', function() {
  let current = parseInt(qtyInput.value);
  if (current < 10) {
    qtyInput.value = current + 1;
  }
});
