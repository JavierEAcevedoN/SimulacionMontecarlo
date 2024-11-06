const NumeroRandom = (min, max) => {
    return Math.random() * (max - min) + min;
};

let dentroCirculo = 0;
let cantidadPuntos = 1000000;
let punto = {};

for (let i = 0; i < cantidadPuntos; i++) {
    punto.x = NumeroRandom(0, 2);
    punto.y = NumeroRandom(0, 2);

    if ((punto.x - 1) ** 2 + (punto.y - 1) ** 2 <= 1) {
        dentroCirculo++;
    }
}

console.log(
    `El valor estimado de PI es de ${(4 * dentroCirculo) / cantidadPuntos}`
);
