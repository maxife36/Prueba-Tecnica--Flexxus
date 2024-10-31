class Alumno {
  private readonly nombre: string;
  private readonly edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  showData() {
    console.log("Datos del Alumno:");
    console.log(` - Nombre: ${this.nombre}`);
    console.log(` - Edad: ${this.edad}`);
  }

  isAdult() {
    if (this.edad >= 18) {
      console.log(`El Alumno ${this.nombre} es mayor de Edad`);
    } else {
      console.log(`El Alumno ${this.nombre} es menor de Edad`);
    }
  }
}

export default Alumno
