feature/NSTI-9
import server from "./server";
const port =3000;
server.listen(port, () => {

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hola a SENATI!');
});

const port =3000;
app.listen(port, () => {
develop
    console.log('Server running on port', port);
});