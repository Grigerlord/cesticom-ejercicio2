/*
 * Generar un array con 20 números.
 * Se deben separar los números múltiplo de 2 y múltiplo de 3.
 * Los números restantes, deberán también ser separados.
 * Los resultados deberán ser mostrados a través de consola.
 */




//INICIALIZANDO LAS VARIABLES
let limiteArray = 20; //GUARDAR EL LIMITE EN UNA VARIABLE PERMITIRÁ USAR ESTE CÓDIGO CON LA CANTIDAD QUE DESEEMOS.
let multiplos = {
  //USANDO UN OBJETO, PODEMOS AGREGAR TANTOS NÚMEROS COMO QUERAMOS PARA AVERIGUAR SUS MÚLTIPLOS
  dos: 2,
  tres: 3
};
const array = []; //LA LISTA DE NÚMEROS A GENERAR
let listaMult2 = []; //MULTIPLOS DE 2
let listaMult3 = []; // MULTIPLOS DE 3
let mlt2 = 0;
let mlt3 = 0;

//GENERANDO EL ARRAY DE 20 (o n) NÚMEROS
for (let i = 1; i <= limiteArray; i++) {
  array.push(i);
}

//COPIANDO ARRAY, PARA ELIMINAR DEL NUEVO ARRAY LOS MULTIPLOS DE 2 Y 3
let resto = [...array];

//FUNCIÓN QUE CALCULA UN MÚLTIPLO.
const calcMult = (num, n) => num * n;

//FUNCIÓN PARA GUARDAR MULTIPLOS Y MODICAR RESTO
const modificador = (mlt, listaMlt) => {
  //RESCIBIMOS EL MÚLTIPLO CORRESPONDIENTE A LA ITERACIÓN DE ARRAY Y LA LISTA DE MULTIPLOS A MODIFICAR
  if (mlt <= limiteArray) {
    //MIENTRAS EL MÚLTIPLO SEA MENOR O IGUAL AL LÍMITE DEL ARRAY:
    listaMlt.push(mlt); //LO AGREGAMOS AL ARRAY DE MÚLTIPLOS CORRESPONDIENTE
    if (resto.indexOf(mlt) !== -1) {
      //SI EXISTE UN ELEMENTO EN "RESTO" IGUAL AL MÚLTIPLO:
      resto.splice(resto.indexOf(mlt), 1); //LO ELIMINAMOS DE "RESTO"
    }
  }
};

//SEPARANDO MULTIPLOS Y RESTANTES
array.forEach((n) => {
  mlt2 = calcMult(multiplos.dos, n); //CALCULAMOS LOS MÚLTIPLOS DE 2
  mlt3 = calcMult(multiplos.tres, n); //CALCULAMOS LOS MÚLTIPLOS DE 3

  //LLAMAMOS A A FUNCIÓN MODIFICADORA TANTAS VECES SEAN NECESARIAS. (EN ESTE CASO DOS VECES, PARA LA LISTA DE MÚLTIPLOS DE 2 Y LA LISTA DE MÚLTIPLOS DE 3) ENVIANDO LOS DATOS NECESARIOS: EL MÚLTIPLO CORRESPONDIENTE A LA ITERACIÓN Y EL ARRAY CORRESPONDIENTE AL MÚLTIPLO
  modificador(mlt2, listaMult2);
  modificador(mlt3, listaMult3);
});

//IMPRIMIENDO EN CONSOLA
console.log("Multiplos de 2: " + listaMult2);
console.log("Multiplos de 2: " + listaMult3);
console.log("Numeros restantes: " + resto);
