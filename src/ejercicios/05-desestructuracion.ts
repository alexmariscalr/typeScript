
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles {
    autor: string,
    year: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mess",
    detalles: {
        autor: "Ed Sheeran",
        year: 2015
    }
}

const { volumen: vol, segundo, cancion, detalles } = reproductor;
const {autor } = detalles;


/* console.log(" El volumen actual es de: " + vol)
console.log(" El segundo actual es de: " + segundo)
console.log(" El cancion actual es de: " + cancion)
console.log(" El autor es : " + autor) */

const plantilla: string[] = ['Unai', 'Yeray', 'Iñigo'];

const [p1, , p3] = plantilla;

console.log(" Jugador 1: ", p1)
//console.log(" Jugador 2: ", p2)
console.log(" Jugador 3: ", p3)


