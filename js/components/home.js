// components/home.js
const homeView = `
    <h1>Bienvenido a la pagina de inicio</h1>
    <p>Esta es la pagina de inicio de mi aplicacion SPA.</p>
`;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app').innerHTML = homeView;
});
