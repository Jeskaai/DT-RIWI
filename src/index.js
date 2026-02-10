require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(' ¡Conexión exitosa a MongoDB Atlas!'))
    .catch((error) => console.error(' Error al conectar a MongoDB:', error));


app.get('/', (req, res) => {
    res.send('¡Servidor de dt-riwi funcionando correctamente! ');
});


app.post('/test', (req, res) => {
    const data = req.body;
    console.log('Datos recibidos:', data);
    res.json({
        mensaje: "Datos recibidos con éxito",
        tu_dato: data
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


module.exports = app;