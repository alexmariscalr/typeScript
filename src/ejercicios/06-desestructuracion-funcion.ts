
/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: "Nokia A1",
    precio: 130
}

const tablet: Producto = {
    desc: "iPad Air",
    precio: 1300
}

export function calculaISV(productos: Producto[]) {
    let total = 0;

    productos.forEach( ({ precio })  => {
        total += precio;
    } )

    return [total,total*0.15];
}

const articulos = [telefono, tablet]
const [total , isv] = calculaISV( articulos);

console.log("El impuesto sobre ventas es: " + isv);
console.log("El total es: " + total);

