// let free = false;

// const validarCliente = (time) =>{
//     let edad = prompt("¿cuál es tu edad?");
//     if(edad >= 18) {
//         if (time >= 2 && time < 7 && free == false){
//             alert("Podes pasar gratis porque sos la primer persona después de las 2");
//             free = true;
//         } else{
//             alert(`son las ${time};00hs y podes pasar, pero tenes que pagar la entrada`);
//             }
//     } else {
//         alert("Sos menor de edad y no podes pasar")
//     }
// }
// validarCliente (23)
// validarCliente (24)
// validarCliente (0.2)
// validarCliente (0.6)
// validarCliente (1)
// validarCliente (2)
// validarCliente (2.4)
// validarCliente (3)
;
// let cantidad = prompt("¿Cuántos alumnos son?")
// let alumnosTotales = [];

// for (i = 0; i < cantidad; i++) {
//     alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
// }

// const tomarAsistencia = (nombre,p)=>{
//     let presencia = prompt(nombre);
//     if (presencia == "p"  || presencia == "P") {
//         alumnosTotales[p][1]++;
        
//     }
// }

// for (i = 0; i < 30; i++) {
//     for (alumno in alumnosTotales) {
//         tomarAsistencia(alumnosTotales[alumno][0],alumno);
//     }
// }
// for (alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}:<br>	
//     ______presentes: ${alumnosTotales[alumno][1]}<br>
//     _______ausencias: ${30 - alumnosTotales[alumno][1]}`;
//     if (30 - alumnosTotales[alumno][1] > 18) {
//         resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
        
//     } else {
//         resultado+="<br><br>"
//     } document.write(resultado)
// }
;
// const sumar = (num1,num2) => {
//  return parseInt(num1) + parseInt(num2)
// }
// const restar = (num1,num2) => {
//     return parseInt(num1) - parseInt(num2)
//    }
//    const multiplicar = (num1,num2) => {
//     return parseInt(num1) * parseInt(num2)
//    }
//    const dividir = (num1,num2) => {
//     return parseInt(num1) / parseInt(num2)
//    }
//    alert ("¿qué operación deseas realizar");
//    operacion = prompt("1: suma, 2: resta, 3: multiplicación, 4: división");

//    if (operacion == 1) {
//     let numero1 = prompt("primer número para sumaaaar");
//     let numero2 = prompt("segundo número para sumar");
//     resultado = sumar (numero1,numero2)
//     alert(`tu resultado es ${resultado}`)
//    }
//    else if(operacion ==2) {
//     let numero1 = prompt("primer número para sumar");
//     let numero2 = prompt("segundo número para sumar");
//     resultado = restar(numero1,numero2)
//     alert(`tu resultado es ${resultado}`)
//    }
//    else if (operacion ==3) {
//     let numero1 = prompt("primer número para sumar");
//     let numero2 = prompt("segundo número para sumar");
//     resultado = multiplicar(numero1,numero2)
//     alert(`tu resultado es ${resultado}`)
//    }
//    else if (operacion ==4) {
//     let numero1 = prompt("primer número para sumar");
//     let numero2 = prompt("segundo número para sumar");
//     resultado = dividir(numero1,numero2)
//     alert(`tu resultado es ${resultado}`)
//    }
//    else {
//     alert("No se ha encontrado la operación")
//    }


;
class App {
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}
	
	instalar(){
		if (this.instalada == false) {
			this.instalada = true;
			alert("app instalada correctamente")
		}
	}
	desinstalar(){
		if (this.instalada == true) {
			this.instalada = false;
			alert("app desinstalada correctamente")
		}
	}
	abrir(){
		if (this.iniciada == false && this.instalada == true) {
			this.iniciada = true;
			alert("app iniciada");
		}
	}
	cerrar(){
		if (this.iniciada == true && this.instalada == true) {
			this.iniciada = false;
			alert("app cerrada");
		}
	}

	appInfo(){
		return `
		Descargas: <b>${this.descargas}</b></br>
		Puntuacion: <b>${this.puntuacion}</b></br>
		Peso: <b>${this.peso}</b></br>
		`
	}

}
app = new App("16.000","5 estrellas","900mb");
app.instalar()
app.abrir()
app.cerrar()
app.desinstalar()
;
