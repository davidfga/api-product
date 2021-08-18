const MongoLib = require('../utils/lib/mongo');

class ProductService {
    constructor() {
        this.collection = 'product';
        this.mongoDB = new MongoLib();
    }
    async getProductList({ tags }) {
        const query = tags && { tags: { $in: tags } };
        const productList = await this.mongoDB.getAll(this.collection, query);
        return productList || [];
    }
    async getProduct({ productId }) {
        const product = await this.mongoDB.get(this.collection, productId);
        return product || {};
    }
    async createProduct({ product }) {
        const createdProductId = await this.mongoDB.create(
            this.collection,
            product
        );
        return createdProductId || {};
    }
    async updateProduct({ productId, product } = {}) {
        const updatedProductId = await this.mongoDB.update(
            this.collection,
            productId,
            product
        );
        return updatedProductId || {};
    }
    async deleteProduct({ productId }) {
        const deletedProductId = await this.mongoDB.delete(
            this.collection,
            productId
        );
        return deletedProductId || {};
    }
}

module.exports = ProductService;
