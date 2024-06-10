// fetch api con async await

const url = 'https://jsonplaceholder.typicode.com/comments';

// const consultarApi = () => {

//     fetch(url)
//         .then((response) => {
//             console.log(response)
//             return response.json()
//         })
//         .then(data => {
//             console.log(data)
//         })

//         .catch(error => {
//             console.log(error)
//         })
// }

// consultarApi()

const consultarApi = async () => {

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Upss Hubo un error')
        }
        const data = await response.json()
        console.log(data);
    }
    catch (error) {
        console.log(error)
    }


}