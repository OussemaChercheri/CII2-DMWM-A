const express = require('express');
const mongoose = require('mongoose');
const serviceRoute = require('./routes/touristicServices.routes');
const eventRoute = require('./routes/event.routes');
const statisticRoute = require('./routes/statistic.routes');
const authorRoute = require('./routes/author.routes');
const userRoute = require('./routes/user.routes');


const app = express();
require('dotenv').config();
const cors = require('cors');




const port = process.env.port || 3001;

//middleware
app.use(cors());
app.use(express.json());


//routes
app.use("/api/services", serviceRoute );
app.use("/api/events", eventRoute);
app.use("/api/statistic", statisticRoute);
app.use("/api/author", authorRoute);
app.use("/api/users", userRoute);



app.get('/', (req, res) => {
    res.send('Hello from Node API Server updated');
});

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to database");
    app.listen(3001, () => {
        console.log(`Server is running on port ${port}`);
    });
}
).catch(() =>{
    console.log("Connection failed!");
});