import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hola a SENATI!');
});

const port =3000;
app.listen(port, () => {
    console.log('Server running on port', port);
});