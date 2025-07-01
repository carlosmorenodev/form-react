# Sistema de Autenticación Básico con React

Este proyecto es una aplicación de React que demuestra un sistema de autenticación de usuario básico. Permite a los usuarios iniciar sesión utilizando credenciales predefinidas y gestiona el estado de autenticación de forma persistente a través del almacenamiento local (`localStorage`).

---

## Características Principales

* **Autenticación de Usuario:** Los usuarios pueden iniciar sesión con un email y una contraseña. Las credenciales se validan contra una lista de usuarios predefinidos en `data/users.js`.
* **Gestión de Estado Persistente:** El estado de autenticación (`isAuthenticated`) se guarda en `localStorage`, lo que permite que el usuario permanezca logueado incluso después de cerrar y reabrir el navegador.
* **Mensajes de Bienvenida Personalizados:** Al iniciar sesión, se muestra un mensaje de bienvenida dinámico, incluyendo el `nick` del usuario, que también se persiste en `localStorage`.
* **Validación de Formulario:** El formulario de inicio de sesión incluye validaciones en tiempo real para el email (campo no vacío, formato con '@') y la contraseña (campo no vacío, longitud mínima).
* **Alternar Visibilidad de Contraseña:** Un icono de ojo permite a los usuarios mostrar u ocultar la contraseña mientras la escriben, mejorando la usabilidad.
* **Manejo de Errores y Mensajes de Éxito:** Se muestran mensajes claros de error para validaciones fallidas y un mensaje de éxito o error después del intento de inicio de sesión.
* **Cierre de Sesión:** Un botón de "Cerrar sesión" permite al usuario desautenticarse, borrando el estado de autenticación y los mensajes de `localStorage`.
* **Enrutamiento Condicional Simple:** La aplicación muestra diferentes componentes (`LoginPage` o `Inicio`) basándose en el estado de autenticación del usuario.

---

## Estructura del Proyecto

* **`App.jsx`**: Componente principal que gestiona el estado global de autenticación (`isAuthenticated`) y decide qué componentes renderizar (formulario de login o contenido para usuarios autenticados). Utiliza `localStorage` para persistir el estado de autenticación.
* **`Formulario.jsx`**: Componente encargado del formulario de inicio de sesión. Maneja los estados locales para email, contraseña, errores, mensajes de login y la visibilidad de la contraseña. Realiza las validaciones y la lógica de autenticación contra los datos de `users.js`. También gestiona el cierre de sesión.
* **`data/users.js`**: Archivo que contiene un array de objetos con las credenciales (email, password, nick) de los usuarios permitidos.
* **`LoginPage.jsx`**: (Componente no incluido en el código proporcionado, pero presumiblemente el contenido visible para usuarios autenticados).
* **`Inicio.jsx`**: (Componente no incluido en el código proporcionado, pero presumiblemente el contenido visible para usuarios no autenticados o la página de inicio).
* **`UsersTip.jsx`**: (Componente no incluido en el código proporcionado, pero presumiblemente un componente que muestra alguna información o "tip" relacionado con usuarios).
* **Estilos (`App.css`, `Formulario.css`)**: Archivos CSS para dar estilo a la aplicación y al formulario.

---

## Cómo Ejecutar el Proyecto

1.  Clona este repositorio.
2.  Navega a la carpeta del proyecto.
3.  Instala las dependencias: `npm install` o `yarn install`
4.  Inicia la aplicación: `npm run dev` o `yarn dev`
5.  Abre tu navegador y visita `http://localhost:5173` (o el puerto que indique tu terminal).

---

<h2 align="left">Hola, soy Carlos Moreno</h2>

###

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=carlosmorenodev&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=es&hide_border=true" height="150" alt="stats graph"  />
  <img src="https://github-readme-stats.vercel.app/api/top-langs?username=carlosmorenodev&locale=es&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=true" height="150" alt="languages graph"  />
</div>

###

<br clear="both">

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" alt="css3 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="30" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="30" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/astro/FF5D01" height="30" alt="astro logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/bootstrap/7952B3" height="30" alt="bootstrap logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/git/F05032" height="30" alt="git logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=github" height="30" alt="github logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/php/777BB4" height="30" alt="php logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/mysql/4479A1" height="30" alt="mysql logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/wordpress/21759B" height="30" alt="wordpress logo"  />
</div>

###

<br clear="both">

<div align="center">
  <a href="carlosmorenomartindev@gmail.com" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="gmail logo"  />
  </a>
  <a href="https://www.linkedin.com/in/carlosmorenomartindev/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="linkedin logo"  />
  </a>
  <a href="https://codepen.io/carlosmmdev" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Codepen&logo=codepen&label=&color=000000&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="codepen logo"  />
  </a>
</div>

###

<p align="center">Visita mi portfolio: <a align="center" href="https://carlosmorenodev.github.io/carlosmorenodev/" target="_blank">carlosmorenodev.github.io/carlosmorenodev</a></p>  





###
