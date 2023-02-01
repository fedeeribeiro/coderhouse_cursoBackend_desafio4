import { Router } from 'express';
import ProductManager from '../src/ProductManager.js';

const router = Router();

const productManager = new ProductManager('../utils/products.json');

router.get('/', async (request, response) => {
    const products = await productManager.getProducts(request.query);
    if (products) response.json({message: 'Productos encontrados.', products})
    else response.json({message: 'Error. No se encontraron los productos.'})
});

router.get('/:id', async (request, response) => {
    const { id } = request.params;
    const productFound = await productManager.getProductById(parseInt(id));
    if (productFound) response.json({message: 'Producto encontrado.', productFound})
    else response.json({message: 'Error. Producto no encontrado.'})
});

router.post('/', async (request, response) => {
    const { newProduct } = request.body;
    const productAdded = await productManager.addProduct(newProduct);
    if (productAdded) response.json({message: 'Producto agregado exitosamente.', newProduct})
    else response.json({message: 'Error. El producto no se ha podido agregar.'})
});

router.put('/:id', async (request, response) => {
    const { id } = request.params;
    const { newValues } = request.body;

});

router.delete('/:id', async (request, response) => {
    const { id } = request.params;

});



export default router;