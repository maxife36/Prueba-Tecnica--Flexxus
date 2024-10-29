import oddNumbers from './oddNumbers'

describe('Pruebas de la función oddNumbers', () => {
    // Guardamos el console.log original
    const originalConsoleLog = console.log;

    beforeEach(() => {
        //reemplazo la funcion console.log para que cuando sea llamada desde oddNumbers ejecute esta funcion y no imprima por temrinal
        console.log = jest.fn();
    });

    afterEach(() => {
        // Restauramos console.log después de cada prueba
        console.log = originalConsoleLog;
    });

    test('oddNumbers() Debe imprimir por consola los números impares en el rango [0-100]', () => {
        oddNumbers();

        const expectedOutput = [
            1,  3,  5,  7,  9, 11, 13, 15, 17, 19, 21,
            23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43,
            45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65,
            67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87,
            89, 91, 93, 95, 97, 99
        ];

        expectedOutput.forEach(num => {
            // Aqui verifico si en algun momento se impirmio por consola el num
            expect(console.log).toHaveBeenCalledWith(num);
        });
        
        // Con esto me aseguro que no se salteó un numero, es decir si ejecuto correctamente el numero de veces la funcion console.log
        expect(console.log).toHaveBeenCalledTimes(expectedOutput.length);
    });

    test('oddNumbers(1, 11) Debe imprimir por consola los números impares en el rango [1-11]', () => {
        oddNumbers(1, 11);

        const expectedOutput = [1, 3, 5, 7, 9, 11];

        expectedOutput.forEach(num => {
            expect(console.log).toHaveBeenCalledWith(num);
        });

        expect(console.log).toHaveBeenCalledTimes(expectedOutput.length);
    });
});
