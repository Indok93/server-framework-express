import express from 'express';

const router = express.Router();

router.get('/about', (req, res) => {
    res.status(200).send('Om os');
})

export { router }