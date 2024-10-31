import  filterArrays  from '../src/4-filterArrays';

const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();

describe('Prueba de Filtrados por Arrays', () => {
    afterEach(() => {
        jest.clearAllMocks(); 
    });

    test('Prueba de Filtrado con coincidencias PARCIALES entre arrays', () => {
        const x = ["n", "bro", "c", "|"];
        const y = ["d", "n", "l", "bro", "g"];
        
        filterArrays(x, y);
        
        expect(consoleLogMock).toHaveBeenCalledWith('n, bro');
    });

    test('Prueba de Filtrado con NINGUNA coincidencias entre arrays', () => {
        const x = ["a", "b", "c"];
        const y = ["d", "e", "f"];
        
        filterArrays(x, y);
        
        expect(consoleLogMock).toHaveBeenCalledWith('');
    });

    test('Prueba de Filtrado con TOTAL coincidencias entre arrays', () => {
        const x = ["d", "e", "f"];
        const y = ["d", "e", "f"];
        
        filterArrays(x, y);
        
        expect(consoleLogMock).toHaveBeenCalledWith('d, e, f');
    });
});
