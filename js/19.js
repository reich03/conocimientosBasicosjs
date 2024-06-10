// eventos del dom - click

const heading = document.querySelector('.heading');
const navegacion = document.querySelectorAll('.navegacion a')
// heading.addEventListener('click', () => {
// heading.textContent='cambio al hacer click'
// })

// heading.addEventListener('mouseenter',()=>{
//     heading.textContent='cambio al hacer click'
// })

// heading.addEventListener('mouseleave',()=>{
//     heading.textContent='saliendo'
// })

navegacion.forEach(enlace =>{
    enlace.addEventListener('click',(e) =>{
        e.preventDefault()
        e.target.textContent='Diste Click'
    })
})