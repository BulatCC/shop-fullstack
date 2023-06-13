const { Schema, model } = require('mongoose');

const schema = new Schema({
    img: String,
    title: String,
    price: Number,
    productType: String,
    bestSeller: Boolean,
    gender: String,
    collectionName: String,
    description: String,
    colors: [
        {
            color: String,
            images: [String],
            size: {
                XS: {
                  title: String,
                  value: String
                },
                S: {
                    title: String,
                    value: String
                },
                M: {
                    title: String,
                    value: String
                },
                L: {
                    title: String,
                    value: String
                },
                XL: {
                    title: String,
                    value: String
                },
                "2XL": {
                    title: String,
                    value: String
                },
                "3XL": {
                    title: String,
                    value: String
                }
              }
        }
    ]
},{
    timestamps: true
});

module.exports = model('Product', schema);