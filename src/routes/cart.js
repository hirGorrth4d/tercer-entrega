const Handler = require('express-async-handler');
const {Router} = require('express');
const {CartController} = require('../controllers');

const router = new Router()

router.get('/', Handler(CartController.getCart()))
router.post('/add', Handler(CartController.addProduct()))
router.delete('/remove', Handler(CartController.deleteProduct()))
router.post('/order', Handler(CartController.createOrder()))

export default router
