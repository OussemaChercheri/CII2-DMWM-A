const express = require('express');
const app = express();
require('./config/connect');
const port = 3000;
const authorApi = require('./src/routes/author');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use('/api', authorApi);

app.listen(port, (error) => {
    if (error) {
        console.error('Failed to start the server:', error);
    } else {
        console.log(`App is running on port ${port}`);
    }
});

