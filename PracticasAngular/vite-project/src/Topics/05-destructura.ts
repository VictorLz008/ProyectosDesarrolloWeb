interface Audio{
    nivelvolumen:number;
    duracion:number;
    sonido:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    año:number;
}

const audio:Audio={
    nivelvolumen: 90,
    duracion: 36,
    sonido: "Mess",
    detalles:{
        autor:'ed',
        año:2015
    }
}
/*
const{
    nivelvolumen:volumen,
    detalles:{autor}
}=audio*/


const{nivelvolumen:volumen,detalles}=audio;
const{año}=detalles;


console.log('volumen con desestruturacion', volumen);
console.log('sonido', audio.sonido);
console.log('Duracion', audio.duracion);
console.log('Autor', audio.detalles.autor);
console.log('Autor con desestructuracionp', audio);
console.log('año,',año);


const arre1:string[]=['juana','edu','ashly'];
console.log('persona 3',arre1[2]||'no hay personaje');

const[,,,ultimo='no existe']: string[]=['pnataleon','serviriano','piccoro'];
console.log('personaje 3', ultimo);
