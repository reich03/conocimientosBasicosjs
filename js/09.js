// Array methods

const tecnologias = ['HTML', 'CSS ', 'REACT', 'EXPRESS'];
const numeros = [10, 20, 30, 430, 50];

//filter
// const nuevoArray = tecnologias.filter((tech) => tech === 'HTML')

// const resultado = numeros.filter(numbers => numbers !== 10)

//includes
// const resultado = tecnologias.includes('CSS'); // DEVUELVE TRUE

// Some  va a devolver si al meno uno de los elementos cumplela cundicion
// const resultado = numeros.some(numbers => numbers > 15) // Devuelve true

//find devuelve el primer elemento que cumpla con la condicion

// const resultado = numeros.find(numbers => numbers > 15)

//Every retorna true o false si todos los elementos cumplen la condicion

// const resultado = numeros.every(numbers => numbers > 15) // devuelve falso

// reduce retorna un acumulado del total

// const resultado = numeros.reduce((total, numero) => {
//     console.log(total)

//     return total + numero
// }, 0)

const resultado = numeros.reduce((total, numero) => total + numero, 0)