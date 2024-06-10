// Manejo de dom

//trayendolo mediante el classname o la clase 
// const heading = document.getElementsByClassName('heading');

//traemos mediante una consulta de selector y le indicamos que es una clase
const heading = document.querySelector('.heading');
console.log(heading)
console.log(heading.tagName)
console.log(heading.textContent)