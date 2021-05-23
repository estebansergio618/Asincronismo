function suma (numero1, numero2){
    return numero1 + numero2;
}

function calcular (numero1, numero2, callback){
    return callback(numero1, numero2)
}

console.log(calcular(6, 2, suma));
// con new Date accedo a la fecha de hoy
function fecha (callback){
    console.log(new Date);
    setTimeout(function (){
        let fecha = new Date;
        callback(fecha);
    },3000)
}

function fechaImpresa (nuevaFecha) {
    console.log(nuevaFecha);
}

fecha(fechaImpresa);