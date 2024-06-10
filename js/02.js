//Tipo de Datos

//Undefined - dato el cual si no se asigna valor pero se inicializa entonces sera undefined
// let precio;
// console.log(precio);

// //String o cadenas 

// const alumno = 'Juan';

//  Numbers

// no discrimina entre float decimal o int todos son numbers
// const numero = 20;
// const numero2 = 10.1
// const numero3 = -100;

// Boolean 

// const descuento = true || false;

// Null
// const data = null ;

// Symbol

// const primerSymbol = Symbol(30);
// const segundoSymbol = Symbol(30);


// Objeto - Coleccion de propiedades de una representacion de algo de la vida real, este se compone de sus clave y valor 

const usuario = {
    id: 1,
    nombre: 'Jhojan',
    edad: 19,
    correo: 'redjhojan0319@gmail.com'
};

// console.log('Hola ' + usuario.nombre);
// console.table(usuario);

// Destructuring object

// const { nombre, edad, correo } = usuario;
// console.log('hola ' + nombre + ' tienes ' + edad + ' años')

// Object Literal Enchacement

// const autenticado = true;
// const user = 'juan'

// const newObject = {
//     autenticado: autenticado,
//     user: user
// }

// Object Manipulation

//Reescribir un valor
// usuario.edad = 20;

//Agregar uno que no existe
// usuario.estado = true;

//borrar Propiedad

// delete usuario.correo;

// console.log(usuario);

// Evitar agregar elminar o modificar las propiedades del objeto en cuestion

// Object.freeze(usuario);

// Evitar eliminar y agregar propiedades, pero si permite modificar el valor de las existentes

// Object.seal(usuario);