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
const {
  isAuthenticatedUser,
  isAdmin,
} = require("../middlewares/app.authentification");

router.get("/", isAuthenticatedUser, getAllReservations);

router.get("/:id", isAuthenticatedUser, getReservation);

router.get("/event/:id", isAuthenticatedUser, getReservationsByEvent);

router.post("/", isAuthenticatedUser, createReservation);

router.delete("/:id", isAuthenticatedUser, deleteReservation);
router.get("/search/:title", isAuthenticatedUser, searchEventWithEvent);

router.get("/categorie/:categorie", isAuthenticatedUser, sortDate);

router.get("/date/:date", isAuthenticatedUser, searchEventWithDate);

module.exports = router;
