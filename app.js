import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import { __dirname } from './__dirname.js'
import cartsRouter from './routes/cartsRouter.js';
import productsRouter from './routes/productsRouter.js';
import viewsRouter from './routes/viewsRouter.js';

const app = express();
const PORT = 8080;

app.use(express.static(__dirname + '/src/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/src/views');

app.use('/api/carts', cartsRouter);
app.use('/api/products', productsRouter);
app.use('/views', viewsRouter);

const httpServer = app.listen(PORT, () => {
    console.log(`Servidor escuchando al puerto ${PORT}.`)
});

const socketServer = new Server(httpServer);

socketServer.on('connection', (socket) => {
    console.log(`Usuario conectado con el ID ${socket.id}.`);
    socket.emit('fetchProducts');
    socket.on('updateProducts', () => {
        socket.emit('fetchProducts')
    });
    socket.on('disconnect', () => {
        console.log(`Usuario con ID ${socket.id} se ha desconectado.`)
    })
})