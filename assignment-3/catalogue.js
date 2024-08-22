const rollNumber = "123456"; // Replace with your roll number

document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch(`https://api.assignment3.rohanhussain.com/books/26100130`, {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        loadBooks();
    })
    .catch(error => {
        alert("Error adding book: " + error.message);
    });
});

function loadBooks() {
    fetch(`https://api.assignment3.rohanhussain.com/books/26100130`)
    .then(response => response.json())
    .then(data => {
        const bookList = document.getElementById("bookList");
        bookList.innerHTML = "";

        data.books.forEach(book => {
            const bookItem = document.createElement("div");
            bookItem.className = "book-item";
            bookItem.innerHTML = `
                <p><strong>Title:</strong> ${book.title}</p>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Price:</strong> $${book.price}</p>
            `;
            bookList.appendChild(bookItem);
        });
    })
    .catch(error => {
        alert("Error loading books: " + error.message);
    });
}

loadBooks();
