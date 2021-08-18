const assert = require('assert')
const proxyQuire = require('proxyquire')

const { productMock, ProductServiceMock } = require('../utils/mock/product')
const {testServer} = require('../utils/testServer')

describe('routes - products', function () {
    const route = proxyQuire('../routes/product',{
        '../services/product': ProductServiceMock
    })


    const request = testServer(route)

    describe('GET /product', function () {
        it('should response with status 200', function (done) {
            request.get('/api/product').expect(200, done)
        })
    })
})