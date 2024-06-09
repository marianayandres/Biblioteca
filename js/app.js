// Definir el nodo raíz del árbol
let rootNode = null;

// Clase Libro para representar la información de un libro
class Book {
  constructor(title, author, genre, aisle) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.aisle = aisle;
  }
}

// Clase BookNode para representar un nodo en el árbol binario de búsqueda
class BookNode {
  constructor(book) {
    this.book = book;
    this.leftChild = null;
    this.rightChild = null;
  }
}

// Función para insertar un libro en el árbol binario de búsqueda y guardarlo en el almacenamiento local
function insertBook(rootNode, newBook) {
  if (rootNode === null) {
    rootNode = new BookNode(newBook);
    console.log("Libro insertado como raíz:", newBook);
    // Guardar el libro en el almacenamiento local
    saveBookToLocal(newBook);
    return rootNode;
  }

  if (newBook.title < rootNode.book.title) {
    rootNode.leftChild = insertBook(rootNode.leftChild, newBook);
  } else if (newBook.title > rootNode.book.title) {
    rootNode.rightChild = insertBook(rootNode.rightChild, newBook);
  } else {
    console.error("Book with the same title already exists");
  }

  return rootNode;
}

// Función para guardar un libro en el almacenamiento local
function saveBookToLocal(book) {
  // Obtener los libros almacenados actualmente
  let storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  // Verificar si el libro ya existe en el almacenamiento local
  const existingBookIndex = storedBooks.findIndex(storedBook => storedBook.title === book.title);
  console.log(existingBookIndex);
  if (existingBookIndex === -1) {
    // Si el libro no existe, agregarlo
    storedBooks.push(book);
    // Guardar los libros actualizados en el almacenamiento local
    localStorage.setItem('books', JSON.stringify(storedBooks));
  } else {
    console.log("Book with the same title already exists");
  }
}




// Función para buscar un libro en el árbol binario de búsqueda
function searchBook(rootNode, searchTerm) {
  if (rootNode === null) {
    console.log("El nodo raíz es nulo. No se puede buscar.");
    return null;
  }

  if (rootNode.book.title.toLowerCase() === searchTerm.toLowerCase()) {
    return rootNode.book;
  } else if (searchTerm.toLowerCase() < rootNode.book.title.toLowerCase()) {
    return searchBook(rootNode.leftChild, searchTerm);
  } else {
    return searchBook(rootNode.rightChild, searchTerm);
  }
}

// Función para mostrar la información del libro encontrado
function displayBookInfo(book) {
  if (book) {
    const bookInfo = `
      Title: ${book.title}
      Author: ${book.author}
      Genre: ${book.genre}
      Aisle: ${book.aisle}
    `;
    console.log(bookInfo);
  } else {
    console.log("Book not found");
  }
}

// Función para agregar un libro
function insertarLibro() {
  const titleInput = document.getElementById("title").value;
  const authorInput = document.getElementById("author").value;
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  let OpcionsGenre = "";
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      OpcionsGenre = radioButton.value;
      break;
    }
  }
  const aisleInput = document.getElementById("aisle").value;
  
  rootNode = insertBook(rootNode, new Book(titleInput, authorInput, OpcionsGenre, aisleInput));

}

// Escuchar el evento "submit" del formulario para agregar un libro
const addBookForm = document.getElementById("add-book-form");
addBookForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto
  insertarLibro();
});


// Buscar un libro por título y mostrar su información
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function() {
  const searchTerm = document.getElementById("search-title").value;
  const foundBook = searchBook(rootNode, searchTerm);
  console.log(foundBook);
  displayBookInfo(foundBook);
});


// Función para mostrar la información del libro en la interfaz gráfica
function displayBookInfo(book) {
  const bookContainer = document.getElementById("book-container");

  // Limpiar contenido anterior
  bookContainer.innerHTML = "";

  if (book) {
    const bookInfo = `
      <div>
        <p>Título: ${book.title}</p>
        <p>Autor: ${book.author}</p>
        <p>Género: ${book.genre}</p>
        <p>Ubicación: ${book.aisle}</p>
      </div>
    `;
    const bookInfoElement = document.createElement("div");
    bookInfoElement.innerHTML = bookInfo;
    bookContainer.appendChild(bookInfoElement);
  } else {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Libro no encontrado";
    bookContainer.appendChild(errorMessage);
  }
}