import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import cartsRouter from './routes/cartsRouter.js';
import productsRouter from './routes/productsRouter.js';
import viewsRouter from './routes/viewsRouter.js';

const app = express();

app.use(express.static('./src/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use('/api/carts', cartsRouter);
app.use('/api/products', productsRouter);
app.use('/views', viewsRouter);

const httpServer = app.listen(8080, () => {
    console.log('Servidor escuchando al puerto 8080.')
});

export const socketServer = new Server(httpServer);

socketServer.on('connection', (socket) => {
    console.log('Usuario conectado.');
    socket.on('disconnect', () => {
        console.log('Usuario desconectado.')
    });
})