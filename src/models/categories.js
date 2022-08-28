const mongoose = require('mongoose');

export const categoryCollectionName = 'category';

const categorySchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
    },
    {versionKey: false, timestamps: true},
);

export const CategoryModel = mongoose.model(
    categoryCollectionName, categorySchema,
);