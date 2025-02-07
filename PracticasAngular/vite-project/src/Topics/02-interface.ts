let datos: string[]=['nombre','apellidoP','apellidoM'];
const masdatos: string[]=['nombre','apellidoP','apellidoM'];

interface Iperfil{
    nombre:string;
    edad: number;
    sexo:string| undefined;
    puesto: string[];
}

const perfil: Iperfil = {
    nombre:"Victor",
    edad: 24,
    sexo: "H",
    puesto: ['analista','programador','Diseñador']
};

perfil.nombre='victor';

console.table(perfil);