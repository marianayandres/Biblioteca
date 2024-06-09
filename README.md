# Biblioteca

## Descripción proyecto:
Este proyecto principalmente está enfocado en facilitar la búsqueda de libros al momento de una solicitud de préstamo por parte de un usuario en nuestra biblioteca, teniendo la facilidad de buscar el libro en nuestra aplicación, por medio de su titulo o su autor, esto además de informarnos si contamos con el libro en nuestras instalaciones, nos especifica su genero y la locación en la que se encuentra dentro de nuestra biblioteca.
El código fue realizado en la aplicación Visual Studio Code, al momento de realizarla no se usó ningún framework, el lenguaje utilizado es Java Script además cuenta con una interfaz grafica creada con html y css que es amigable para el usuario.

## Requisitos para la instalación y ejecución:
Para probar la aplicación se puede abrir el archivo index.html en el navegador de su preferencia o usar un servidor local como lo es Go Live de Visual Studio Code

## Descripción de las funcionalidades:
Definición de Clases: Se definen dos clases: Book para representar la información de un libro y BookNode para representar un nodo en un árbol binario de búsqueda.
Insertar Libros: La función insertBook permite insertar un libro en un árbol binario de búsqueda. Cuando insertas un libro, se verifica si ya existe en el árbol y, si no, se guarda en el almacenamiento local.
Guardar Libros en el Almacenamiento Local: La función saveBookToLocal guarda el libro en el almacenamiento local del navegador web. Antes de guardar, se verifica si el libro ya existe para evitar duplicados.
Buscar Libros por Título o Autor: La función searchBook busca un libro en el árbol binario de búsqueda por su título. Además, se ha agregado la función searchBookByAuthor para buscar libros por autor. Ambas funciones pueden ser utilizadas para realizar búsquedas independientes por título o autor.
Interfaz de Usuario: Se han añadido funciones y eventos para interactuar con la interfaz de usuario. Puedes agregar libros utilizando un formulario y buscar libros por título o autor haciendo clic en botones correspondientes.
Mostrar Información de Libros: La función displayBookInfo muestra la información de los libros encontrados en la interfaz de usuario. Si se encuentra algún libro, se muestra su título, autor, género y ubicación; de lo contrario, se muestra un mensaje de error indicando que el libro no fue encontrado.

