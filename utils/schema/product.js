const joi = require('@hapi/joi')

const productIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const productKind = joi.string().max(80)
const productName = joi.string().max(80)
const productPrice = joi.number()
const productImage = joi.string().uri()
const productDescription  = joi.string()

const createProductSchema = {
    kind: productKind.required(),
    name: productName.required(),
    price: productPrice.required(),
    image: productImage.required(),
    description: productDescription.required()
}
const updateProductSchema = {
    kind: productKind,
    name: productName,
    price: productPrice,
    image: productImage,
    description: productDescription
}

module.exports = {
    productIdSchema,
    createProductSchema,
    updateProductSchema
}