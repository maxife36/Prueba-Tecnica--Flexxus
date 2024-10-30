SELECT E.NOMBRES
FROM EMPLEADOS E
JOIN DEPARTAMENTOS D ON E.DEPARTAMENTO_ID = D.ID
JOIN LOCALIDADES L ON D.LOCALIDAD_ID = L.ID
JOIN PUESTOS P ON E.PUESTO_ID = P.ID
WHERE L.localidad = 'Córdoba' AND (P.PUESTO = 'Analista' OR P.PUESTO = 'Programador');