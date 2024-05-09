const mongoose = require("mongoose");
const Event = require("./event.model");

const ReservationSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  dateRes: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
