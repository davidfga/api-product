const express = require('express');
const ProductService = require('../services/product');
const { validationHandler } = require('../utils/middleware/validationHandler');
const {
    productIdSchema,
    createProductSchema,
    updateProductSchema,
} = require('../utils/schema/product');

const { cacheResponse } = require('../utils/cacheResponse');
const {
    FIVE_MINUTES_IN_SECONDS,
    SIXTY_MINUTES_IN_SECONDS,
} = require('../utils/time');

function productApi(app) {
    const router = express.Router();
    app.use('/api/product', router);

    const productService = new ProductService();

    router.get('/', async (req, res, next) => {
        cacheResponse(res, FIVE_MINUTES_IN_SECONDS)
        const { tags } = req.query;
        try {
            const product = await productService.getProductList({ tags });
            res.status(200).json({
                data: product,
                message: 'product listed',
            });
        } catch (error) {
            next(error);
        }
    });

    router.get(
        '/:productId',
        validationHandler({ productId: productIdSchema }, 'params'),
        async (req, res, next) => {
            cacheResponse(res, SIXTY_MINUTES_IN_SECONDS)
            const { productId } = req.params;

            try {
                const product = await productService.getProduct({ productId });
                res.status(200).json({
                    data: product,
                    message: 'product retrieved',
                });
            } catch (error) {
                next(error);
            }
        }
    );

    router.post(
        '/',
        validationHandler(createProductSchema),
        async (req, res, next) => {
            const { body: product } = req;

            try {
                const createdProductId = await productService.createProduct({
                    product,
                });
                res.status(201).json({
                    data: createdProductId,
                    message: 'product created',
                });
            } catch (error) {
                next(error);
            }
        }
    );

    router.put(
        '/:productId',
        validationHandler({ productId: productIdSchema }),
        validationHandler(updateProductSchema),
        async (req, res, next) => {
            const { productId } = req.params;
            const { body: product } = req;

            try {
                const updatedProductId = await productService.updateProduct({
                    productId,
                    product,
                });
                res.status(200).json({
                    data: updatedProductId,
                    message: 'product updated',
                });
            } catch (error) {
                next(error);
            }
        }
    );

    router.delete(
        '/:productId',
        validationHandler({ productId: productIdSchema }),
        async (req, res, next) => {
            const { productId } = req.params;
            try {
                const deletedProductId = await productService.deleteProduct({
                    productId,
                });
                res.status(200).json({
                    data: deletedProductId,
                    message: 'product deleted',
                });
            } catch (error) {
                next(error);
            }
        }
    );
}

module.exports = { productApi };
