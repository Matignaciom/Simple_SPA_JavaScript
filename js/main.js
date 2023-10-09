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
