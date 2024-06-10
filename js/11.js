// optional chaining  (?)
const alumno = {
    nombre: 'Juan',
    clase: 'Programacion',
    aprobado: true,
    examenes: {
        examen1: 100
    }
}

// valida de si existe y si no existe pues no lo muestra y no mata el resto del codigo a ejecutar
console.log(alumno.examenes?.examen1)

// nullish coalesing operator (??)

// si el valor es nulo o no existe entonces asignamos el valor de la derecha osea 1 
const pagina = null ?? 1