//medir performance en peticiones
const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/todos';

// const consultarApi = async () => {

//     try {
//         const inicio = performance.now();
//         const response = await fetch(url)
//         if (!response.ok) {
//             throw new Error('Upss Hubo un error')
//         }
//         const data = await response.json()
//         console.log(data);
//         const fin = performance.now();
//         console.log(`El resultado es ${fin - inicio} ms`);
//     }
//     catch (error) {
//         console.log(error)
//     }


// }


// se ejecuta una seguida de la otra 
// const consultarApi = async () => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json()
//         console.log(data)


//         const response2 = await fetch(url2);
//         const data2 = await response2.json()
//         console.log(data2)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// Si las consultas son independientes y quiero ejecutarlas al mismo tiempo
const consultarApi = async () => {
    try {
        const [response, response2] = await Promise.all([fetch(url), fetch(url2)])

        const [data, data2] = await Promise.all([response.json(), response2
            .json()
        ])

        console.log(data)
        console.log(data2)
    }
    catch (error) {
        console.log(error)
    }
}
consultarApi()