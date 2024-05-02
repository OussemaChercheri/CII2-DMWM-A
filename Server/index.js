const express = require('express');
const mongoose = require('mongoose');
const serviceRoute = require('./routes/touristicServices.routes');
const eventRoute = require('./routes/event.routes');
const statisticRoute = require('./routes/statistic.routes');
const userRoute = require('./routes/user.routes');
const authRoute = require('./routes/auth.routes');



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
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);



app.get('/', (req, res) => {
    res.send('Hello from Node API Server updated');
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

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