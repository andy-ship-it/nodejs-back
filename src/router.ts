import Router from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hola a SENATI!');
});

router.get('/welcome', (req, res) => {
    res.send('welcome a SENATI!');
});

export default router;
