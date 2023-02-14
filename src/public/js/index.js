// const socketClient = io();

// const productsContainer = document.getElementById('real-time-products-list');
// const addProductForm = document.getElementById('add-product-form');
// const deleteProductForm = document.getElementById('delete-product-form');

// addProductForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(addProductForm);
//     fetch('/api/products', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     socketClient.emit('updateProducts')
// });

// deleteProductForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const formData = new FormData(deleteProductForm);
//     let productId = formData.id;

//     fetch(`/api/products/${productId.toString()}`, {
//         method: 'DELETE',
//     })
//     .then(response => response.json())
//     socketClient.emit('updateProducts')
// });

// socketClient.on('fetchProducts', () => {
//     fetch('/api/products', {
//         method: 'GET'
//     })
//     .then(response => response.json())
//     .then(products => {
//         let productList = products.map(product => {
//             return `<p>ID: ${product.id} - TITLE: ${product.title} - DESCRIPTION: ${product.description} - PRICE: ${product.price} - STATUS: ${product.status} - CODE: ${product.code} - STOCK: ${product.stock}</p>`
//         }).join(' ');
//         productsContainer.innerHTML = productList
//     })
// })