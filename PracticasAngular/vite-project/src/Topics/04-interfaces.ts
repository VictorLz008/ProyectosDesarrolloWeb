interface SuperHero{
    nombre:string,
    age: number,
    adress:{
        calle:string,
        pais:string,
        ciudad: string
    };
    showAddress():string;
}


interface SuperHero{
    nombre:string,
    age: number,
    adress:{
        calle:string,
        pais:string,
        ciudad: string
    };
    showAddress:()=>string;
}

interface SuperHero{
    nombre:string,
    age: number,
    adress:Adress;
    showAddress:()=>string;
}

interface Adress {
    calle:string,
    pais:string,
    ciudad:string
}


const superHeroe: SuperHero={
    nombre:'spiderman',
    age:30,
    adress:{
        calle: '2 sur',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress(){
        return this.nombre+','+this.adress.ciudad+',' +this.adress.pais
    }
}

const  adress = superHeroe.showAddress();
console.log(adress);


