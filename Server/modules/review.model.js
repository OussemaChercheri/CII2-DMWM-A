const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      require: [true, "User is is required field"],
    },
    event_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Events",
    },
    service_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Services",
    },
    rating: {
      type: Number,
      required: [true, "Rating is required field"],
      min: 1,
      max: 5,
    },
    message: {
      type: String,
      required: [true, "Message is required field"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Reviews", ReviewSchema);
