// Object Destructuring de dos o mas Objectos

const { default: cli } = require("@angular/cli")

// const usuario = {
//     id: 1,
//     nombre: 'Jhojan',
//     edad: 19,
//     correo: 'redjhojan0319@gmail.com'
// };

// const docente = {
//     id: 1,
//     nombre: 'Jhojan',
//     edad: 19,
//     correo: 'redjhojan0319@gmail.com',
//     cargo: 'Docente',
//     salario: 10000,
//     materias: {
//         materia1: 'ingles',
//         materia2: 'Artes'
//     }
// };


// const { nombre } = usuario;
// const { nombre: nombreDocente, materias: { materia1 } } = docente;

// Unir objetos

const producto = {
    nombre: 'pc ',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Jhojan  ',
    premium: true
}

// const carrito = {
//     cantidad: 1,
//     ...producto //spread operator
// }

// //crear o unir producto con cliente
// const nuevoObjeto = {
//     producto: { ...producto },
//     cliente: { ...cliente }
// }

// //unir con el object asign
// const nuevoObjeto2 = Object.assign(producto,cliente);