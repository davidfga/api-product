const express = require('express')

const app = express()

const { config } = require('./config/index')

const {productApi} = require('./routes/product.js')
const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers')
const { notFoundHandler } = require('./utils/middleware/notFoundHandler')
//body parser
app.use(express.json())
//routes
productApi(app)
//catch 404
app.use(notFoundHandler)
//errors middleware
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, () => console.log(`Server lisntening http://localhost:${config.port}`))