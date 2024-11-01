-- seeders tabla LOCALIDADES
INSERT INTO LOCALIDADES (localidad, ACTIVO) VALUES 
('Córdoba', 1),
('Carlos Paz', 1),
('Buenos Aires', 1),
('Santiago del Estero', 1);

-- seeders tabla PUESTOS
INSERT INTO PUESTOS (PUESTO, ACTIVO) VALUES 
('Analista', 1),
('Programador', 1),
('Diseñador', 1),
('Gerente', 1),
('Soporte', 1);

-- seeders tabla DEPARTAMENTOS
INSERT INTO DEPARTAMENTOS (DENOMINACION, LOCALIDAD_ID) VALUES 
('IT', 1),
('RRHH', 1),       
('Marketing', 2),   
('Ventas', 3),
('Soporte', 2),
('Desarrollo', 1),
('Finanzas', 3),
('Logística', 4),
('Producción', 2),
('Compras', 3);   

-- seeders tabla EMPLEADOS
INSERT INTO EMPLEADOS (NOMBRES, APELLIDO, EDAD, SUELDO, COMISION, FECHAALTA, DEPARTAMENTO_ID, PUESTO_ID) VALUES 
('Juan', 'Pérez', 25, 12000, 500, '2023-01-15', 1, 1), 
('María', 'López', 30, 14000, 700, '2023-02-20', 2, 2),
('Pedro', 'Ramírez', 28, 9000, 300, '2023-03-10', 4, 3),
('Ana', 'Torres', 22, 12500, 400, '2023-04-18', 6, 2),
('Carlos', 'Ruiz', 34, 13000, 600, '2023-05-25', 7, 4),
('Lucía', 'Fernández', 29, 11000, 350, '2023-06-14', 5, 5),
('Andrés', 'Gómez', 27, 14500, 800, '2023-07-23', 2, 1),
('Sofía', 'Martínez', 24, 10500, 450, '2023-08-01', 3, 3),
('Miguel', 'Romero', 33, 9000, 200, '2023-09-09', 9, 5),
('Natalia', 'Díaz', 26, 13500, 500, '2023-10-21', 10, 4),
('Roberto', 'Herrera', 31, 11500, 400, '2023-11-15', 2, 2),
('Laura', 'García', 23, 9500, 250, '2023-12-05', 5, 5),
('Cristina', 'Castro', 28, 15000, 750, '2024-01-07', 7, 1),
('José', 'Gutiérrez', 34, 14000, 650, '2024-02-14', 1, 2),
('Camila', 'Rivas', 29, 12000, 500, '2024-03-10', 4, 3),
('Fernando', 'Sosa', 35, 14500, 600, '2024-04-18', 3, 1),
('Mariano', 'Silva', 22, 10000, 300, '2024-05-27', 9, 5),
('Carolina', 'Campos', 32, 13000, 500, '2024-06-20', 10, 4),
('Patricia', 'López', 28, 12500, 450, '2024-07-30', 8, 2),
('Tomás', 'Peña', 27, 11500, 300, '2024-08-12', 2, 5),
('Juliana', 'Alvarado', 26, 9500, 400, '2024-09-22', 5, 1),
('Alberto', 'Ramos', 33, 15000, 800, '2024-10-15', 6, 3),
('Paula', 'Cáceres', 30, 14000, 600, '2024-11-09', 7, 4),
('Damián', 'Correa', 29, 8500, 200, '2024-12-20', 9, 2),
('Marcelo', 'Reyes', 23, 8000, 100, '2024-01-18', 10, 5),
('Bianca', 'Orozco', 34, 13500, 550, '2024-02-12', 2, 3),
('Fabián', 'Estévez', 27, 9500, 250, '2024-03-21', 1, 4),
('Sandra', 'Vega', 31, 14000, 600, '2024-04-17', 3, 2),
('Raúl', 'Moreno', 28, 8000, 150, '2024-05-10', 4, 5),
('Sofía', 'Herrera', 29, 12500, 500, '2024-06-15', 8, 1),
('Liliana', 'Castro', 25, 14500, 750, '2024-07-08', 5, 2),
('Mario', 'Miranda', 26, 9000, 300, '2024-08-02', 9, 4),
('Luz', 'Guerra', 32, 11000, 400, '2024-09-20', 10, 5),
('Martín', 'Acosta', 34, 15000, 800, '2024-10-07', 2, 1),
('Agustina', 'Medina', 27, 13000, 550, '2024-11-13', 6, 3),
('Gabriela', 'Soto', 23, 10000, 350, '2024-12-10', 3, 5),
('Esteban', 'Arias', 35, 12500, 500, '2024-01-19', 9, 2),
('Pablo', 'Luna', 31, 14000, 600, '2024-02-15', 4, 4),
('Elena', 'Barreto', 29, 8500, 200, '2024-03-23', 2, 5),
('Luis', 'Ortega', 28, 11500, 400, '2024-04-05', 7, 3),
('Daniel', 'Zapata', 27, 12000, 350, '2024-05-14', 8, 1),
('Clara', 'Fuentes', 34, 9500, 250, '2024-06-03', 5, 4),
('Miguel', 'Peña', 30, 14500, 700, '2024-07-18', 6, 2),
('Rocío', 'García', 25, 11000, 400, '2024-08-27', 7, 5),
('Ramón', 'Castro', 28, 12000, 500, '2024-09-10', 1, 1),
('Mónica', 'Ruiz', 30, 13000, 450, '2024-10-22', 3, 3),
('Gabriel', 'Díaz', 33, 8000, 100, '2024-11-11', 9, 4),
('Liliana', 'Meza', 26, 12500, 500, '2024-12-05', 10, 2),
('Nicolás', 'Torres', 32, 14500, 600, '2024-01-28', 4, 5),
('Julieta', 'Aguirre', 24, 9500, 250, '2024-02-14', 6, 3),
('Marcos', 'Ocampo', 29, 13000, 350, '2024-03-21', 2, 1);
