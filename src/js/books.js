// ============================================================
// BOOKS.JS — Logic for Books.html (the listing/grid page)
// Renders book cards into #books-bg and handles all filters
// ============================================================

const booksBg = document.getElementById('books-bg');

// ------------------------------------------------------------
// RENDER — builds and inserts book cards into #books-bg
// ------------------------------------------------------------
function renderBooks(filteredBooks) {
  booksBg.innerHTML = ''; // clears current cards before re-rendering

  if (filteredBooks.length === 0) {
    booksBg.innerHTML = '<p class="no-results">No books found.</p>';
    return;
  }

  filteredBooks.forEach(function(book) {
    // createElement makes a new HTML element in memory (not on screen yet)
    const card = document.createElement('div');
    card.className = 'book-card';

    // innerHTML sets the HTML content inside the card
    card.innerHTML = `
      <img class="card-img" src="${book.image}" alt="${book.title}" />
      <div class="card-info">
        <p class="card-title">${book.title}</p>
        <p class="card-subtitle">${book.subtitle}</p>
        <p class="card-price">$${book.price.toFixed(2)} USD</p>
      </div>
    `;

    // When a card is clicked, go to Bookshop page and pass the book's id in the URL
    // e.g. Bookshop.html?id=3
    card.addEventListener('click', function() {
      window.location.href = `BookBuy.html?id=${book.id}`;
    });

    // appendChild puts the card into #books-bg on the actual page
    booksBg.appendChild(card);
  });
}

// ------------------------------------------------------------
// FILTER — reads all checked boxes and filters the books array
// ------------------------------------------------------------
function applyFilters() {
  // spread [...books] makes a copy so we don't modify the original array
  let filtered = [...books];

  // --- FORMAT FILTER ---
  const allChecked    = document.querySelector('input[name="ALL"]').checked;
  const novelChecked  = document.querySelector('input[name="Novels"]').checked;
  const mangaChecked  = document.querySelector('input[name="Manga"]').checked;

  // Only filter by format if ALL is not checked
  if (!allChecked) {
    const selectedFormats = [];
    if (novelChecked) selectedFormats.push('novel');
    if (mangaChecked) selectedFormats.push('manga');

    // If at least one format is selected, filter down to those formats
    if (selectedFormats.length > 0) {
      // .filter() loops through the array and keeps only items where the condition is true
      filtered = filtered.filter(function(book) {
        return selectedFormats.includes(book.format);
      });
    }
  }

  // --- ARC FILTER ---
  const selectedArcs = [];
  ['yearOne', 'yearTwo', 'yearThree', 'spinOffs'].forEach(function(arc) {
    if (document.querySelector(`input[name="${arc}"]`).checked) {
      selectedArcs.push(arc);
    }
  });

  if (selectedArcs.length > 0) {
    filtered = filtered.filter(function(book) {
      return selectedArcs.includes(book.arc);
    });
  }

  // --- SORT/FILTER OPTIONS ---
  // .sort() rearranges the array based on a comparison
  // (a, b) => a - b means ascending (low to high)
  // (a, b) => b - a means descending (high to low)

  if (document.querySelector('input[name="alphabetical"]').checked) {
    // localeCompare compares strings alphabetically
    filtered.sort(function(a, b) { return a.subtitle.localeCompare(b.subtitle); });

  } else if (document.querySelector('input[name="numerical"]').checked) {
    filtered.sort(function(a, b) { return a.id - b.id; });

  } else if (document.querySelector('input[name="trending"]').checked) {
    // lower trending number = more popular, so sort ascending
    filtered.sort(function(a, b) { return a.trending - b.trending; });

  } else if (document.querySelector('input[name="oldestTOnewest"]').checked) {
    // new Date() converts "YYYY-MM-DD" string into a comparable date number
    filtered.sort(function(a, b) { return new Date(a.date) - new Date(b.date); });

  } else if (document.querySelector('input[name="newestTOoldest"]').checked) {
    filtered.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
  }

  renderBooks(filtered);
}

// ------------------------------------------------------------
// "ALL" CHECKBOX BEHAVIOR
// Checking ALL auto-checks both novel and manga
// Unchecking ALL auto-unchecks both
// ------------------------------------------------------------
document.querySelector('input[name="ALL"]').addEventListener('change', function() {
  document.querySelector('input[name="Novels"]').checked = this.checked;
  document.querySelector('input[name="Manga"]').checked  = this.checked;
  applyFilters();
});

// ------------------------------------------------------------
// SORT CHECKBOXES — only one active at a time (like radio buttons)
// ------------------------------------------------------------
const sortNames = ['alphabetical', 'numerical', 'trending', 'oldestTOnewest', 'newestTOoldest'];

sortNames.forEach(function(name) {
  document.querySelector(`input[name="${name}"]`).addEventListener('change', function() {
    if (this.checked) {
      // Uncheck all other sort options when one is selected
      sortNames.forEach(function(otherName) {
        if (otherName !== name) {
          document.querySelector(`input[name="${otherName}"]`).checked = false;
        }
      });
    }
    applyFilters();
  });
});

// ------------------------------------------------------------
// ALL OTHER CHECKBOXES — just re-run filters on change
// ------------------------------------------------------------
['Novels', 'Manga', 'yearOne', 'yearTwo', 'yearThree', 'spinOffs'].forEach(function(name) {
  document.querySelector(`input[name="${name}"]`).addEventListener('change', applyFilters);
});

// ------------------------------------------------------------
// INITIAL RENDER — show all books when page first loads
// ------------------------------------------------------------
renderBooks(books);
