# 🛍️ Segunda entrega React Coderhouse - Mateo Castillo

Este proyecto es una tienda online realizada con **React** como parte de la segunda entrega del curso de React de Coderhouse.  
Se enfoca en implementar **React Router** para lograr la navegación entre distintas vistas de productos, filtrado por categorías y vista detallada de cada producto.

---

## 📌 Funcionalidades

- Navegación entre vistas usando **React Router**.
- Visualización del catálogo completo de productos.
- Filtrado por categorías desde el menú de navegación.
- Vista en detalle de cada producto.
- Simulación de fetch asincrónico con `Promises` y `setTimeout`.
- Componentes reutilizables, contenedores y de presentación.
- Página 404 para rutas inexistentes.

---

## 🧠 Tecnologías utilizadas

- React  
- React Router DOM  
- HTML & CSS  
- JavaScript (ES6+)

---

## 🗂️ Estructura del proyecto

```
src/
│
├── components/
│   ├── NavBar.jsx
│   ├── ItemListContainer.jsx
│   ├── ItemDetailContainer.jsx
│   └── ...
│
├── data.js
├── App.js
├── App.css
└── index.js
```

> Todos los componentes se mantienen en la carpeta `components` por simplicidad. No se utilizó estructura en subcarpetas.

---

## 🚀 Cómo correr el proyecto

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/cxmateo/Tienda.git
   ```

2. Instalá las dependencias:

   ```bash
   npm install
   ```

3. Iniciá el servidor de desarrollo:

   ```bash
   npm start
   ```

4. Accedé a la app desde:  
   [http://localhost:3000](http://localhost:3000)

---

## ✅ Requisitos cumplidos

- ✅ Rutas para catálogo completo, por categoría y vista de detalle.  
- ✅ Uso de React Router (`useParams`, `Routes`, `Route`, etc.).  
- ✅ Llamadas simuladas asincrónicas.  
- ✅ División entre contenedores y presentacionales.  
- ✅ `.map()` para renderizar productos con `key`.  
- ✅ Página 404 personalizada.

---

## 💡 Autor

**Mateo Leonel Castillo**  
Curso ReactJS - Coderhouse  
GitHub: [@cxmateo](https://github.com/cxmateo)

---

## 📝 Licencia

Este proyecto es de uso **educativo**.
