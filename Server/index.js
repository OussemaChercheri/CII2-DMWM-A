const express = require('express');
const mongoose = require('mongoose');
const serviceRoute = require('./routes/touristicServices.routes');
const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());


//routes
app.use("/api/services", serviceRoute );


app.get('/', (req, res) => {
    res.send('Hello from Node API Server updated');
});


mongoose.connect("mongodb+srv://oussemachercheri01:fhmbP1Tl8FLNl5jG@backenddb.3yansug.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to database");
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });
}
).catch(() =>{
    console.log("Connection failed!");
});