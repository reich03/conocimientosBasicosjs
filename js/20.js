// eventos dom Inputs

const inputNombre = document.querySelector('#nombre')
inputNombre.addEventListener('input', (e) => {

    console.log(e.target.value)
})

const inputPasword = document.querySelector('#password')
inputPasword.addEventListener('input', functionPassword)

function functionPassword() {
    inputPasword.type = 'text';
    setTimeout(() => {
        inputPasword.type = 'password';

    }, 500)
}