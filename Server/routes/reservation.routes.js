const express = require("express");
const router = express.Router();
const {
  getAllReservations,
  getReservation,
  getReservationsByEvent,
  createReservation,
  deleteReservation,
  searchEventWithEvent,
  searchEventWithDate,
  sortDate,
} = require("../controllers/reservation.controller");

router.get("/", getAllReservations);

router.get("/:id", getReservation);

router.get("/event/:id", getReservationsByEvent);

router.post("/", createReservation);

router.delete("/:id", deleteReservation);
+router.get("/search/:title", searchEventWithEvent);

router.get("/categorie/:categorie", sortDate);

router.get("/date/:date", searchEventWithDate);

module.exports = router;
