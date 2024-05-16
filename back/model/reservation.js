//import mongose
const mongoose = require('mongoose');

//define the schema for our reservation model
const reservationSchema = mongoose.Schema({
    dateReservation: {
        type: Date,
        required: true},
    eventId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true},
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true},
    isConfirmed:{
        type: Boolean,
        default: false},
    ownerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    }
);