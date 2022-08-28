const Handler = require('express-async-handler');
const {Router} = require('express');
const {CategoryController} = require('../controllers');

const router = new Router()

router.get('/', Hanlder(CategoryController.getAllCategories()))
router.get('/:id', Handler(CategoryController.getCategoryById()))
router.post('/', Handler(CategoryController.createCategory()))
router.put('/:id', Handler(CategoryController.updateCategory()))
router.delete('/:id', Handler(CategoryController.deleteCategory()))

export default router