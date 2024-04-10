// 1.  Ejercicios destructuring
// Dado el siguiente objeto:
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
// Extrae la empleada Ana con todos sus datos personales:
// { "name": "Ana", "email": "Ana@gmail.com" }

const [, Ana] = empleados

// Extrae el email del empleado Luis --> Luis@gmail.com
const [luis] = empleados;


const { email } = luis
console.log(email);


// Dado el siguiente objeto:
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
// Cambia el nombre de la propiedad “name” por “nombre
// Extrae el nombre del Pokemon
const { name: nombre } = pokemon
console.log(nombre);

// Extrae el tipo de Pokemon que es
const { type } = pokemon

console.log(type);

// Extrae el movimiento “Tackle”

const { moves } = pokemon
const [, tackle] = moves
console.log(tackle)

// Ejercicios spread/rest
// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const mergearObjeto = { ...pokemon, ...pikachu };
console.log(mergearObjeto);

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

const sumEveryOther = (...numeros) => {
    let resultado = 0;
    for (const numero of numeros) {
        resultado += numero
    }
    return resultado
}

console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26 



// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

const addOnlyNums = (...arg) => {

    let resultado = 0;
    for (const argumento of arg) {
        if (typeof argumento === "number") {
            resultado += argumento
        }
    }
    return resultado
}

console.log(addOnlyNums(1, 'perro', 2, 4)); //7


// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...animales) => {
    return ` la cantidad de argumentos recibidos son:${animales.length}`
}

console.log(countTheArgs('gato', 'perro')); //2
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); //4

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
const arrNumeros = [1, 2, 3, 4, 5, 6, 6, 7, 8];
const arrLetras = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`]
const combineTwoArrays = (arr1, arr2) => {
    const arrUnidos = [...arr1, ...arr2];
    return arrUnidos
}

console.log(combineTwoArrays(arrNumeros, arrLetras));

// 3. Extras


// Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};
// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana
const { today } = HIGH_TEMPERATURES;
const { tomorrow } = HIGH_TEMPERATURES;
console.log(today)
console.log(tomorrow)


// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

const onlyUniques = (...datos) => {
    let result = datos.filter((item, index) => {
        return datos.indexOf(item) === index
    })
    const arrayUnico = [...result]

    console.log(arrayUnico)
}

onlyUniques('gato', 'pollo', 'cerdo', 'cerdo');
//['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

const combineAllArrays = (...arrays) => {
    const arrayNumeros = []
    for (let i = 0; i < arrays.length; i++) {
        arrayNumeros.push(arrays[i]);
    }
    console.log(arrayNumeros);
}


combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])
// [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]);
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]


// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
const numerosArgumentos = [1, 2, 3, 4, 5, 6, 7, 8]

const sumAndSquare = (...args) => {
    let resultado = 0;
    for (const num of args) {
        resultado += num * num;
    }
    return resultado;
}

const resultadoFinal = sumAndSquare(...numerosArgumentos);
console.log(resultadoFinal); 