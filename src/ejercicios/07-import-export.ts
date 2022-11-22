
/*
    ===== Código de TypeScript =====
*/
import { Producto, calculaISV } from "./06-desestructuracion-funcion";
const carritoCompras: Producto[] = [

    {
        desc: "Teléfono 1",
        precio: 100
    },

    {
        desc: "Teléfono 2",
        precio: 400
    },
];

const [total, isv] = calculaISV( carritoCompras);

console.log( "Total: ", total);
console.log ( "ISV: " , isv);