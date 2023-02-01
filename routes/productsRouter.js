import { Router } from 'express';
import ProductManager from '../src/ProductManager.js';

const router = Router();

const productManager = new ProductManager('./utils/products.json');

router.get('/', async (request, response) => {
    const products = await productManager.getProducts(request.query);
    if (products) response.json({message: 'Productos encontrados.', products})
    else response.json({message: 'Error. No se encontraron los productos.'})
});

router.get('/:productId', async (request, response) => {
    const { productId } = request.params;
    const productFound = await productManager.getProductById(parseInt(productId));
    if (productFound) response.json({message: 'Producto encontrado.', productFound})
    else response.json({message: 'Error. Producto no encontrado.'})
});

router.post('/', async (request, response) => {
    const newProduct = request.body;
    const addedProduct = await productManager.addProduct(newProduct["title"], newProduct["description"], newProduct["price"], newProduct["thumbnail"], newProduct["code"], newProduct["stock"], newProduct["category"], newProduct["status"]);
    if (addedProduct) response.json({message: 'Producto agregado exitosamente.', addedProduct})
    else response.json({message: 'Error. El producto no se ha podido agregar.'})
});

router.put('/:productId', async (request, response) => {
    const { productId } = request.params;
    const newValuesObject = request.body;
    let updatedProduct;
    for (const prop in newValuesObject) {
        updatedProduct = await productManager.updateProduct(parseInt(productId), prop, newValuesObject[prop])      
    }
    if (updatedProduct) response.json({message: 'Se ha actualizado el producto exitosamente.', updatedProduct})
    else response.json({message: 'Error. El producto no se ha podido actualizar.'})  
});

router.delete('/:productId', async (request, response) => {
    const { productId } = request.params;
    const deletedProduct = await productManager.deleteProduct(parseInt(productId));
    if (deletedProduct) response.json({message: 'Se ha eliminado el producto exitosamente.'})
    else response.json({message: 'Error. El producto no se ha podido eliminar.'})
});

export default router;