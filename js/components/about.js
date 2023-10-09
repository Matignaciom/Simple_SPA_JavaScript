// components/about.js
const aboutView = `
    <h1>Acerca de nosotros</h1>
    <p>Somos una team que construye apps SPA!</p>
`;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app').innerHTML = aboutView;
});
