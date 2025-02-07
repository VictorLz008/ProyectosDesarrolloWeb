export interface Producto{
    descripcion:string;
    precio:number;
}

const telefono:Producto={
    descripcion: "Nokia A1",
    precio: 150.0
}

const tableta:Producto={
    descripcion: "Ipad Air",
    precio: 250.0
}

interface ICalcularCampo{
    impuesto:number;
    productos:Producto[];
}


export function calcularCompra(options:ICalcularCampo):number[]
{
    let total=0;
    options.productos.forEach(productito=>{
        total+=productito.precio;
    });

    return [total, total * options.impuesto]
}


/*export function calcularCompra(options: ICalcularCampo):[number,number]{
    const{impuesto,productos}=options;
    let total=0;
    productos.forEach(({precio}))
}*/

const comp: ICalcularCampo = ({
    impuesto:0.15,
    productos: [tableta,telefono]
});

const resultad = calcularCompra(comp);
console.log(resultad);




