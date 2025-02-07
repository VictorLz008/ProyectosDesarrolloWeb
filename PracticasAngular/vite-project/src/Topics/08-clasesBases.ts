
export class Persona{
    /*public nombre: string;
    public direccion:string;

    constructor(nombre1:string,direccion1:string){
        this.nombre=nombre1;
        this.direccion=direccion1;
    }*/

    constructor (public nombre1:string,public direccion1:string,public peso:number){

    }
}

const ObjPersona = new Persona('vic','puebla',24);

console.log(ObjPersona)

/*export class SuperHeero extends  Persona{
    constructor(public sobrenombre:string, public edad:number, public nombre:string){
        super(nombre,'CDMX',8)
    }
}

const pers=new SuperHeero('Alias',25,'Vic')
console.log(pers);*/



export class SuperHeero {

    constructor(public sobrenombre:string,public edad:number,public nombre:string,public person:Persona)
    {
        this.person=new Persona(nombre,'rrr',80);

    }
}


const ObjPer=new Persona('anita','CDMX',12);
const ana2=new SuperHeero('an',23,'Anita',ObjPer);

console.log(ana2);