const express = require('express');
const app = express();
require('./config/connect');

const port = 3000;
const authorApi = require('./src/routes/author');
const eventRoute = require('./src/routes/eventRouter');
const serviceRoute = require('./src/routes/touristicServices.routes');
const categoryRoutes=require('./src/routes/category.routes')
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());



//routes
app.use("/api/events", eventRoute );
app.use("/api/services", serviceRoute );
app.use('/api', authorApi);
app.use('/api/categories', categoryRoutes);

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


