const mongoose = require("mongoose");
const Event = require("./event.model");

const ReservationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Events",
    required: true,
  },
  dateRes: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Reservations", ReservationSchema);
