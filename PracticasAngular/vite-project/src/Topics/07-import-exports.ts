import { calcularCompra, Producto } from "./06-desArgumentos"

const CompraProd: Producto[]=[
    {
        descripcion:'Nokia',
        precio:100
    },
    
    {
        descripcion:'Ipad',
        precio:200
    }
    
];

const[total,impuesto]= calcularCompra({
    productos:CompraProd,
    impuesto:0.15
});

console.log('total',total);
console.log('impuesto',impuesto)