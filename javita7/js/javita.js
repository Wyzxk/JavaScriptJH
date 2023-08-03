// var nombre = prompt("Dime tu nombre")
//     contado = prompt("Escribe tu monto")
//     contado1 = Number(contado)
// function equisde(){
// if (contado1 >= 0.6 && contado1 < 1){ 
//     alert(`${nombre} te puedes comprar el helado de agua y tu devuelto es `+ ( contado1 - 0.6))
// }
// else if(contado1 >= 1 && contado1 < 1.6){
//     alert(`${nombre} te puedes comprar el helado de crema`)
// }
// else if(contado1 >= 1.6 && contado1 < 1.7){
//     alert(`${nombre} te puedes comprar el helado de heladix`)
// }
// else if(contado1 >= 1.7 && contado1 < 1.8){
//     alert(`${nombre} te puedes comprar el helado de heladovich`)
// }
// else if(contado1 >= 1.8 && contado1 < 2.9){
//     alert(`${nombre} te puedes comprar el helado de helardo`)
// }
// else if(contado1 >= 2.9){
//     alert(`${nombre} te puedes comprar el helado de confite o el pote de 1/4 kg`)
// }
// else{
//     alert("no te puedes comprar una chota")
// }
// }
// equisde()

// let free = true

// const Validar = () =>{
//     edad = prompt("Dime tu edad")
//     if (edad >= 18){
//         alert("La persona puede ingresar")
//     }else{
//         alert("Eres menor de edad así que no puedes ingresar")
//     }
//     horaI = prompt("Hora de ingreso")
//     if (horaI == 0.2 && free == true){
//         alert("puedes ingresar gratis")
//         free = false
//     }else {
//         alert("Puedes ingresar, pero tienes que pagar")
//     }

// }


// let cantidad = prompt("¿Cuántos alumnos son?")
//  alumnosTotales = [];

// for (i = 0; i < cantidad; i++){
//     alumnosTotales[i] = [prompt("Nombre del alumno " +(i + 1) ), 0];
// }

// const tomarAsistencia = (nombre, p) =>{
// let presencia = prompt(nombre);
// if (presencia == "p" || presencia == "P"){
//     alumnosTotales[p][1]++
// }
// }
// for (i = 0; i < 30; i++){
//     for(alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0],alumno)
//     }
// }
// for (alumno in alumnosTotales){
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     _______presentes: ${alumnosTotales[alumno][1]},<br>
//     _______ausencias: ${30 - alumnosTotales[alumno][1]}`;
//     if (30 - alumnosTotales[alumno][1]> 18){
//         resultado+= "reprobado por inasistencias"

//     }else{
//         resultado+="<br><br>"
//     }
//     document.write(resultado)
// }



// const op = prompt("Qué tipo de operación deseas realizar")
// if (op == "sumar"){
//     sumar()
// }else if (op == "restar"){
//     restar()
// }else if (op == "dividir"){
//     dividir()
// }else if(op == "multiplicar"){
//     multiplicar()
// }else if(op == "potenciar"){
//     potenciar()
// }else if(op == "raiz cuadrada"){
//     raizCuadrada()
// }else if(op == "raiz cubica"){
//     raizCubica()
// }else { alert("no encuentro su tipo de operación")
// }
// function raizCuadrada(){
//     n1 = parseInt(prompt ("Primer número a sumar"))
//     document.write(Math.sqrt(n1))
// }
// function potenciar(){
//     n1 = parseInt(prompt ("Primer número a potenciar"))
//     n2 = parseInt(prompt ("Segundo número a potenciar"))
//     document.write (n1 ** n2 + `<br>`)
// }
// function sumar(){
//     n1 = parseInt(prompt ("Primer número a sumar"))
//     n2 = parseInt(prompt ("Segundo número a sumar"))
//     document.write (n1 + n2 + `<br>`)
// }
// function restar (){
//     n1 = parseInt(prompt ("Primer número a restar"))
//     n2 = parseInt(prompt ("Segundo número a restar"))
//     document.write (n1 - n2 + `<br>`)
// }
// function dividir (){
//     n1 = parseInt(prompt ("Primer número a dividir"))
//     n2 = parseInt(prompt ("Segundo número a dividir"))
//     document.write (n1 / n2 + `<br>`)
// }
// function multiplicar(){
//     n1 = parseInt(prompt ("Primer número a multiplicar"))
//     n2 = parseInt(prompt ("Segundo número a multiplicar"))
//     document.write (n1 * n2 + `<br>`)
// }


// var estado = undefined
// class celulares {
//     constructor(color,peso,rdp,rdc,ram){
//         this.color = color
//         this.peso = peso 
//         this.rdp = rdp
//         this.rdc = rdc 
//         this.ram = ram
//     }
//     prender (){
//       estado = prompt("Escribe encender, reiniciar o apagar")
//         if(estado == "encender"){
//             return alert("el celular está encendido")
//     } else if (estado == "reiniciar"){
//         return alert("el celular se está reiniciando")
//     }else if (estado == "apagar"){
//         return alert("el celular está apagado")
//  } 
// }   tomarFoto(){
//     alert(`foto tomada en una resolución de ${this.rdc}`)
// }   grabarVideo(){
//     alert(`video grabado en una resolución de ${this.rdc}`)
// }
// }
// celular1 = new celulares ("negro","15","5","5mpx","4")
// celular1.prender()
// celular1.tomarFoto()
// celular1.grabarVideo()
// console.log (celular1)



// let fn = function (){
//     console.log("hola")
// }
//  function some (f){
//     console.log("algo antes")
//     f()
//     console.log("algo después")
//  }

//  some(fn)


// let nombres = ["jhon","weon","reweon"];
// nombres.forEach((nombre)=> {
//     console.log(nombre);
// });




// const materias = {
//     fisica: ["Perez","pedro","pepito","cofla","maria"],
//     programacion: ["Dalto","pedro","juan","pepito"],
//     logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
//     quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
// }

// const obtenerInformacion = (materia)=>{

// if (materias[materia] !== undefined){
//     return [materias[materia],materia,materias];
// } else {
//     return materias;
// }
// }

// const mostrarInformacion = (materia)=>{
// let informacion = obtenerInformacion(materia);

// if (informacion !== false) {
// let profesor = informacion[0][0];
// alumnos = informacion[0];
// alumnos.shift();
// document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
//     Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
//     `);
// }
// }

// const cantidadDeClases = (alumno)=>{
// let informacion = obtenerInformacion();
// let clasesPresentes = [];
// let cantidadTotal = 0;
// for (info in informacion) {
//     if (informacion[info].includes(alumno)) {
//         cantidadTotal++;
//         clasesPresentes.push(" "+ info);
//     }
// }
// return `<b style='color:blue'>
// ${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
// <br><br>
// `;
// }


// mostrarInformacion("fisica");
// mostrarInformacion("quimica");
// mostrarInformacion("programacion");
// mostrarInformacion("logica");

// document.write(cantidadDeClases("cofla"))
// document.write(cantidadDeClases("pedro"))
// console.log(materias[materia])

// console.log ("loco")



//  const materias = {
//     fisica: [90,6,3,"fisica"],
//     logica: [84,8,2,"logica"],
//     programacion: [82,8,4,"programacion"],
//     matematicas: [90,3,2,"matematicas"]
//  }
 
//   const asis = function (){
//     for(materia in materias){
//        let asistenciass = materias[materia][0];
//        let promedio = materias[materia][1];
//        let trabajos = materias[materia][2];
//        console.log(materias[materia][3])
//    if (asistenciass >= 90){
//     console.log("asistencias en orden");

//    }else{ console.log("falta de asistencias");
   
//    }
//    if (promedio >= 7){ console.log("promedio en orden");
    
//    }else{ console.log("falta de promedio");
   
// } if (trabajos >= 4){ console.log("trabajos en orden");
    
// }else{ console.log("falta de trabajos");

// }
//     } 
//   }
// asis()



// function sumar () {
//    n1 = parseInt(prompt ("dime tu primer número a sumar"))
//    n2 = parseInt(prompt ("dime tu segundo número a sumar"))
//    resultado = document.write(n1 + n2)
   
// } 


// class carritospispas{
//    constructor({carrito="mercedes",color="rojo",motor="i4"}){
//       this.carrito = carrito 
//       this.color = color 
//       this.motor = motor
//    }

// }
// const carro = new carritospispas({carrito:"mazda",  motor : "i3"});
// console.log(carro)