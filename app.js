import express from 'express';
import cartsRouter from './routes/cartsRouter.js'
import productsRouter from './routes/productsRouter.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/carts', cartsRouter)
app.use('/api/products', productsRouter)

app.listen(8080, () => {
    console.log('Servidor escuchando al puerto 8080.')
});