const Product = require('../models/Product');
const mockProduct = require('../mock/mockData.json');

module.exports = async () => {
    const products = await Product.find();

    const createInitialEntity = async (Model, data) => {
        await Model.collection.drop();
        return Promise.all(
            data.map(async item => {
                try {
                    await new Model(item).save();
                }
                catch (e) {
                    console.log(e)
                }
            })
        );
    }

    if (products.length < mockProduct.length) {
        await createInitialEntity(Product, mockProduct)
    }
}