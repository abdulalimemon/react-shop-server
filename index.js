const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");

// MiddleWare
app.use(cors());
app.use(express.json());
app.use("/api/products", products_routes)


// MongoDB




// APIs
app.get('/', (req, res) => {
    res.send('Running Server')
});


const start = async () => {
    try {
        await connectDB();
        // Port Listening
        app.listen(port, () => {
            console.log('Listening to port', port);
        });
    } catch (error) {

    }
}

start();

