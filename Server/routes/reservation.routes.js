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
const isAuth =require("../middlewares/isAuth")

router.get("/", isAuth, getAllReservations);

router.get("/:id", isAuth, getReservation);

router.get("/event/:id", isAuth, getReservationsByEvent);

router.post("/", isAuth, createReservation);

router.delete("/:id", isAuth, deleteReservation);
router.get("/search/:title", isAuth, searchEventWithEvent);

router.get("/categorie/:categorie", isAuth, sortDate);

router.get("/date/:date", isAuth, searchEventWithDate);

module.exports = router;
