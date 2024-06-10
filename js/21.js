//eventos de submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombre = document.querySelector('#nombre')
    const password = document.querySelector('#password').value
    // console.log(nombre.value)
    // console.log(password)
    // console.log('mondongo')

    //prevenir mas alertas 
    const alertaPrevia = document.querySelector('.alerta')

    alertaPrevia?.remove()


    const alerta = document.createElement('DIV')
    alerta.textContent = 'Contenido de alerta'
    // alerta.classList='clase1'
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')
    console.log(alerta)
    if (nombre === '' || password === '') {
        alerta.textContent = 'Upss algun campo vacio'
        alerta.classList.add('bg-red-500')
    } else {
        alerta.textContent = 'Iniciando Sesion'
        alerta.classList.add('bg-green-500')

    }
    formulario.appendChild(alerta);

    setTimeout(() => {
        // formulario.removeChild(alerta)
        alerta.remove();
    }, 1000)

})