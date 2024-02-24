document.addEventListener('DOMContentLoaded', function () {
    const addBookForm = document.getElementById('addBookForm');
    const bookList = document.getElementById('bookList');
  
    addBookForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const title = document.getElementById('bookTitle').value;
      const author = document.getElementById('bookAuthor').value;
  
      if (title && author) {
        const bookItem = document.createElement('li');
        bookItem.className = 'list-group-item';
        bookItem.innerHTML = `
          <span>${title} by ${author}</span>
          <button class="btn btn-danger btn-sm float-right delete-btn">Delete</button>
        `;
  
        bookList.appendChild(bookItem);
        addBookForm.reset();
  
        // Save to localStorage
        saveToLocalStorage();
      }
    });
  
    bookList.addEventListener('click', function (e) {
      if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
        saveToLocalStorage();
      }
    });
  
    function saveToLocalStorage() {
      const books = [];
      const bookItems = document.querySelectorAll('.list-group-item span');
      bookItems.forEach(item => {
        books.push(item.textContent);
      });
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    function loadFromLocalStorage() {
      const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
      storedBooks.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.className = 'list-group-item';
        bookItem.innerHTML = `
          <span>${book}</span>
          <button class="btn btn-danger btn-sm float-right delete-btn">Delete</button>
        `;
  
        bookList.appendChild(bookItem);
      });
    }
    document.addEventListener('DOMContentLoaded', function () {
        // ... (existing code)
      
        const searchInput = document.getElementById('searchBooks');
        searchInput.addEventListener('input', function () {
          const searchTerm = searchInput.value.toLowerCase();
          filterBooks(searchTerm);
        });
      
        function filterBooks(searchTerm) {
          const bookItems = document.querySelectorAll('.list-group-item');
          bookItems.forEach(item => {
            const bookText = item.querySelector('span').textContent.toLowerCase();
            if (bookText.includes(searchTerm)) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        }
      
        // ... (existing code)
      });
      
    // Load books from localStorage on page load
    loadFromLocalStorage();
  });
  