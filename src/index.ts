
/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string,
    hijos?: string[],
    
}

const pas1: Pasajero = {
    nombre: "Fernando"
}

const pas2: Pasajero = {
    nombre: "Natalia",
    hijos: ["Natalia", "Gabriel"]
}

function imprimeHijos( pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length ||0;

    console.log(cuantosHijos);
}

imprimeHijos(pas1);

