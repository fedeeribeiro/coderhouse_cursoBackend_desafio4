import { Router } from 'express';
import ProductManager from '../src/ProductManager.js';

const router = Router();

const productManager = new ProductManager('./utils/products.json');

router.get('/', async (request, response) => {
    const products = await productManager.getProducts();
    response.render('home', { products })
});

router.get('/realTimeProducts', async (request, response) => {
    const products = await productManager.getProducts();
    response.render('realTimeProducts', { products })
});

export default router;