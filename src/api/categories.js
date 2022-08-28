const {CategoryModel} = require('../models');
const {ProductsApi, ApiError, ErrorStatus} = require('./index');

const find = (id) => {
    if (id) {
        return CategoryModel.findById(id)
    }
}

const create = (newCategory) => {
    CategoryModel.create(newCategory)
}

const update = (id, data) => {
    CategoryModel.findByIdAndUpdate(id, data, {
        new: true, 

    })
}

const remove = async (id) => {
    const productsWithCategory = await ProductsApi.findByCategory(id)


    if (productsWithCategory.length > 0) {
        
        throw new ApiError(
            'No se puede borrar categoria porque hay productos en esta categoria', ErrorStatus.BadRequest
        )
    }

    CategoryModel.findByIdAndDelete(id)

}

export default {
    find, create, update, remove
};
