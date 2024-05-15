const express = require("express");
const router = express.Router();
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  searchEventWithCategorie,
  searchEventWithTitle,
  searchEventWithDate,
  sortAsc,
  approveEvent,
  getApprovedEvents,
  sortDesc,
  getImage,
} = require("../controllers/event.Controller");
const {
  isAuthenticatedUser,
  isAdmin,
} = require("../middlewares/app.authentification");

router.get("/", getEvents);

router.get("/:id", isAuthenticatedUser, getEvent);

router.post("/", isAuthenticatedUser, createEvent);

router.patch("/:id", isAuthenticatedUser, updateEvent);

router.delete("/:id", isAuthenticatedUser, deleteEvent);

router.get("/search/:title", isAuthenticatedUser, searchEventWithTitle);

router.get(
  "/categorie/:categorie",
  isAuthenticatedUser,
  searchEventWithCategorie
);

router.get("/date/:date", isAuthenticatedUser, searchEventWithDate);

router.get("/sort/:price", isAuthenticatedUser, sortAsc);

router.get("/sortdesc/:price", isAuthenticatedUser, sortDesc);

//route to approve the service by admin
router.post("/:id/approve", isAdmin, approveEvent);
router.get("/approved/:isApproved", isAuthenticatedUser, getApprovedEvents);

//route to get image

router.get("/getimage/:id", getImage);

module.exports = router;
