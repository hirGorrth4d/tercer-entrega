const {Mongoose} = require('mongoose');
const { productsCollectionName} = require('./products');
const {userCollectionName} = require('./users');

export const cartCollectionName = 'cart';

const productItem = new Mongoose.Schema(
    {
        productId: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: productsCollectionName,
            required: true,
        },
        items: {type: Number, default: 1},
    },
    {_id: false},
);
const cartSchema = new Mongoose.Schema(
    {
        userId: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: userCollectionName,
            required: true,
        },
        products: [productItem],
    },
    {versionKey: false, timestamps: true},
)

export const CartModel = Mongoose.model(cartCollectionName, cartSchema)