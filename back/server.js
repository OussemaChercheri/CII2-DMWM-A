const express = require('express');
const port = process.env.port || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('./config/connect');
require('dotenv').config();




// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//routes

const authRoute = require('./src/routes/author');
const userRoute = require('./src/routes/userRoute');
const eventRoute = require('./src/routes/eventRouter');
const serviceRoute = require('./src/routes/touristicServices.routes');
const categoryRoutes=require('./src/routes/category.routes')

app.use("/events", eventRoute );
app.use("/services", serviceRoute );
app.use('/author', authRoute);
app.use('/categories', categoryRoutes);
app.use('/user', userRoute);

app.get('/', (req, res) => {
    res.send('Hello from Node API Server updated');
});

app.listen(port, (error) => {
    if (error) {
        console.error('Failed to start the server:', error);
    } else {
        console.log(`App is running on port ${port}`);
    }
});


