import { Router } from 'express';
import CartManager from '../src/CartManager.js';

const router = Router();

const cartManager = new CartManager('./utils/carts.json');

router.post('/', async (request, response) => {
    await cartManager.addCart();
    response.json({message: 'Se ha creado el carrito exitosamente.'})
});

router.get('/:cartId', async (request, response) => {
    const { cartId } = request.params;
    const productsFound = await cartManager.getProductsFromCart(parseInt(cartId));
    if (productsFound) response.json({message: 'Productos encontrados en el carrito.', productsFound})
    else response.json({message: 'Error. Carrito no encontrado.'})
})

router.post('/:cartId/products/:productId', async (request, response) => {
    const { cartId, productId } = request.params;
    const addedProduct = await cartManager.addProductToCart(parseInt(cartId), parseInt(productId));
    if (addedProduct) response.json({message: 'El producto se ha agregado al carrito exitosamente.'})
    else response.json({message: 'Error. El producto no se ha podido agregar al carrito.'})
});

export default router;