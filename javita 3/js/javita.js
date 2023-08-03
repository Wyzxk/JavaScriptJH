
// class carros { 
//     constructor(color, marca, kilometraje){
//     this.color = color
//     this.marca = marca
//     this.kilometraje = kilometraje
//     }
// }
// const CHEVROLET = new carros ("Negro","Chevrolet","125km")
;
class celulares {
    constructor(color,peso,rdp,rdc,ram){
        this.color = color
        this.peso = peso
        this.rdp = rdp
        this.rdc = rdc
        this.ram = ram
        this.encendido = false;
        this.mostrarInfo = `El color del celular es ${this.color}, el peso del celular es ${this.peso}, la resolución de pantalla es de ${this.rdp}, la resolución de camara es de ${this.rdc}`
    }
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;

        } else {
            alert("El celular apagado")
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular");

        } else{
            alert("El celular está apagado");
            this.encedido = false;
        }
    }
    tomarfotos(){
        alert(`Foto tomada en una resolución de: ${this.rdc}`)
    }
    grabarVideo() {
        alert(`grabando video en ${this.rdc}`)
    }
    mostrarInfo(){
     alert(this.mostrarInfo)
    }
    }
    
    class celularAltaGama extends celulares{

        constructor(color,peso,rdp,rdc,ram,rdce){
            super (color,peso,rdp,rdc,ram);
            this.resolucionDeCamaraExtra = rdce;
            this.mostrarInfoAltaGama = `El color del celular es ${this.color}, el peso del celular es ${this.peso}, la resolución de pantalla es de ${this.rdp}, la resolución de camara es de ${this.rdc}, la Ram de su dispositivo es de ${this.ram}, la resolución de la camara extra es de ${this.rdce}`
        }
        grabarVideoCamaraLenta(){
            alert("estás grabando en camara lenta");

        }reconocimientoFacial(){
            aler("vamos a iniciar un reconocimiento facial")
        }
        mostrarInfoAltaGama(){
            alert(this.mostrarInfoAltaGama)
        }
    }
    celular1 = new celularAltaGama("Rojo","130g","5.2","4k","3GB","Full hd")

    // 2celular1 = new celulares ("rojo","150GR","5'","Full hd","2GB");

    document.write(
        `${celular1.mostrarInfoAltaGama} <br>`
    )
    //2 celular1 = new celulares ("verde","150GR","5'","Full hd","2GB");

    // 2document.write(
    //     `${celular1.mostrarInfo}`
    // )   
;

class App {
    constructor(descargas,puntuación,peso){
        this.descargas=descargas
        this.puntuación=puntuación
        this.peso=peso
        this.iniciada = false;
        this.instaladas=false;
    }

    instalar(){ 
        if(this.instaladas== false){
            this.instaladas = true;
            alert("App instalada correctamente")
        }
    }
    desinstalar(){ 
        if(this.instaladas == true){
            this.instaladas = false;
            alert("App desinstalada correctamente")
        }
    }
    abrir(){
        if(this.iniciada == false && this.instaladas == true){
            this.iniciada = true;
            alert("App encendida");
        }
    }
    Cerrar(){
        if(this.iniciada == true && this.instaladas == true){
            this.iniciada = false;
            alert("app cerrada");
        }

    }
}
app = new App("16.000","5 estrellas","900mb")
app.instalar()
app.abrir()
app.Cerrar()
app.desinstalar()

