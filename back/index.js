
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const eventRoute = require('./router/eventRouter');

app.use(express.json());

//routes
app.use("/api/events", eventRoute );

app.get('/', (req, res) => {
    res.send('Hello from Node API Server updated');
});

mongoose.connect("mongodb+srv://donia:cGvIoJf7KshJcyoO@backenddb.3yansug.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to database");
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });
}
).catch(() =>{
    console.log("Connection failed!");
});