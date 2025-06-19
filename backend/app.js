const express = require('express');
const cors = require('cors');

const productRouter = require('./routes/productRoutes');

const app = express();

app.use(cors({
    origin: ['http://localhost:3000',"https://geer-frontend.vercel.app"],
    credentials: true,
}))


app.use(express.json({ limit: "10kb" }));

app.use('/api/v1/products',productRouter);

app.all(/.*/, (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on this server!`);
    error.statusCode = 404;
    error.status = 'fail';
    next(error);
});


module.exports = app;
