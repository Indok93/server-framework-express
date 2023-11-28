import express from 'express';

const router = express.Router();

router.get('/contact', (req, res) => {
    res.status(200).send('Kontakt os');
})

export { router }