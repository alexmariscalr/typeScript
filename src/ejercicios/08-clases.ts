
/*
    ===== Código de TypeScript =====
*/
class personaNormal {
    constructor(
        public nombre: string, 
        public direccion: string
    ) {}

}

class Heroe extends personaNormal {
    
    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string 
    ) {
        super( nombreReal, "New York" );
    }
}



const ironman = new Heroe("Ironman",45,"Pedro");
console.log(ironman);