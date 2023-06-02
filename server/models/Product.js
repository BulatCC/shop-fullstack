const { Schema, model } = require('mongoose');

const schema = new Schema({
    img: String,
    title: String,
    price: String,
    productType: String,
    bestSeller: Boolean,
    gender: String,
    collectionName: String,
    description: String,
    colors: {
        color: String,
        images: [String],
        size: [{
            type: String
        }]
    },
},{
    timestamps: true
});

module.exports = model('Product', schema);