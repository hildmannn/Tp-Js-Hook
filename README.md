# Aplicación de Recetas de Cocina con React

## Objetivo

El objetivo de este proyecto es desarrollar una aplicación en React que permita a los usuarios gestionar recetas de cocina. La aplicación utiliza los hooks `useState`, `useEffect`, y `useContext` para manejar el estado y efectos secundarios. Además, incluye una sección de recetas y una sección de detalles de una receta, permitiendo el registro y logueo de usuarios.

## Requisitos Funcionales

### Manejo de Usuarios
- **Registro y Login**: Los usuarios deben poder registrarse y loguearse en la aplicación utilizando `localStorage` y `sessionStorage`.
- **Rutas Dinámicas**: La aplicación debe manejar dinámicamente las rutas que pueden ser accedidas por usuarios logueados y deslogueados.

### Agregar Recetas
- **Formulario de Recetas**: Debe haber un formulario que permita a los usuarios agregar nuevas recetas, incluyendo al menos un nombre y una descripción.
- **Agregar a la Lista**: Al enviar el formulario, la nueva receta debe ser añadida a la lista de recetas.

### Mostrar Lista de Recetas
- **Listado de Recetas**: La aplicación debe mostrar una lista de todas las recetas agregadas, mostrando su nombre y descripción.
- **Actualización Automática**: La lista debe actualizarse automáticamente cuando se agrega o elimina una receta.

### Mostrar Detalles de una Receta
- **Vista de Detalles**: La aplicación debe mostrar detalles de cada receta, como su nombre, descripción e ingredientes.
- **Navegación con useParams**: Se debe navegar hacia esta vista usando `useParams` con el ID de la receta en particular.

### Eliminar Recetas
- **Opción de Eliminar**: Cada receta en la lista debe tener una opción para ser eliminada.
- **Eliminación de la Lista**: Al hacer clic en la opción de eliminar, la receta debe ser removida de la lista.

### Persistencia de Datos
- **Almacenamiento Local**: Las recetas deben ser guardadas en el almacenamiento local del navegador (`localStorage`).
- **Carga Automática**: Al recargar la página, las recetas previamente guardadas deben ser cargadas y mostradas.

## Requisitos Técnicos

### Uso de Hooks
- **useState**: Para manejar el estado local de los componentes.
- **useEffect**: Para realizar efectos secundarios, como la carga inicial de recetas desde `localStorage` y la actualización del almacenamiento local cuando cambie la lista de recetas.
- **useContext**: Para compartir el estado de las recetas entre componentes sin necesidad de pasar props manualmente.

### Componentes Reutilizables
- **Estructura de Componentes**: La aplicación debe estar dividida en componentes reutilizables y bien estructurados.
- **Componentes Esenciales**: Deben existir componentes para el formulario de agregar recetas, la lista de recetas y cada elemento de receta.


## Autores
- **Lucas Salzotto**
- **Valentin Hildmann**
