//import mongose
const mongoose = require('mongoose');

//define the schema for our event model
const eventSchema = mongoose.Schema({
  title: {
    type: String,
    },
  description:{
    type: String,
        },
  date: {
    type: Date,
    
        },
  time:{
    type: Number,

        },
  location: {
    type: String,
    
        },
  categorie:{
    type: String,
    
        },
  price:{
    type: Number,
    
        },
  dateregistredeb:{
    type: Date,
    
        },
  dateregistrefin:{
    type: Date,
    
        },
        nbrtickets:{
          type:Number,
        },
  image:{
    type: String,
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  ratings: [
    {
        star: Number,
        comment: String,
        postedby: {type: mongoose.Schema.Types.ObjectId, ref: "Auth"},
    },
  ],
  totalrating: {
    type: String,
    default: 0,
  },
}
);

//create n event model
const Event = mongoose.model('Event', eventSchema);
//export the event model
module.exports = Event;