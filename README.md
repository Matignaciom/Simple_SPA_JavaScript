# Nombre del Proyecto
> Una aplicación web de página única (SPA) simple construida en JavaScript.

## Descripción
Este proyecto es una SPA básica desarrollada en JavaScript que demuestra cómo crear una aplicación web que carga contenido dinámicamente sin necesidad de recargar la página completa.
La SPA consta de dos vistas: "Home" y "About", y utiliza un sistema de navegación basado en URL para cambiar entre ellas.

## Demostración en Vivo
Puedes ver una demostración en vivo de la aplicación ##Pendiente...

## Capturas de Pantalla
Captura 1: Pendiente de subir
Captura 2: Pendiente de subir

## Características
- Navegación suave entre vistas sin recargar la página completa.
- Carga de vistas dinámicamente a partir de archivos JavaScript externos.
- URL amigables para el usuario con el uso de fragmentos de URL (`#`).

## Instalación en tu vscode
1. Clona este repositorio: `git clone https://github.com/Matignaciom/Simple_SPA_JavaScript.git`
3. Abre el archivo `index.html` en tu navegador web utilizando live server (recomendable).

## Uso
1. Haz clic en los enlaces de navegación "Home" y "About" en la barra de navegación para cambiar entre las vistas.
2. Observa cómo el contenido de la página se actualiza dinámicamente sin recargar la página completa.

## Ejemplo de Código

// Función para cargar una vista en la página
function loadView(viewName) {
    fetch(`./js/components/${viewName}.js`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('app').innerHTML = data;
        })
        .catch(error => {
            console.error(`Error loading view: ${error}`);
        });
}

// Función para manejar el cambio de la URL
function handleRouteChange() {
    const hash = window.location.hash.substr(2); // Eliminar el '#/'

    // Cargar la vista correspondiente según la URL
    if (hash === 'about') {
        loadView('about');
    } else {
        loadView('home');
    }
}

// Manejar el evento de cambio de URL
window.addEventListener('hashchange', handleRouteChange);

// Cargar la vista inicial
handleRouteChange();
