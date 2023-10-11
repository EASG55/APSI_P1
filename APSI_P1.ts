//Practica 1 de Esteban Soto

// Space Seed
console.log("\n");
console.log("Space Seed", "\n")

// 1. Crear un tipo para guardar los datos de los pasajeros de la cápsula.
type PasajeroDato = {
  nombre: string;
  altura: number;
  edad: number;
  peso: number;
  genero: string;
};

// 2. Definir una interfaz para los datos de la cápsula.
interface CapsulaDato {
  peso: number;
  dimensiones: string;
  velocidadCurvatura: number;
  pasajeros: PasajeroDato[];
}

// 3. Definir una variable modificable para los datos del Enterprise.
let datosEnterprise: CapsulaDato = {
  peso: 10000,
  dimensiones: "100x50x30",
  velocidadCurvatura: 9.5,
  pasajeros: [
    { nombre: "Jack", altura: 180, edad: 35, peso: 75, genero: "masculino" },
    { nombre: "Amanda", altura: 165, edad: 28, peso: 60, genero: "femenino" }
  ],
};

console.log("Datos del Enterprise: ", datosEnterprise, "\n");

// 4. Uso de Object.keys y Object.values para obtener datos de la tripulación:
const nombreExistente = datosEnterprise.pasajeros.filter(
  (pasajero) => pasajero.nombre
);
const DatosConocidos = nombreExistente.map((pasajero) =>
  Object.keys(pasajero)
);



console.log("nombres pasajeros: ", nombreExistente, "\n",)
console.log("datos conocidos: ", DatosConocidos, "\n",)



// This Side of Paradise

console.log("\n");
console.log("This Side of Paradise", "\n");

// 1. Foreach para mostrar nombres de tripulantes sanos
type PasajerosInfectados = PasajeroDato & { infectado: boolean };

const tripulacion: PasajerosInfectados[] = [
  { nombre: "Kirk", altura: 180, edad: 35, peso: 75, genero: "Masculino", infectado: false },
  { nombre: "Spock", altura: 185, edad: 40, peso: 68, genero: "Masculino", infectado: true },
  { nombre: "McCoy", altura: 175, edad: 45, peso: 80, genero: "Masculino", infectado: false },
];

console.log("Tripulación: ", tripulacion, "\n")

console.log("tripulacion sana: ")

const mostrarTripulaciónSana = tripulacion.forEach((e) => {
  if(!e.infectado)
  console.log(e.nombre);
});

console.log("\n")


// 2. Some, every, find para verificar infecciones y encontrar próximo infectado
const alguienInfectado = tripulacion.some((tripulante) => tripulante.infectado);
const todosSanos = tripulacion.every(tripulante => !tripulante.infectado);
const proximoInfectado = tripulacion.find((tripulante) => tripulante.infectado);

console.log("Alguien Infectado?: ", alguienInfectado, "\n")

console.log("Todos Sanos?: ", todosSanos, "\n")

console.log("Proximo Infectado: ", proximoInfectado, "\n")


// The City on the Edge of Forever
console.log("\n");
console.log("The City on the Edge of Forever", "\n")

// 1. Usando filter para obtener fechas comprensibles

const listaDeFechas: any[] = ['2023', 'abcd', '2050', 'xyz', '1985'];
const fechasComprendibles = listaDeFechas.filter(fecha => !isNaN(parseInt(fecha)));

console.log("Lista de fechas: ", listaDeFechas, "\n")
console.log("Fechas comprensibles: ", fechasComprendibles, "\n")

// 2. Usando map para transformar las fechas

const datosPrecisos = fechasComprendibles.map((fecha) => {
  const año = parseInt(fecha);
  const mes = 1;
  const dia = 1;   
  const hora = 0;  
  const min = 0; 
  const sec = 0; 

  return { año, mes, dia, hora, min, sec
  };
});

console.log("Datos precisos: ", datosPrecisos, "\n");

// The Trouble with Tribbles

console.log("\n");
console.log("The Trouble with Tribbles ", "\n")

// 1. Usando reduce para obtener el número total de tribbles con más de 20 daños

const datosTurboConductores: [number, number, number][] = [
  [1, 25, 30],
  [2, 15, 10],
  [3, 30, 20],
];

const totalTribbles = datosTurboConductores
  .filter(([_, daño]) => daño > 20)
  .reduce((total, [, , tribbles]) => total + tribbles, 0);

console.log( "Datos de los Turbo Conductores: ", datosTurboConductores, "\n")
console.log( "Número total de tribbles en turbo conductores con más de 20 daños ", totalTribbles, "\n")

// 2. Crear una señal plana de datos y enviarla si el número de tribbles supera en un 50% al de los daños.

const señal = datosTurboConductores.flatMap(([conductor, daño, tribbles]) => [conductor, daño, tribbles]).join(', ');

const mandarSeñal = datosTurboConductores.some(([conductor, daño, tribbles]) => tribbles > daño * 1.5);

console.log('Señal a enviar:', señal);
console.log('Enviar señal de peligro:', mandarSeñal);

