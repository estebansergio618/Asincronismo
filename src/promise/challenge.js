const obtenerDatos = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

obtenerDatos (API)
    .then(data => {
        console.log(data.info.count);
        return obtenerDatos (`${API}${data.results[0].id}`)
    })
    .then (data=> {
        console.log(data.name)
        return obtenerDatos (data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err));