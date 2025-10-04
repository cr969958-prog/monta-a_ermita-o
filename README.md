[README.md](https://github.com/user-attachments/files/22704498/README.md)
# Montaña del Ermitaño 🗻✨

Bienvenido a la tienda online **Montaña del Ermitaño**, un espacio dedicado a la venta de figuras de anime y productos otaku.

## 🚀 Características
- Página web atractiva y funcional
- Catálogo editable de productos
- Carrito de compras en JavaScript
- Secciones: Inicio, Tienda, Carrito, Nosotros, Contacto
- Totalmente personalizable

## 📂 Estructura del Proyecto
```
montana_ermitanio/
│── index.html       # Página principal
│── style.css        # Estilos de la página
│── script.js        # Funcionalidad del carrito
│── img/             # Carpeta para tus imágenes (productos, logo, banner)
```

## 🖼️ Personalización
1. Reemplaza `img/logo.png` con tu logo.
2. Cambia `img/banner.jpg` con tu banner.
3. Agrega las imágenes de tus productos en la carpeta `img/` y edita la sección **Catálogo** en `index.html`.

Ejemplo para agregar un nuevo producto en el HTML:
```html
<div class="producto">
  <img src="img/sasuke.jpg" alt="Sasuke">
  <h3>Sasuke Uchiha</h3>
  <p>$1000 MXN</p>
  <button onclick="agregarCarrito('Sasuke Uchiha', 1000)">Añadir</button>
</div>
```

## 🌍 Publicar en GitHub Pages
1. Crea un repositorio en [GitHub](https://github.com).
2. Sube los archivos (`index.html`, `style.css`, `script.js`, carpeta `img/`).
3. Ve a **Settings > Pages**.
4. En **Branch**, selecciona `main` y carpeta `/root`.
5. Guarda y espera 1-2 minutos.
6. Tu página estará disponible en:
   ```
   https://TU_USUARIO.github.io/NOMBRE_DEL_REPOSITORIO
   ```

## 📞 Contacto
Este proyecto está pensado para la tienda **Montaña del Ermitaño**.  
Puedes personalizar la sección de contacto en `index.html` con tus datos reales.

---
✨ Hecho con pasión otaku para coleccionistas de corazón.
