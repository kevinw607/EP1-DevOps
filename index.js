const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// "Base de datos" en memoria
let alumnos = [
    { nombre: "Juan Perez", nota: 5.5 },
    { nombre: "Ana Gomez", nota: 6.2 },
    { nombre: "Pedro Soto", nota: 4.8 }
];

// Endpoint base: Listar alumnos
app.get('/alumnos', (req, res) => {
    res.json(alumnos);
});

app.listen(PORT, () => {
    console.log(`Servidor de Notas corriendo en el puerto ${PORT}`);
});

// Endpoint: Calcular promedio del curso
app.get('/promedio', (req, res) => {
    
    // PARCHE DE EMERGENCIA: Validar que existan alumnos 
    if (alumnos.length === 0) {
        return res.status(400).json({ error: "No hay alumnos para calcular el promedio" });
    }
    
    const sumaNotas = alumnos.reduce((acc, alumno) => acc + alumno.nota, 0);
    const promedio = sumaNotas / alumnos.length;
    res.json({ promedio_curso: promedio.toFixed(1) });
});