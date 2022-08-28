const mongoose = require('mongoose');
const {categoryCollectionName} = require('./categories');

export const productsCollectionName = 'product';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true},
        stock: {type: Numer, required: true},
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: categoryCollectionName,
            required: true,
        },
    },
    {versionKey: false, timestamps: true},
)

export const ProductModel = mongoose.model(
    productsCollectionName, productSchema,
);