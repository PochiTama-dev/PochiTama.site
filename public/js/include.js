function container() {
    const ids = ['home', 'about', 'nuestro-equipo', 'servicios', 'form', 'footer'];
    const containers = [];
    ids.forEach(id => {
        const section = document.createElement('section');
        section.id = id;
        containers.push(section);
    });
    return containers;
}

function rideOn(array) {
    const containers = container();
    containers.forEach((container, index) => {
        container.innerHTML = array[index];
        document.querySelector('body').appendChild(container);
    });   
}

rideOn(partials)
