// Diccionarios, ¿qué son?

let cuadro = [
    "La Gioconda",
    "Leonardo di Caprio",
    "77 cm x 53 cm",
    "fresa",
    1503,
    "Renacimiento"
];

console.log(cuadro[4]);

let cuadro = {
    "nombre": "La Gioconda",
    "artista": "Leonardo di Caprio",
    "tamano": "77 cm x 53 cm",
    "sabor": "fresa",
    "fecha": 1503,
    "periodo": "Renacimiento"
};

console.log(cuadro["nombre"]);

// Diccionarios, uso: Creación y adición de elementos

let cuadro = {};
cuadro["nombre"] = "La Gioconda";
cuadro["artista"] = "Leonardo di Caprio";
cuadro["tamaño"] = "77 cm x 53 cm";
cuadro["sabor"] = "fresa";
cuadro["fecha"] = 1503;
cuadro["periodo"] = "Renacimiento";

let cuadro = {
    "nombre": "La Gioconda",
    "artista": "Leonardo di Caprio",
    "tamano": "77 cm x 53 cm",
    "sabor": "fresa",
    "fecha": 1503,
    "periodo": "Renacimiento"
};

let cuadro = {
    "nombre": "La Gioconda",
    "artista": "Leonardo di Caprio"
};
cuadro["tamaño"] = "77 cm x 53 cm";
cuadro["sabor"] = "fresa";
cuadro["fecha"] = 1503;
cuadro["periodo"] = "Renacimiento";

// Diccionarios, uso: Modificación y borrado de elementos

cuadro["artista"] = "Leonardo da Vinci";

delete cuadro["sabor"];

// Diccionarios, uso: Acceso a los elementos

console.log(cuadro["nombre"]);

console.log(cuadro.nombre);

// Diccionarios, uso: Ejemplos de operaciones

let cuadro = {
    "nombre": "La Gioconda",
    "artista": "Leonardo da Vinci",
    "tamano": "77 cm x 53 cm",
    "fecha": 1503,
    "periodo": "Renacimiento"
};

console.log(Object.keys(cuadro));
console.log(Object.values(cuadro));
console.log(Object.entries(cuadro));
console.log(Object.keys(cuadro).length);

// Diccionarios, uso: Ejemplo de cómo recorrerlo

for (const [key, value] of Object.entries(cuadro)) {
    console.log(`${key}: ${value}`);
}

// Diccionarios, uso: Objetos compuestos

let cuadro = {
    "nombre": "La Gioconda",
    "artista": { "nombre": "Leonardo da Vinci", "nacimiento": 1452, "muerte": 1519 },
    "tamano": "77 cm x 53 cm",
    "fecha": 1503,
    "periodo": "Renacimiento"
};

console.log(cuadro["artista"]["nombre"]);
console.log(cuadro.artista.nacimiento);

let pintor = {
    "nombre": "Leonardo da Vinci",
    "nacimiento": 1452,
    "muerte": 1519
}
let cuadro = {
    "nombre": "La Gioconda",
    "artista": pintor,
    "tamano": "77 cm x 53 cm",
    "fecha": 1503,
    "periodo": "Renacimiento"
}

console.log(cuadro["artista"]["nombre"]);
console.log(cuadro.artista.nacimiento);

// Diccionarios, uso: Arrays y diccionarios

let cuadros = [
    {
        "nombre": "La Gioconda",
        "artista": "Leonardo da Vinci",
        "tamano": "77 cm x 53 cm",
        "fecha": 1503,
        "periodos": ["Renacimiento"]
    },
    {
        "nombre": "Las Meninas",
        "artista": "Diego Velázquez",
        "tamano": null,
        "fecha": 1656,
        "periodos": ["Barroco"]
    },
    {
        "nombre": "Guernica",
        "artista": "Pablo Picasso",
        "tamano": "349 cm x 777 cm",
        "fecha": 1937,
        "periodos": ["Cubismo", "Surrealismo"]
    },
    {
        "nombre": "Cesto con frutas",
        "artista": "Caravaggio",
        "tamano": "46 cm x 64 cm",
        "fecha": 1599,
        "periodos": ["Barroco"]
    }
];

for (const cuadro of cuadros) {
    if (cuadro["periodos"].indexOf("Barroco") == 0) {
        console.log(cuadro["nombre"], "de", cuadro["artista"]);
    }
}       
