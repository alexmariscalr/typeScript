
/*
    ===== Código de TypeScript =====
*/
let habilidades = ['Bash', 'Counter', 'Healing', 1];
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', ' Counter', 'Healing'] 
}

personaje.puebloNatal = "Málaga "

interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal? : string
}

console.table(personaje)



