// const mostrarPersonajes = (resultados) => {
//     console.log(data.resultados);
//     const results = data.results;
//     const section = document.querySelector('.section');
//     let html = '';
//     results.forEach(element => {
//         html += `
//         <div class="card">
//         <img src="${element.image}" alt="${element.name}">
//         <h2>${element.name}</h2>
//         <p>${element.species}</p>
//         </div>
//         `
//     });
//     section.innerHTML = html;
// }
// url referencia a la Api 

//alert('sorido0')

const url = 'https://rickandmortyapi.com/api/character'
const url2 = 'https://hp-api.onrender.com/api/characters'

async function cargarData() {
    const respuesta = await fetch(url2);
    const data = await respuesta.json()
    return data
}

const  data  = cargarData()
setTimeout( async() => {
    console.log( await data)
}, 2000);

async function mostrarDatos(resp) {

    const data = await resp;
    console.log(data)
    const results = data;
    const section = document.querySelector('.section');
    let html = '';
    data.forEach(element => {
        html += `
            <div class="card">
            <img src="${element.image}" alt="${element.name}">
            <h2>${element.name}</h2>
            <p>Nickname: ${element.alternate_names}</p>
            <p>Birthday: ${element.dateOfBirth}</p>
            <p>Species: ${element.species}</p>
            <p>House: ${element.house}</p>
            <p>Patronus: ${element.patronus}</p>
            <p>ancestry: ${element.ancestry}</p>
            </div>
            `
    });
    section.innerHTML = html;
}

mostrarDatos(data);
// const mostrarPersonajes = (resultados) => { }



