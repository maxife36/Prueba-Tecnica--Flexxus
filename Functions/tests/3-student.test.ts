import Alumno from '../src/3-student'; 

describe('Prueba de la Clase Alumno', () => {
  let oldStudent: Alumno;
  let yungStudent: Alumno;
  let eighteenStudent: Alumno;

  beforeEach(() => {
    oldStudent = new Alumno('Maximiliano', 19);
    yungStudent = new Alumno('Celeste', 17);
    eighteenStudent = new Alumno('Matias', 18);
  });

  test('Crear instancia de Alumno y verificar datos', () => {
    expect(oldStudent).toBeInstanceOf(Alumno);
    expect(oldStudent).toHaveProperty('nombre', 'Maximiliano');
    expect(oldStudent).toHaveProperty('edad', 19);

    expect(yungStudent).toBeInstanceOf(Alumno);
    expect(yungStudent).toHaveProperty('nombre', 'Celeste');
    expect(yungStudent).toHaveProperty('edad', 17);

    expect(eighteenStudent).toBeInstanceOf(Alumno);
    expect(eighteenStudent).toHaveProperty('nombre', 'Matias');
    expect(eighteenStudent).toHaveProperty('edad', 18);
  });

  test('Verificacion de alumno MAYOR 18 años', () => {
    const logSpy = jest.spyOn(console, 'log'); 
    oldStudent.isAdult();
    expect(logSpy).toHaveBeenCalledWith('El Alumno Maximiliano es mayor de Edad');
    logSpy.mockRestore(); // Restaurar el método console.log
  });

  
  test('Verificacion de alumno DE 18 años', () => {
    const logSpy = jest.spyOn(console, 'log');
    eighteenStudent.isAdult();
    expect(logSpy).toHaveBeenCalledWith('El Alumno Matias es mayor de Edad');
    logSpy.mockRestore();
  });

  test('Verificacion de alumno MENOR 18 años', () => {
    const logSpy = jest.spyOn(console, 'log');
    yungStudent.isAdult();
    expect(logSpy).toHaveBeenCalledWith('El Alumno Celeste es menor de Edad');
    logSpy.mockRestore();
  });
});
