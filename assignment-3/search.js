const rollNumber = "26100130"; // Replace with your roll number

function searchBooks() {
    const query = document.getElementById("query").value;

    fetch(`https://api.assignment3.rohanhussain.com/books/search/26100130?query=${query}`)
    .then(response => response.json())
    .then(data => {
        const searchResults = document.getElementById("searchResults");
        searchResults.innerHTML = "";

        data.books.forEach(book => {
            const bookItem = document.createElement("div");
            bookItem.className = "book-item";
            bookItem.innerHTML = `
                <p><strong>Title:</strong> ${book.title}</p>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Price:</strong> $${book.price}</p>
            `;
            searchResults.appendChild(bookItem);
        });
    })
    .catch(error => {
        alert("Error searching books: " + error.message);
    });
}
