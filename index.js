import express from 'express';
import { router as HomeRouter } from './Routes/home.router.js';
import { router as AboutRouter } from './Routes/about.router.js';
import { router as ContactRouter } from './Routes/contact.router.js';

const app = express();
const port = 4000;

app.use(HomeRouter);
app.use(AboutRouter);
app.use(ContactRouter);

app.listen(port, () => {
    console.log(`Server kører på ${port}`);
})